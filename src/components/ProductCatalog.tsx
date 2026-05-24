/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { ProductItem, ProductCategory } from '../types';
import { PRODUCT_CATEGORIES } from '../data';
import { Search, Filter, HelpCircle, FileCheck, RefreshCw, Layers, Plus, BookOpen, AlertCircle } from 'lucide-react';

interface ProductCatalogProps {
  initialCategoryId?: string;
  onSelectProductForQuote: (productName: string) => void;
}

export default function ProductCatalog({ initialCategoryId, onSelectProductForQuote }: ProductCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(initialCategoryId || 'all');
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  // Sync with initialCategoryId changes if user navigated via Sector Served
  React.useEffect(() => {
    if (initialCategoryId) {
      setSelectedCategoryId(initialCategoryId);
    }
  }, [initialCategoryId]);

  const filteredCategories = useMemo(() => {
    return PRODUCT_CATEGORIES.map((category) => {
      const items = category.items.filter((item) => {
        const matchesSearch =
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.chemicalFormula && item.chemicalFormula.toLowerCase().includes(searchTerm.toLowerCase())) ||
          item.typicalApplications.some((app) => app.toLowerCase().includes(searchTerm.toLowerCase())) ||
          item.keySpecifications.some((spec) => spec.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesSearch;
      });

      return {
        ...category,
        items
      };
    }).filter((category) => {
      if (selectedCategoryId === 'all') return true;
      return category.id === selectedCategoryId;
    });
  }, [searchTerm, selectedCategoryId]);

  const totalFilteredCount = useMemo(() => {
    return filteredCategories.reduce((sum, category) => sum + category.items.length, 0);
  }, [filteredCategories]);

  const handleToggleExpand = (id: string) => {
    setExpandedProductId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white py-12 lg:py-20 animate-fade-in font-sans" id="catalog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Title & Sourcing Info */}
        <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="space-y-1">
            <p className="text-xs font-bold text-orange-600 tracking-widest uppercase font-mono">Verified Specifications</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Industrial Product Catalog
            </h2>
            <p className="text-slate-500 text-sm font-light">
              Explore our structured index of chemicals, adsorbents, desiccant beads, and process-stabilizing additives.
            </p>
          </div>
          
          <div className="bg-orange-50 hover:bg-orange-100/80 border border-orange-200 p-4 rounded-sm max-w-sm text-xs leading-normal text-orange-950 flex items-start space-x-2.5">
            <BookOpen className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block uppercase tracking-wider text-[10px]">Spec-Matching Guarantee</span>
              <span className="font-light">Need a custom particle size distribution or volatile content? Request custom technical evaluations directly inside the RFQ form.</span>
            </div>
          </div>
        </div>

        {/* Search and Category Filter Rack */}
        <div className="bg-slate-50 p-5 rounded-sm border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* Text Search */}
          <div className="lg:col-span-5 relative">
            <Search className="absolute left-3.5 top-3.5 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products by title, CAS formula, spec keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-sm pl-10 pr-4 py-3 text-xs uppercase tracking-wide font-medium focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900"
            />
          </div>

          {/* Tab Categories */}
          <div className="lg:col-span-7 flex flex-wrap gap-1.5 pt-1 lg:pt-0">
            <button
              onClick={() => setSelectedCategoryId('all')}
              className={`px-3.5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategoryId === 'all'
                  ? 'bg-slate-950 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-orange-600 hover:bg-slate-50'
              }`}
            >
              All Groups ({PRODUCT_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0)})
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-3.5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategoryId === cat.id
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-orange-600 hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>

        {/* Reset State display */}
        {(searchTerm || selectedCategoryId !== 'all') && (
          <div className="flex justify-between items-center bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-sm text-xs font-sans">
            <div className="text-slate-600">
              Filtered to <span className="font-bold text-slate-900 font-display">{totalFilteredCount}</span> chemical specifications matches
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategoryId('all');
              }}
              className="font-bold text-orange-600 hover:text-orange-700 flex items-center space-x-1 uppercase tracking-wider text-[11px]"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset filters</span>
            </button>
          </div>
        )}

        {/* Empty Search State */}
        {totalFilteredCount === 0 && (
          <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-sm max-w-2xl mx-auto space-y-4">
            <AlertCircle className="w-12 h-12 text-orange-500 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 font-display">No Vetted Materials Found</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
                No matching catalog items was located for &quot;{searchTerm}&quot;. However, Oildrop can source any specialty process chemical via our international procurement network desk.
              </p>
            </div>
            <button
              onClick={() => onSelectProductForQuote(searchTerm || 'Specialty Industrial Chemical')}
              className="bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs py-2.5 px-5 rounded-sm transition-colors uppercase tracking-widest"
            >
              Submit Custom Chemical Request
            </button>
          </div>
        )}

        {/* Products Grid / Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6 animate-fade-in">
              
              {/* Category Heading card */}
              <div className="bg-slate-900 text-white rounded-sm p-6 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1 max-w-2xl">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center space-x-2 font-display uppercase">
                    <Layers className="w-5 h-5 text-orange-500" />
                    <span>{category.name}</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>
                <span className="bg-slate-800 text-orange-400 font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm border border-slate-700">
                  {category.items.length} SPEC SHEET{category.items.length !== 1 ? 'S' : ''} VETTED
                </span>
              </div>

              {/* Items Card List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => {
                  const isExpanded = expandedProductId === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`bg-white border rounded-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden ${
                        isExpanded ? 'border-orange-600/40 shadow-sm ring-1 ring-orange-100' : 'border-slate-200'
                      }`}
                    >
                      <div className="p-6 space-y-4">
                        
                        {/* Upper Details */}
                        <div className="flex justify-between items-start gap-4">
                          <div className="space-y-2">
                            <h4 className="text-base font-bold text-slate-900 tracking-tight font-display">{item.name}</h4>
                            {item.chemicalFormula && (
                              <code className="inline-block bg-slate-100 text-[10px] text-slate-700 font-mono font-bold px-2 py-0.5 rounded-sm leading-none">
                                Molecular: {item.chemicalFormula}
                              </code>
                            )}
                          </div>
                          
                          <span className="bg-slate-55 border border-slate-200 text-slate-500 text-[9px] uppercase font-bold tracking-widest font-mono py-1 px-2 rounded-sm shrink-0">
                            Ref: {item.id.toUpperCase()}
                          </span>
                        </div>

                        {/* Summary description */}
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                          {item.description}
                        </p>

                        {/* Standard Packaging tag */}
                        <div className="border-t border-slate-200 pt-3 flex items-center space-x-2 text-xs">
                          <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-widest font-mono">Supply Formats:</span>
                          <span className="text-slate-800 font-bold">{item.standardPackaging}</span>
                        </div>

                        {/* Expanded Specifications Sheet */}
                        {isExpanded && (
                          <div className="pt-4 border-t border-slate-250 space-y-4 animate-fade-in bg-slate-50/50 -mx-6 px-6 pb-2">
                            
                            {/* Applications */}
                            <div className="space-y-1.5">
                              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Process Applications</h5>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] font-medium text-slate-700">
                                {item.typicalApplications.map((app, index) => (
                                  <li key={index} className="flex items-center space-x-1.5 text-slate-700 bg-white border border-slate-200 px-2 py-1 rounded-sm">
                                    <span className="w-1.5 h-1.5 bg-orange-600 flex-shrink-0"></span>
                                    <span className="truncate">{app}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Specifications */}
                            <div className="space-y-1.5">
                              <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Technical Specifications</h5>
                              <ul className="space-y-1">
                                {item.keySpecifications.map((spec, index) => (
                                  <li key={index} className="flex items-start text-[11px] text-slate-600 space-x-1 border-b border-dashed border-slate-200 pb-1 last:border-b-0">
                                    <span className="text-orange-600 font-bold mr-1">•</span>
                                    <span>{spec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                          </div>
                        )}

                      </div>

                      {/* Footer Actions */}
                      <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-between gap-2.5">
                        <button
                          onClick={() => handleToggleExpand(item.id)}
                          className="text-xs font-bold text-slate-700 hover:text-slate-950 flex items-center space-x-1 py-1.5 uppercase tracking-widest text-[10px]"
                        >
                          <BookOpen className="w-4 h-4 text-slate-400" />
                          <span>{isExpanded ? 'Hide Spec Sheet' : 'Inspect Datasheet'}</span>
                        </button>

                        <button
                          onClick={() => onSelectProductForQuote(item.name)}
                          className="bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs py-2 px-3.5 rounded-sm transition-colors flex items-center space-x-1 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5 text-orange-500" />
                          <span className="uppercase tracking-widest text-[10px]">Queue Quote</span>
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Customized Material Sourcing Overlay Box */}
        <div className="bg-slate-950 text-white rounded-sm p-6 sm:p-10 border border-slate-800 relative z-10 overflow-hidden text-center sm:text-left space-y-6">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-8 space-y-2 col-description">
              <span className="text-orange-500 text-xs font-bold tracking-widest font-mono uppercase">Liaison Sourcing Active</span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">Need specific chemistry formulation or volumes?</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-light">
                Oil Drop Chemical Ltd coordinates tailored sourcing campaigns with direct input parameters from our international refinery, LNG systems, and manufacturing supply chains. Submit your detailed requirements for prompt review.
              </p>
            </div>
            
            <div className="sm:col-span-4 flex justify-center sm:justify-end">
              <button
                onClick={() => onSelectProductForQuote('Specialty Custom Formulation')}
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-4 rounded-sm transition-all shadow-md text-xs tracking-wider uppercase"
              >
                Launch Technical Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* 4-Grid Asset Showcase Segment - Meet user request of 4 pics per page */}
        <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 sm:p-10 space-y-8 text-white mt-12 shadow-md">
          <div className="border-b border-slate-800 pb-5">
            <span className="text-[10px] font-bold tracking-[0.25em] text-orange-400 font-mono">WAREHOUSE INVENTORY & COMPOUND LOGGING</span>
            <h3 className="text-2xl font-black text-white font-display mt-1">Staged Compound Reserves</h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
              Field photography outlining desiccant molecular sieve stocks, secure container linings, process chemical barrels, and deep bed particulate filtration structures ready for transport.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group space-y-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/blue_pallet.jpg"
                  alt="Packed Boxes on Blue Pallets"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  STK-VAL // 01
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100">Desiccant Bead Reserves</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Silica gas beads and molecular sieve units stored in moisture-locked cargo boxes.
                </p>
              </div>
            </div>

            <div className="group space-y-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/pic12.jpg"
                  alt="Container logistics derrick"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  STK-VAL // 02
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100">Moisture-Locked Wraps</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Bulk compounds sealed tightly with heavy chemical shrink-wrapping layers prior to marine dispatch.
                </p>
              </div>
            </div>

            <div className="group space-y-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/pic13.jpg"
                  alt="Industrial Blue Chemical Drums on Pallets"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  STK-VAL // 03
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100">Staged Liquid Polymers</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Liquid process coagulants and polymers arranged on pallets in general stockpiles.
                </p>
              </div>
            </div>

            <div className="group space-y-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/sand.jpg"
                  alt="Piping filters installation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  STK-VAL // 04
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100">Deep-Bed Media Filters</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Process manifolds and mechanical pumps regulating sand/anthracite bed filtration.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
