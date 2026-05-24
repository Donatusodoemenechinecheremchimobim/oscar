/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { IndustrySector } from '../types';
import { INDUSTRY_SECTORS } from '../data';
import { ShieldAlert, Compass, ChevronRight, Activity, ArrowRight, CheckCircle, Search } from 'lucide-react';
import { enlargeImage } from './Lightbox';

interface SectorsServedProps {
  onSelectSectorProducts: (categoryId: string) => void;
  onInitiateQuoteForSector: (sectorName: string) => void;
}

export default function SectorsServed({ onSelectSectorProducts, onInitiateQuoteForSector }: SectorsServedProps) {
  const [selectedSectorId, setSelectedSectorId] = useState<string>(INDUSTRY_SECTORS[0].id);

  const selectedSector = INDUSTRY_SECTORS.find(s => s.id === selectedSectorId) || INDUSTRY_SECTORS[0];

  // Helper mapping sectors to our products categories
  const getCategoryMap = (sectorId: string) => {
    switch (sectorId) {
      case 'oil-gas':
      case 'natural-gas-lng':
        return 'oil-gas-process';
      case 'petrochemical-refining':
        return 'industrial-filtration';
      case 'water-treatment':
      case 'environmental-waste':
        return 'water-treatment';
      default:
        return 'industrial-filtration';
    }
  };

  return (
    <div className="bg-slate-50 py-12 lg:py-20 animate-fade-in" id="sectors-section font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="text-xs font-bold text-orange-600 tracking-widest uppercase font-mono mb-2">Market Segments</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
              Industrial Sectors Served
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-2xl font-light">
              We operate as a high-integrity procurement node across primary processing markets, fluid handling streams, and chemical utilities.
            </p>
          </div>
          <div className="bg-white border border-slate-200 text-xs px-4 py-2 rounded-sm text-slate-600 font-mono flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>API & ASTM Standard Compliant</span>
          </div>
        </div>

        {/* Sector Interactive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sector Selector List */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono mb-2 pl-2">Select Sector to Analyze</p>
            <div className="space-y-2">
              {INDUSTRY_SECTORS.map((sector) => {
                const isActive = sector.id === selectedSectorId;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSectorId(sector.id)}
                    className={`w-full text-left p-5 rounded-sm border transition-all duration-200 block relative ${
                      isActive
                        ? 'bg-white border-slate-900 shadow-sm translate-x-1'
                        : 'bg-transparent border-slate-200/60 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-0 bottom-0 left-0 w-1 bg-orange-600"></span>
                    )}
                    <div className="space-y-1">
                      <h4 className={`text-xs font-bold tracking-wider font-display uppercase transition-colors ${isActive ? 'text-slate-950' : 'text-slate-600'}`}>
                        {sector.title}
                      </h4>
                      <p className="text-slate-400 text-[11px] truncate max-w-[320px]">
                        {sector.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sector Technical Detail Board */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden flex flex-col justify-between">
            
            {/* Visual Indicator & Detail */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-150 pb-5">
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-orange-600 font-mono">TECHNICAL BRIEFING SHEET</span>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight font-display">{selectedSector.title}</h3>
                </div>
                
                <span className="bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span>PROCUREMENT READY</span>
                </span>
              </div>

              {/* Descriptions & Asset Image Area */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Operations Context</h4>
                    <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 sm:p-5 rounded-sm border border-slate-200">
                      {selectedSector.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Process Sourcing Impact</h4>
                    <p className="text-slate-700 text-sm leading-relaxed border-l-4 border-orange-600 pl-4 py-2 font-display">
                      {selectedSector.processImpact}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-mono">Logistics & Asset Visual</h4>
                  <div 
                    onClick={() => enlargeImage(selectedSector.imageUrl, selectedSector.title, selectedSector.description || 'Verified site equipment serving primary processing networks.', 'SECTOR SITE BRIEFING')}
                    className="group relative aspect-[16/9] lg:aspect-auto flex-grow w-full overflow-hidden rounded-sm border border-slate-200 shadow-sm bg-slate-100 minima-img cursor-zoom-in"
                    title="Click to Zoom Context Visual"
                  >
                    <img
                      src={selectedSector.imageUrl}
                      alt={selectedSector.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[15%] group-hover:scale-102 group-hover:grayscale-0 transition-all duration-300 min-h-[140px] max-h-[220px] lg:max-h-none"
                    />
                    {/* Hover lens */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-slate-900/90 text-orange-400 border border-orange-500/30 text-[9px] font-mono tracking-widest uppercase px-2.1 py-0.5 rounded-xs flex items-center space-x-1 shadow-md">
                        <Search className="w-3.5 h-3.5" />
                        <span>Zoom</span>
                      </div>
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 bg-slate-900/90 backdrop-blur-xs text-[8px] font-mono font-bold uppercase tracking-widest text-orange-400 px-2 py-1 rounded-sm">
                      Verified Site View
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Details Segment */}
              <div className="p-4 bg-slate-900 text-slate-200 rounded-sm space-y-2 border border-slate-800">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 font-mono">Chemical Supply Flow Chart</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Oildrop coordinates delivery pipelines on process consumables tailored to dynamic system volumes, flow rates, and temperatures. Spec sheets are matched prior to international cargo loading.
                </p>
              </div>

            </div>

            {/* Quick Sourcing Actions Footer */}
            <div className="bg-slate-50 border-t border-slate-200 p-6 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-[11px] text-slate-500 uppercase font-bold tracking-widest font-mono">Related Products Group:</div>
                <div className="text-sm font-bold text-slate-900 capitalize font-display">
                  {getCategoryMap(selectedSector.id).replace(/-/g, ' ')} Chemicals
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  id={`btn-sector-products-${selectedSector.id}`}
                  onClick={() => onSelectSectorProducts(getCategoryMap(selectedSector.id))}
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs py-3.5 px-5 rounded-sm border border-slate-200 shadow-sm transition-all text-center flex items-center justify-center space-x-1"
                >
                  <span className="uppercase tracking-widest">Explore Product Catalog</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  id={`btn-sector-quote-${selectedSector.id}`}
                  onClick={() => onInitiateQuoteForSector(selectedSector.title)}
                  className="bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs py-3.5 px-5 rounded-sm shadow-md transition-all text-center flex items-center justify-center space-x-1.5"
                >
                  <span className="uppercase tracking-widest">Initiate Sourcing Request</span>
                  <ArrowRight className="w-4 h-4 text-orange-500" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Grid Asset Showcase Segment - Meet user request of 4 pics per page */}
        <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 sm:p-10 space-y-8 text-white mt-12 shadow-md font-sans">
          <div className="border-b border-slate-800 pb-5">
            <span className="text-[10px] font-bold tracking-[0.25em] text-orange-400 font-mono font-bold">FIELD EXTRACTION & TREATMENT SITES</span>
            <h3 className="text-2xl font-black text-white font-display mt-1">Sourcing Asset Photo Log</h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
              On-site capture showing active logistics lines, high pressure chemical piping headers, refinery columns, and treatment tanks supported by our procurement network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              onClick={() => enlargeImage('/IMG-20260522-WA0000.jpg', 'Offshore Drilling Rig', 'Maritime exploration platform drawing sweet crude and gas from subsea wellhead lines.', 'SITED FIELD ASSETS')}
              className="group space-y-3 cursor-zoom-in"
              title="Click to Zoom Image"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/IMG-20260522-WA0000.jpg"
                  alt="Offshore Drilling Wellhead"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-102 group-hover:grayscale-0 transition-all duration-300"
                />
                {/* Hover lens */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-slate-900/90 text-orange-400 border border-orange-500/30 text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs flex items-center space-x-1 shadow-md">
                    <Search className="w-3.5 h-3.5" />
                    <span>Zoom</span>
                  </div>
                </div>
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  FLD-LGT // 01
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100 group-hover:text-orange-400 transition-colors">Offshore Drilling Rig</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Marine rigs operating in maritime exploration zones carrying deep wellheads.
                </p>
              </div>
            </div>

            <div 
              onClick={() => enlargeImage('/IMG-20260522-WA0001.jpg', 'Gas Dehydration Towers', 'Midstream molecular sieve beds and dehydration processing columns managing water-dewpoint limits.', 'SITED FIELD ASSETS')}
              className="group space-y-3 cursor-zoom-in"
              title="Click to Zoom Image"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/IMG-20260522-WA0001.jpg"
                  alt="LNG Compressors Dehydration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-102 group-hover:grayscale-0 transition-all duration-300"
                />
                {/* Hover lens */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-slate-900/90 text-orange-400 border border-orange-500/30 text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs flex items-center space-x-1 shadow-md">
                    <Search className="w-3.5 h-3.5" />
                    <span>Zoom</span>
                  </div>
                </div>
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  FLD-LGT // 02
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100 group-hover:text-orange-400 transition-colors">Gas Dehydration Towers</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Molecular sieve and glycol contactors running midstream gas processing workflows.
                </p>
              </div>
            </div>

            <div 
              onClick={() => enlargeImage('/IMG-20260522-WA0002.jpg', 'Oil Refining Columns', 'High fraction columns processing upstream crude compounds into downstream petroleum fractions.', 'SITED FIELD ASSETS')}
              className="group space-y-3 cursor-zoom-in"
              title="Click to Zoom Image"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/IMG-20260522-WA0002.jpg"
                  alt="Refining Fractionation Column"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-102 group-hover:grayscale-0 transition-all duration-300"
                />
                {/* Hover lens */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-slate-900/90 text-orange-400 border border-orange-500/30 text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs flex items-center space-x-1 shadow-md">
                    <Search className="w-3.5 h-3.5" />
                    <span>Zoom</span>
                  </div>
                </div>
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  FLD-LGT // 03
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100 group-hover:text-orange-400 transition-colors">Oil Refining Columns</h5>
                <p className="text-[10px] text-slate-405 leading-normal font-light">
                  High fraction towers and refinery vessels splitting petroleum raw feeds.
                </p>
              </div>
            </div>

            <div 
              onClick={() => enlargeImage('/filtration.jpg', 'Wastewater Clarifier Basin', 'Sedimentation tanks operating dynamic flocculant coagulating and particulate settlement loops.', 'SITED FIELD ASSETS')}
              className="group space-y-3 cursor-zoom-in"
              title="Click to Zoom Image"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/filtration.jpg"
                  alt="Clarifier Settlement Pool"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-102 group-hover:grayscale-0 transition-all duration-300"
                />
                {/* Hover lens */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-slate-900/90 text-orange-400 border border-orange-500/30 text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs flex items-center space-x-1 shadow-md">
                    <Search className="w-3.5 h-3.5" />
                    <span>Zoom</span>
                  </div>
                </div>
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  FLD-LGT // 04
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100 group-hover:text-orange-400 transition-colors">Wastewater Clarifier Basin</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Flocculating and sedimentation basins running automated sludge-splitting cycles.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
