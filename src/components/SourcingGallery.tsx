/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, Search, X, ShieldCheck, Filter, ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'refining' | 'logistics' | 'aqueous';
  title: string;
  subtitle: string;
  detail: string;
  imageUrl: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    category: 'refining',
    title: 'Refinery Sourcing Integrity',
    subtitle: 'Process Assessment on Site',
    detail: 'Oildrop operations representative conducting technical Certificate of Analysis (CoA) checks on-site during crude fractionating chemical loading.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-02',
    category: 'logistics',
    title: 'Carrier & Logistics Dispatch',
    subtitle: 'Bulk Cargo Road Transportation',
    detail: 'Standard logistical road liners and transport equipment staged at the manufacturer yard for moisture-proof delivery of desiccant beads.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-03',
    category: 'refining',
    title: 'Process Fluid Reservoirs',
    subtitle: 'High-Pressure Refinery Tubings',
    detail: 'Insulated raw gas dehydration lines leading to secondary fractionating towers, matched for heat endurance prior to procurement.',
    imageUrl: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-04',
    category: 'aqueous',
    title: 'Clarification & Aeration Basins',
    subtitle: 'Industrial Water Purification Systems',
    detail: 'Turquoise-colored aeration ponds running continuous clarification cycles utilizing high-molecular-weight neutralizer polymers.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-05',
    category: 'logistics',
    title: 'Sealed Polymer Cargo Drums',
    subtitle: 'High-Density Chemical Storage',
    detail: 'Chemically inert blue polymer drums organized and bound with orange load-securing straps inside dry freight cargo containers.',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-06',
    category: 'logistics',
    title: 'Intermediate Bulk Containers (IBC)',
    subtitle: 'Galvanized Cage Transport Totes',
    detail: 'Heavy-duty steel caged IBC liquid totes pre-filled with technical process glycols, verified leak-proof for long-distance transit.',
    imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-07',
    category: 'logistics',
    title: 'Weather-Shielded Pallet Cargo',
    subtitle: 'Standardized Port-Ready Consignments',
    detail: 'Dual blue barrels arranged on dry wood pallets and wrapped with hermetic weatherprotect shrink-film, staged at Port Harcourt bonded yard.',
    imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58def7a6088?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-08',
    category: 'aqueous',
    title: 'Utility Filtration Skids',
    subtitle: 'Mechanical Softening Assembly',
    detail: 'Utility-grade softener system paired with carbon filter canisters representing pre-treatment of feedwater loops at a bottling facility.',
    imageUrl: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=800'
  }
];

export default function SourcingGallery() {
  const [filter, setFilter] = useState<'all' | 'refining' | 'logistics' | 'aqueous'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="bg-slate-900 text-white py-12 lg:py-20 font-sans" id="gallery-component">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title Group */}
        <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="text-xs font-bold text-orange-500 tracking-widest uppercase font-mono mb-2">Verified Sourcing Gallery</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Operational & Logistics Proof
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl font-light leading-relaxed">
              Photographic logs detailing chemical storage modes, site evaluations, intermediate dry container securing, and custom-skid chemical utilities vetted by Oil Drop Chemical.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-1 font-mono">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-sm transition-all border ${
                filter === 'all'
                  ? 'bg-orange-600 border-orange-600 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              All Assets ({GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setFilter('refining')}
              className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-sm transition-all border ${
                filter === 'refining'
                  ? 'bg-orange-600 border-orange-600 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Refining & Fluid
            </button>
            <button
              onClick={() => setFilter('logistics')}
              className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-sm transition-all border ${
                filter === 'logistics'
                  ? 'bg-orange-600 border-orange-600 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Logistics & Drums
            </button>
            <button
              onClick={() => setFilter('aqueous')}
              className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-sm transition-all border ${
                filter === 'aqueous'
                  ? 'bg-orange-600 border-orange-600 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Aqueous & Filtration
            </button>
          </div>
        </div>

        {/* Gallery Bento Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer bg-slate-950 border border-slate-850 rounded-sm overflow-hidden flex flex-col justify-between hover:border-orange-500/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="bg-slate-900/90 p-2.5 rounded-sm border border-orange-500/30 text-orange-400 font-mono text-[9px] uppercase tracking-widest flex items-center space-x-1">
                    <Search className="w-3.5 h-3.5" />
                    <span>Expand Record</span>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-slate-950/80 text-[8px] font-mono font-bold uppercase tracking-widest text-slate-300 px-2 py-0.5 rounded-sm">
                  {item.category === 'refining' ? 'Refineries' : item.category === 'logistics' ? 'Logistics' : 'Water systems'}
                </div>
              </div>

              {/* Descriptions */}
              <div className="p-4 space-y-2">
                <span className="block text-[9px] font-bold text-orange-500 uppercase tracking-widest font-mono">{item.subtitle}</span>
                <h4 className="text-sm font-bold text-slate-100 font-display group-hover:text-orange-400 transition-colors">{item.title}</h4>
                <p className="text-[11px] text-slate-400 font-light leading-normal line-clamp-2">
                  {item.detail}
                </p>
                <div className="pt-2 border-t border-slate-900/50 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>COA Passed</span>
                  </span>
                  <span>{item.id.toUpperCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-100 bg-slate-950/98 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="bg-slate-900 border border-slate-800 rounded-sm w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col justify-between relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 bg-slate-950/95 text-slate-400 hover:text-white p-2 border border-slate-800 rounded-sm transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image and Annotation Container */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:min-h-[460px]">
                {/* Visual Area */}
                <div className="md:col-span-7 bg-slate-950 flex items-center justify-center relative aspect-video md:aspect-auto">
                  <img
                    src={filteredItems[lightboxIndex].imageUrl}
                    alt={filteredItems[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover max-h-[300px] md:max-h-[500px]"
                  />
                  
                  {/* Prev Button */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 bg-slate-950/90 text-slate-400 hover:text-white p-2 border border-slate-800 rounded-sm transition-colors cursor-pointer"
                    title="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNext}
                    className="absolute right-4 bg-slate-950/90 text-slate-400 hover:text-white p-2 border border-slate-800 rounded-sm transition-colors cursor-pointer"
                    title="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Annotation Detail Block */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest font-mono">
                        {filteredItems[lightboxIndex].subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight font-display">
                        {filteredItems[lightboxIndex].title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {filteredItems[lightboxIndex].detail}
                    </p>

                    <div className="p-3 bg-slate-950 rounded-sm border border-slate-800 space-y-1.5 flex items-start space-x-2">
                      <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-[10px] text-slate-400 leading-normal font-sans">
                        <strong className="text-slate-200">Sourcing Standard:</strong> Verified packing profiles, moisture-barrier integrity indexes, and local bonded clearance storage check verified. Ready of procurement.
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-850 pt-4 flex justify-between items-center font-mono text-[11px] text-slate-500">
                    <span className="flex items-center space-x-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span className="text-slate-400 font-bold">QA APPROVED</span>
                    </span>
                    <span>RECORD {filteredItems[lightboxIndex].id.toUpperCase()}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
