import React from 'react';
import { ShieldCheck, Truck, ArrowRight, Search, FlaskConical } from 'lucide-react';

interface HeroProps {
  onNavToTab: (tab: string) => void;
}

export default function Hero({ onNavToTab }: HeroProps) {
  const stats = [
    { label: 'Technical Feasibility Vetted', value: '100%', detail: 'Lab and TDS compliant matching processes' },
    { label: 'Integrated Regional Sectors', value: '6 Serviced', detail: 'Energy, production, treatment & refining' },
    { label: 'Sourcing Hub Coordination', value: 'Dual Desks', detail: 'Nigeria operations & Houston procurement liaisons' },
  ];

  const highlightedCapabilities = [
    {
      icon: <Search className="w-4 h-4 text-orange-600" />,
      title: 'Industrial Sourcing',
      desc: 'Formulates matching matrices between production in Nigeria/West Africa and global chemical output.'
    },
    {
      icon: <FlaskConical className="w-4 h-4 text-orange-600" />,
      title: 'Technical Compliance (TDS/MSDS)',
      desc: 'Application-based matching utilizing verified Technical Data Sheets for custom configurations.'
    },
    {
      icon: <Truck className="w-4 h-4 text-orange-600" />,
      title: 'Global Supply Chain Logistics',
      desc: 'Full coordination from global production plants to terminal warehousing and Port Harcourt Hub.'
    }
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200" id="main-hero">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden min-h-[580px]">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-12 lg:p-16 flex flex-col justify-center border-r border-slate-100 relative">
          {/* Ambient subtle layout element */}
          <div className="absolute top-0 left-0 w-2 h-full bg-orange-600"></div>
          
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full">
              Industrial Sourcing & Supply Chain Coordinator
            </div>
            
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter text-slate-900 font-display">
                Global Chemical <br/>
                <span className="text-slate-400">Supply Chain Solutions.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-xl">
                Providing specialized procurement across process chemicals, filtration materials, and industrial consumables for the oil & gas and manufacturing industries.
              </p>
            </div>

            {/* Procurement and Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="btn-hero-quote"
                onClick={() => onNavToTab('procurement')}
                className="bg-slate-900 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors rounded-sm shadow-md flex items-center space-x-1.5"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4 text-orange-500" />
              </button>

              <button
                id="btn-hero-products"
                onClick={() => onNavToTab('products')}
                className="bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-3.5 text-xs uppercase tracking-widest border border-slate-200 rounded-sm transition-colors"
              >
                Explore Products
              </button>

              <button
                id="btn-hero-contact"
                onClick={() => onNavToTab('contact')}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-3.5 text-xs uppercase tracking-widest rounded-sm transition-colors"
              >
                Contact Sourcing
              </button>
            </div>

            {/* Industrial Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-2xl font-black text-slate-900 font-display flex items-center gap-1">
                    {stat.value}
                    {i === 0 && <ShieldCheck className="w-4 h-4 text-emerald-600 inline" />}
                  </span>
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{stat.label}</span>
                  <p className="text-[11px] text-slate-500 font-medium leading-normal">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Key Sourcing Interface */}
        <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Operational Pipeline</h3>
              <span className="bg-emerald-500 text-white text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-sm flex items-center space-x-1 shadow-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                <span>SYSTEM ACTIVE</span>
              </span>
            </div>

            {/* Sourcing Model Stack */}
            <div className="space-y-3">
              {highlightedCapabilities.map((cap, i) => (
                <div key={i} className="bg-white p-5 border border-slate-200 rounded-sm flex gap-4 transition-all hover:shadow-sm">
                  <div className="w-8 h-8 rounded-sm bg-orange-100 flex items-center justify-center shrink-0">
                    {cap.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold leading-tight block text-slate-950 font-display uppercase tracking-wider">{cap.title}</span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sourcing Callout Section */}
          <div className="bg-slate-900 p-6 text-white rounded-sm mt-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-mono font-bold">Nigeria & US Logistics Desks</h4>
            <p className="text-base font-light mb-4">Industrial Chemical Request System</p>
            <div 
              onClick={() => onNavToTab('procurement')}
              className="flex items-center justify-between group cursor-pointer border-t border-slate-800 pt-3"
            >
              <span className="text-xs font-bold border-b border-orange-600 pb-1 uppercase tracking-wider text-orange-500 group-hover:text-white transition-colors">
                SUBMIT TECHNICAL REQUIREMENTS
              </span>
              <svg className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
