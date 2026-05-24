/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { QuoteRequest } from '../types';
import { PRODUCT_CATEGORIES } from '../data';
import { FileText, MapPin, Calendar, Layers, ShieldCheck, Scale, CircleAlert, Sparkles, CheckCircle2, Trash2, HardDriveUpload } from 'lucide-react';

interface QuotationSystemProps {
  prefilledProductName?: string;
  onClearPrefilledProduct?: () => void;
  activeSectorName?: string;
}

export default function QuotationSystem({ prefilledProductName, onClearPrefilledProduct, activeSectorName }: QuotationSystemProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productRequired: '',
    industrialApplication: '',
    estimatedQuantity: '',
    deliveryLocation: '',
    requiredTimeline: '',
    notes: ''
  });

  const [localQuotes, setLocalQuotes] = useState<QuoteRequest[]>([]);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [activeReferenceId, setActiveReferenceId] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Prefill check on mount/updates
  useEffect(() => {
    if (prefilledProductName) {
      setFormData((prev) => ({
        ...prev,
        productRequired: prefilledProductName
      }));
    }
  }, [prefilledProductName]);

  useEffect(() => {
    if (activeSectorName) {
      setFormData((prev) => ({
        ...prev,
        industrialApplication: activeSectorName
      }));
    }
  }, [activeSectorName]);

  // Load existing quotes from LocalStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('oildrop_rfqs');
      if (stored) {
        setLocalQuotes(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading RFQ storage records:', e);
    }
  }, []);

  // Save quotes helper
  const saveQuotes = (quotes: QuoteRequest[]) => {
    try {
      localStorage.setItem('oildrop_rfqs', JSON.stringify(quotes));
      setLocalQuotes(quotes);
    } catch (e) {
      console.error('Error setting RFQ storage record:', e);
    }
  };

  // Safe chemical name finder for validation or warning flags
  const allProductNames = React.useMemo(() => {
    const list = [];
    for (const cat of PRODUCT_CATEGORIES) {
      for (const item of cat.items) {
        list.push(item.name.toLowerCase());
      }
    }
    return list;
  }, []);

  // Sourcing helper recommendations based on volume quantity and text matches
  const logisticsEstimation = React.useMemo(() => {
    const quantityLower = formData.estimatedQuantity.toLowerCase();
    const qtyNum = parseFloat(formData.estimatedQuantity);
    const prodLower = formData.productRequired.toLowerCase();
    
    let containerType = 'LCL / General Palletized Freight';
    let safetyNotice = 'Standard industrial handling specs apply (TDS guidelines).';
    let documentRequirements = 'CoA (Certificate of Analysis) and Material Safety Data Sheet (MSDS).';

    if (!isNaN(qtyNum) && qtyNum >= 15) {
      containerType = 'Full Container Load (FCL) or Dedicated ISO Chemical Tankers';
      safetyNotice = 'Classified high-volume shipping. Port-clearance coordination prior to origin dispatch required.';
    } else if (prodLower.includes('glycol') || prodLower.includes('teg') || prodLower.includes('meg') || prodLower.includes('caustic') || prodLower.includes('coagulant')) {
      containerType = '200L Sealed Steel Drums or 1000L IBC Chemical Totes on heavy-duty plastic pallets';
      safetyNotice = 'Liquid chemical handling protocols apply. Avoid dynamic heat points.';
    } else if (prodLower.includes('sieve') || prodLower.includes('alumina') || prodLower.includes('desiccant')) {
      containerType = 'Sealed Airtight Heavy-Duty Double-wall Steel Drums with desiccant wrappers';
      safetyNotice = 'Highly hydroscopic material. Moisture protection seals fail if exposed to relative humidity > 40%.';
    }

    return {
      containerType,
      safetyNotice,
      documentRequirements
    };
  }, [formData.estimatedQuantity, formData.productRequired]);

  // Trigger form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];

    // Validations
    if (!formData.companyName.trim()) errors.push('Company Name is required.');
    if (!formData.contactPerson.trim()) errors.push('Contact Person is required.');
    if (!formData.email.trim() || !formData.email.includes('@')) errors.push('Please enter a valid business email.');
    if (!formData.phone.trim()) errors.push('Telephone contact is required.');
    if (!formData.productRequired.trim()) errors.push('Product or Material specification is required.');
    if (!formData.estimatedQuantity.trim()) errors.push('Estimated Quantity is required.');
    if (!formData.deliveryLocation.trim()) errors.push('Delivery Location is required.');
    if (!formData.requiredTimeline.trim()) errors.push('Timeline expectation is required.');

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors([]);

    // Generate unique Tracking variables
    const randNum = Math.floor(100000 + Math.random() * 900000);
    const reference = `OD-${randNum}`;
    const newQuote: QuoteRequest = {
      id: Math.random().toString(36).substr(2, 9),
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      productRequired: formData.productRequired,
      industrialApplication: formData.industrialApplication || 'All Processes matched',
      estimatedQuantity: formData.estimatedQuantity,
      deliveryLocation: formData.deliveryLocation,
      requiredTimeline: formData.requiredTimeline,
      notes: formData.notes,
      submittedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      status: 'Pending Review',
      referenceId: reference
    };

    const updated = [newQuote, ...localQuotes];
    saveQuotes(updated);

    // Set state indicators
    setActiveReferenceId(reference);
    setSubmissionSuccess(true);
    
    // Clean up prefills and inputs
    if (onClearPrefilledProduct) {
      onClearPrefilledProduct();
    }
    
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      productRequired: '',
      industrialApplication: '',
      estimatedQuantity: '',
      deliveryLocation: '',
      requiredTimeline: '',
      notes: ''
    });

    // Auto fade-out achievement message after 8 seconds
    setTimeout(() => {
      setSubmissionSuccess(false);
    }, 12000);
  };

  const handleDeleteQuote = (id: string) => {
    const filtered = localQuotes.filter(q => q.id !== id);
    saveQuotes(filtered);
  };

  return (
    <div className="bg-slate-50 py-12 lg:py-20 font-sans animate-fade-in" id="quotation-module">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title Indicator */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600">COMMERCIAL SOURCING portal</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mt-1">
            Industrial Chemical Procurement Request
          </h2>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl font-light">
            Submit technical and commercial requirements for evaluation, logistics budgeting, and sourcing support.
          </p>
        </div>

        {/* Floating Success Indicator Card */}
        {submissionSuccess && (
          <div className="bg-slate-900 border border-orange-500/30 text-white rounded-sm p-6 shadow-md animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-2 bg-orange-600"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center space-x-3.5">
                <CheckCircle2 className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h4 className="text-base font-bold text-slate-50 font-display uppercase tracking-wide">RFQ Submitted Successfully</h4>
                  <p className="text-xs text-slate-300 mt-0.5 font-light">
                    Your request has been filed under tracking code: <strong className="text-orange-400 font-mono text-sm">{activeReferenceId}</strong>. Global procurement desks have been alerted.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSubmissionSuccess(false)}
                className="text-xs px-3 py-1.5 rounded-sm bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors uppercase tracking-widest"
              >
                Dismiss Indicator
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Sourcing Form */}
          <div className="lg:col-span-8 bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden">
            <div className="bg-slate-950 text-white p-5 border-b border-slate-800 flex justify-between items-center px-6 sm:px-8">
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold tracking-widest uppercase font-mono text-slate-100">Technical Sourcing Worksheet</h3>
                <p className="text-[10px] text-slate-400 font-light">All fields marked represent critical evaluation values.</p>
              </div>
              <span className="text-[9px] bg-orange-600 text-white font-bold px-3 py-1 rounded-sm tracking-widest uppercase font-mono">Verified Form</span>
            </div>

            {/* Validation Overlay */}
            {validationErrors.length > 0 && (
              <div className="bg-rose-50 border-b border-rose-200 p-4 px-6 sm:px-8 text-rose-800 text-xs space-y-1 flex items-start space-x-3">
                <CircleAlert className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-900 uppercase tracking-wider text-[10px] font-mono">Incomplete Sourcing Parameters:</span>
                  <ul className="list-disc pl-4 space-y-0.5 mt-1 font-mono text-red-700">
                    {validationErrors.map((err, idx) => (
                      <li key={idx}>{err}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Company Name */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                    Company Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. West African Refining Hub"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                  />
                </div>

                {/* Contact Person */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                    Contact Person Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Engr. Chinedu Okafor"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                    Company Email <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@yourcompany.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 font-mono"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                    Direct Telephone Contact <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +234 803 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 font-mono"
                  />
                </div>

                {/* Product/Material name */}
                <div className="space-y-1.5 sm:col-span-2">
                  <div className="flex justify-between items-center">
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                      Product or Material required <span className="text-orange-600">*</span>
                    </label>
                    {prefilledProductName && (
                      <span className="text-[9px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-sm font-bold uppercase tracking-wider font-mono">
                        Pushed from Product list
                      </span>
                    )}
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Triethylene Glycol (TEG) 99.5% purity"
                    value={formData.productRequired}
                    onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 font-bold font-display"
                  />
                </div>

                {/* Industrial Application */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                    Industrial Application
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Natural Gas Dehydration unit"
                    value={formData.industrialApplication}
                    onChange={(e) => setFormData({ ...formData, industrialApplication: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                  />
                </div>

                {/* Quantity */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                    Estimated Quantity <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 25 Metric Tonnes"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                  />
                </div>

                {/* Delivery Location */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                    Delivery Location / Terminal <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Onne Port Bulking Facility, Port Harcourt"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                  />
                </div>

                {/* Timeline */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                    Required Delivery Timeline <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Immediate / Next 45 Days max"
                    value={formData.requiredTimeline}
                    onChange={(e) => setFormData({ ...formData, requiredTimeline: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                  />
                </div>

              </div>

              {/* Technical Notes / Special parameters */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-widest font-mono">
                  Technical details / Sizing / Custom Tolerances (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Insert custom mesh density, particle limits, desired storage temperature bounds, or additional logistical notes here..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
                />
              </div>

              {/* Verification check box */}
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-sm space-y-1 flex items-start space-x-2.5">
                <input
                  type="checkbox"
                  id="chk-terms"
                  required
                  defaultChecked
                  className="mt-1 h-4 w-4 accent-slate-950 rounded-sm"
                />
                <label htmlFor="chk-terms" className="text-slate-800 text-xs select-none leading-relaxed font-light">
                  <span className="font-bold opacity-90 uppercase tracking-wider text-[10px] font-mono mr-1">Sourcing Terms:</span> I confirm that the requested materials will be handled according to Standard Chemical Safety sheets and will be reviewed under vetted legal end-use limitations.
                </label>
              </div>

              <button
                type="submit"
                id="btn-rfq-submit"
                className="w-full bg-slate-950 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-sm transition-all shadow-md tracking-wider flex items-center justify-center space-x-2 cursor-pointer uppercase text-xs"
              >
                <FileText className="w-5 h-5 text-orange-500" />
                <span>SUBMIT TRANS-NATIONAL RFQ REQUEST</span>
              </button>

            </form>
          </div>

          {/* Right Siding: Feasibility and Local Storage Portal */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Live Logistics Guide Board */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-sm p-6 space-y-5">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
                <Scale className="w-5 h-5 text-orange-600" />
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-900 font-mono">Dynamic Sourcing Guide</h4>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                Calculated logistical guidelines for {formData.productRequired || 'selected materials'} based on current input parameters.
              </p>

              <div className="space-y-4">
                
                {/* Target Shipping */}
                <div className="space-y-1 bg-slate-50 p-3 rounded-sm border border-slate-200">
                  <span className="block text-[9px] font-bold text-slate-500 uppercase font-mono tracking-widest">Suggested Freight Format:</span>
                  <span className="block text-xs font-bold text-slate-900 font-display">{logisticsEstimation.containerType}</span>
                </div>

                {/* Handling Rules */}
                <div className="space-y-1 bg-slate-50 p-3 rounded-sm border border-slate-200">
                  <span className="block text-[9px] font-bold text-slate-500 uppercase font-mono tracking-widest">Regulatory Protective Protocols:</span>
                  <span className="block text-xs text-slate-700 leading-relaxed font-mono font-medium">{logisticsEstimation.safetyNotice}</span>
                </div>

                {/* Necessary filing */}
                <div className="space-y-1 bg-slate-50 p-3 rounded-sm border border-slate-200">
                  <span className="block text-[9px] font-bold text-slate-500 uppercase font-mono tracking-widest">Documents accompany shipment:</span>
                  <p className="text-xs text-slate-600 font-display font-medium">{logisticsEstimation.documentRequirements}</p>
                </div>

              </div>
              
              <div className="text-[10px] text-slate-400 font-mono flex items-center space-x-1.5 justify-center pt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Port Harcourt-Houston Hub Link</span>
              </div>
            </div>

            {/* Local Client Tracking Records (LocalStorage values) */}
            <div className="bg-slate-900 text-white rounded-sm p-6 border border-slate-850 space-y-5">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="text-[10px] uppercase tracking-widest text-slate-200 font-bold font-mono">Sourced Records Storage</span>
                </div>
                <span className="bg-slate-800 text-orange-400 font-mono text-[9px] font-bold px-2 py-0.5 rounded-sm">
                  {localQuotes.length} active
                </span>
              </div>

              {localQuotes.length === 0 ? (
                <div className="text-center py-6 space-y-2 font-sans">
                  <p className="text-xs text-slate-400 font-light">No recent submissions captured on this browser.</p>
                  <p className="text-[10px] text-slate-500 leading-normal font-mono font-light">Fill the procurement sheet to test local workflow tracking operations.</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                  {localQuotes.map((q) => (
                    <div key={q.id} className="bg-slate-950 border border-slate-800 p-4 rounded-sm space-y-2.5 relative group animate-fade-in">
                      
                      <div className="flex justify-between items-start gap-2">
                        <div className="space-y-0.5">
                          <code className="text-[11px] font-bold text-orange-400 font-mono tracking-wider">{q.referenceId}</code>
                          <span className="block text-xs font-bold text-white truncate max-w-[160px] font-display uppercase tracking-wide">{q.productRequired}</span>
                        </div>
                        
                        <button
                          onClick={() => handleDeleteQuote(q.id)}
                          className="text-slate-500 hover:text-rose-400 transition-colors p-1 shrink-0"
                          title="Purge recorded RFQ"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-400 font-mono">
                        <div>
                          <span className="text-slate-500 uppercase tracking-widest">Qty:</span> {q.estimatedQuantity}
                        </div>
                        <div>
                          <span className="text-slate-500 uppercase tracking-widest">Date:</span> {q.submittedAt}
                        </div>
                      </div>

                      <div className="border-t border-slate-800 pt-2 flex justify-between items-center text-[10px]">
                        <span className="text-slate-400 truncate max-w-[120px] font-light">{q.companyName}</span>
                        <span className="bg-emerald-950/60 text-emerald-300 font-mono font-bold px-2 py-0.5 rounded-sm border border-emerald-800/30 uppercase tracking-widest text-[9px]">
                          {q.status}
                        </span>
                      </div>

                    </div>
                  ))}
                </div>
              )}

              {localQuotes.length > 0 && (
                <button
                  onClick={() => {
                    if (confirm('Verify: Purge all local client tracking cache? This is irreversible.')) {
                      saveQuotes([]);
                    }
                  }}
                  className="w-full text-center text-[9px] font-bold text-slate-500 hover:text-orange-400 transition-colors uppercase font-mono tracking-widest pt-2 block border-t border-slate-800 cursor-pointer"
                >
                  Clear Browser Cache
                </button>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
