/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import SectorsServed from './components/SectorsServed';
import ProductCatalog from './components/ProductCatalog';
import OperatingModel from './components/OperatingModel';
import SourcingGallery from './components/SourcingGallery';
import QuotationSystem from './components/QuotationSystem';
import ContactDesk from './components/ContactDesk';
import Lightbox from './components/Lightbox';
import { PRODUCT_CATEGORIES } from './data';
import { Globe, Droplet, Search, X, FileText, ArrowRight, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [prefilledProductName, setPrefilledProductName] = useState<string>('');
  const [activeSectorName, setActiveSectorName] = useState<string>('');
  const [productCatalogCategoryFilter, setProductCatalogCategoryFilter] = useState<string>('all');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [globalSearchTerm, setGlobalSearchTerm] = useState<string>('');

  // Handle navigating to a tab and setting associated states
  const handleNavToTab = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pre-fill a chemical name and jump straight to request form
  const handleSelectProductForQuote = (productName: string) => {
    setPrefilledProductName(productName);
    setActiveTab('procurement');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Pre-fill industry sector and jump to request form
  const handleSelectSectorQuote = (sectorTitle: string) => {
    setActiveSectorName(sectorTitle);
    setActiveTab('procurement');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Jump from Sector detail directly to filtered product catalog
  const handleSelectSectorProducts = (categoryId: string) => {
    setProductCatalogCategoryFilter(categoryId);
    setActiveTab('products');
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  // Flattened products array for the global search bar helper
  const allFlattenedProducts = React.useMemo(() => {
    return PRODUCT_CATEGORIES.flatMap(cat => 
      cat.items.map(item => ({
        ...item,
        categoryName: cat.name,
        categoryId: cat.id
      }))
    );
  }, []);

  // Filter items in global search modal
  const searchedProductsInModal = React.useMemo(() => {
    if (!globalSearchTerm.trim()) return [];
    return allFlattenedProducts.filter(item => 
      item.name.toLowerCase().includes(globalSearchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(globalSearchTerm.toLowerCase()) ||
      (item.chemicalFormula && item.chemicalFormula.toLowerCase().includes(globalSearchTerm.toLowerCase())) ||
      item.typicalApplications.some(app => app.toLowerCase().includes(globalSearchTerm.toLowerCase())) ||
      item.keySpecifications.some(spec => spec.toLowerCase().includes(globalSearchTerm.toLowerCase()))
    );
  }, [globalSearchTerm, allFlattenedProducts]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950 font-sans" id="root-app-grid">
      
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavToTab}
        onOpenQuickSearch={() => setIsSearchModalOpen(true)}
      />

      {/* Main Content Renderers */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <div className="animate-fade-in space-y-0" id="view-home">
            <Hero onNavToTab={handleNavToTab} />
            <OperatingModel />
            <SectorsServed
              onSelectSectorProducts={handleSelectSectorProducts}
              onInitiateQuoteForSector={handleSelectSectorQuote}
            />
            <SourcingGallery />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-fade-in" id="view-about">
            <AboutUs />
            <OperatingModel />
          </div>
        )}

        {activeTab === 'products' && (
          <div className="animate-fade-in" id="view-products">
            <ProductCatalog
              initialCategoryId={productCatalogCategoryFilter}
              onSelectProductForQuote={handleSelectProductForQuote}
            />
          </div>
        )}

        {activeTab === 'sectors' && (
          <div className="animate-fade-in" id="view-sectors">
            <SectorsServed
              onSelectSectorProducts={handleSelectSectorProducts}
              onInitiateQuoteForSector={handleSelectSectorQuote}
            />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="animate-fade-in" id="view-gallery">
            <SourcingGallery />
          </div>
        )}

        {activeTab === 'procurement' && (
          <div className="animate-fade-in" id="view-procurement">
            <QuotationSystem
              prefilledProductName={prefilledProductName}
              activeSectorName={activeSectorName}
              onClearPrefilledProduct={() => {
                setPrefilledProductName('');
                setActiveSectorName('');
              }}
            />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fade-in" id="view-contact">
            <ContactDesk />
          </div>
        )}
      </main>

      {/* Footer Segment */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 font-sans" id="oildrop-footer col">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-slate-900">
            
            {/* Logo/Identity description */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="bg-orange-600 text-white p-2 rounded-sm font-black">
                  <Droplet className="w-5 h-5 fill-white text-orange-600" />
                </div>
                <span className="text-white text-base font-extrabold tracking-tight font-display">
                  OIL DROP <span className="text-orange-500 font-medium">CHEMICAL Ltd</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Oil Drop Chemical Ltd operates as an industrial chemical procurement and distribution company serving energy, manufacturing, and process industries through structured supply chain coordination and technical sourcing.
              </p>
              <div className="text-slate-500 text-[10px] font-mono whitespace-nowrap overflow-x-hidden">
                Port Harcourt Warehouse ID: <span className="text-slate-350">PH-WH-04B</span> | USA Sourcing ID: <span className="text-slate-350">TX-SRC-HSN</span>
              </div>
            </div>

            {/* Quick Navigation categories column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Quick Inquiries</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => handleNavToTab('about')} className="hover:text-orange-500 transition-colors text-left block">
                    Company Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => { setProductCatalogCategoryFilter('all'); handleNavToTab('products'); }} className="hover:text-orange-500 transition-colors text-left block">
                    Product Specification Index
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavToTab('sectors')} className="hover:text-orange-500 transition-colors text-left block">
                    Industrial Applications Served
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavToTab('procurement')} className="hover:text-orange-500 transition-colors text-left block font-bold text-orange-505">
                    Sourcing RFP Portal
                  </button>
                </li>
              </ul>
            </div>

            {/* Support and Emergency Contacts */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Support and Contacts</h4>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed font-light">
                Direct logistics lines are monitored 24/7. Address specifications and volume requests directly to our liaison desk.
              </p>
              <div className="space-y-1 text-xs">
                <div className="text-slate-350">
                  Ph Operations: <a href="tel:+23484492108" className="hover:text-orange-500 transition-colors font-mono font-bold">+234 (0) 84 492 108</a>
                </div>
                <div className="text-slate-350">
                  Procurement Email: <a href="mailto:procurement@oildropchemical.com" className="hover:text-orange-500 transition-colors font-mono font-bold font-light">procurement@oildropchemical.com</a>
                </div>
              </div>
            </div>

          </div>

          {/* Regulatory bottom notes */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-slate-500 text-[9px] uppercase font-mono tracking-widest gap-4">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>© {new Date().getFullYear()} OIL DROP Chemical Ltd. All Rights Reserved.</span>
            </div>
            <div className="flex space-x-4">
              <span>Port Harcourt Operations Code: WAT-OPS</span>
              <span>Houston Desk: US-CDT</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Sourcing Finder Modal overlay */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-sm border border-slate-200 shadow-2xl max-w-xl w-full max-h-[85vh] flex flex-col justify-between overflow-hidden font-sans">
            
            {/* Header section */}
            <div className="p-5 border-b border-slate-200 flex justify-between items-center">
              <div className="flex items-center space-x-2 text-slate-900">
                <Search className="w-5 h-5 text-orange-605" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider font-display text-slate-900">Fast Sourcing Finder</h3>
                  <p className="text-[10px] text-slate-400 font-mono tracking-wide">Search overall specs of chemical items instantly</p>
                </div>
              </div>
              <button
                onClick={() => { setIsSearchModalOpen(false); setGlobalSearchTerm(''); }}
                className="p-1.5 rounded-sm text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Keyword Input */}
            <div className="p-4 bg-slate-50 border-b border-slate-200 relative">
              <input
                type="text"
                placeholder="Type here to scan specifications (e.g. TEG, desiccant, filter...)"
                value={globalSearchTerm}
                onChange={(e) => setGlobalSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-sm px-4 py-3 text-xs uppercase tracking-wide font-medium focus:ring-1 focus:ring-slate-900 focus:outline-none"
                autoFocus
              />
            </div>

            {/* Results Segment */}
            <div className="flex-grow overflow-y-auto p-4 space-y-2.5 min-h-[220px]">
              {!globalSearchTerm.trim() ? (
                <div className="text-center py-10 text-slate-400 space-y-2">
                  <Globe className="w-10 h-10 mx-auto text-slate-300 animate-pulse" />
                  <p className="text-xs font-light">Enter a search keyword to look up available materials.</p>
                </div>
              ) : searchedProductsInModal.length === 0 ? (
                <div className="text-center py-10 space-y-3 text-slate-400">
                  <X className="w-8 h-8 mx-auto text-rose-500" />
                  <p className="text-xs font-light">No matching specifications. You can submit a custom sourcing request anytime.</p>
                  <button
                    onClick={() => {
                      setIsSearchModalOpen(false);
                      handleSelectProductForQuote(globalSearchTerm);
                    }}
                    className="bg-slate-900 text-white font-bold text-[10px] py-2 px-3 rounded-sm hover:bg-orange-600 transition-colors uppercase tracking-widest"
                  >
                    Quote &quot;{globalSearchTerm}&quot; Directly
                  </button>
                </div>
              ) : (
                searchedProductsInModal.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-50 hover:bg-slate-100/80 border border-slate-200 p-3.5 rounded-sm flex items-center justify-between transition-colors gap-4"
                  >
                    <div className="space-y-0.5 max-w-[70%]">
                      <span className="text-[9px] uppercase tracking-widest text-orange-600 font-bold font-mono block">
                        {item.categoryName}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 truncate font-display">{item.name}</h4>
                      {item.chemicalFormula && (
                        <code className="text-[10px] text-slate-500 font-mono italic">
                          Formula: {item.chemicalFormula}
                        </code>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setIsSearchModalOpen(false);
                        handleSelectProductForQuote(item.name);
                        setGlobalSearchTerm('');
                      }}
                      className="bg-slate-900 hover:bg-orange-600 text-white font-bold text-[10px] px-3 py-2 rounded-sm transition-colors flex items-center space-x-1 uppercase tracking-widest"
                    >
                      <span>Select</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-3.5 bg-slate-50 border-t border-slate-205 text-center text-[9px] text-slate-400 font-mono uppercase tracking-widest">
              Direct Sourcing Desk Matcher
            </div>

          </div>
        </div>
      )}

      {/* Global Enlarge Lightbox Overlay popup */}
      <Lightbox />

    </div>
  );
}
