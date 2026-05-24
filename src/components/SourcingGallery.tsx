/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, Search, X, ShieldCheck, Filter, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  id: string;
  category: 'refining' | 'logistics' | 'aqueous' | 'warehousing';
  title: string;
  subtitle: string;
  detail: string;
  images: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    category: 'refining',
    title: 'Refinery Sourcing Integrity',
    subtitle: 'Process Assessment on Site',
    detail: 'Oildrop operations representative conducting technical Certificate of Analysis (CoA) checks on-site during crude fractionating chemical loading.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-02',
    category: 'warehousing',
    title: 'Specialized Hard-Case Warehouse Stock',
    subtitle: 'Moisture-Locked Storage Vault',
    detail: 'Standardized batches of chemical compounds stored in double-corrugated high-tensile fiberboard containers, arranged on structural blue plastic pallets with static loads strictly monitored.',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1553413719-875871274730?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-03',
    category: 'logistics',
    title: 'Staged Freight Pallet Packing',
    subtitle: 'Internal Sea Container Securing',
    detail: 'Batch-ready palletized chemical consignments wrapped with multi-layer high-tensile moisture-locked shrink film, packed tightly inside dry freight containers to restrict motion.',
    images: [
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1553413719-875871274730?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-04',
    category: 'warehousing',
    title: 'Pourable Crack Filler Palette Stock',
    subtitle: 'High-Density Chemical Storage',
    detail: 'Columns of specialized sealant boxes staged on heavy-duty plastic skids, undergoing a physical compliance check before general dispatch.',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-05',
    category: 'logistics',
    title: 'On-Site Container Positioning',
    subtitle: 'Heavy Cargo Dock Alignment',
    detail: 'Oildrop standard high-cube shipping dry containers backed via multi-axle logistics rigs directly into the Port Harcourt warehouse for immediate weather-protected loading.',
    images: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-06',
    category: 'logistics',
    title: 'Freight Container Entry Assessment',
    subtitle: 'Structural Soundness Integrity',
    detail: 'An Oildrop on-site supervisor in safety gear inspects the steel floor and corner-castings of an empty container, ensuring a moisture-free and cargo-ready environment.',
    images: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-07',
    category: 'logistics',
    title: 'Cargo Tracking and Pallet Cross-Check',
    subtitle: 'Verification of Batch Specifications',
    detail: 'Logistics specialists cross-referencing batch shipping papers with physical pallet labels inside the container, confirming absolute conformity with client orders.',
    images: [
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-08',
    category: 'warehousing',
    title: 'Automated Facility Stock Surveillance',
    subtitle: 'Active Inventory Auditing',
    detail: 'Personnel carrying out comprehensive checks of raw material lots, utilizing tablet systems linked to the master chemical specifications database.',
    images: [
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1553413719-875871274730?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-09',
    category: 'aqueous',
    title: 'Schuran Carbon-Media Filter Core',
    subtitle: 'Deep-Bed Water Filtration Equipment',
    detail: 'Modular transparent test column filter containing high-density gravel and activated carbon media layers, utilized for high-purity water polishing trials.',
    images: [
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-10',
    category: 'aqueous',
    title: 'Coagulation & Flocculation Settler Pond',
    subtitle: 'Active Settlement Basin Systems',
    detail: 'Process clarification pools running active neutralizer polymer doses to settle suspended solids prior to discharge or boiler recycled reuse.',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-11',
    category: 'aqueous',
    title: 'Dual Sand Filter Pressure Vessels',
    subtitle: 'Utility Water Clarifier Manifolds',
    detail: 'Heavy-duty steel pressure vessels containing layers of multi-size sand and anthracite filtration media, optimized for reducing feedwater turbidity.',
    images: [
      'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1553413719-875871274730?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-12',
    category: 'aqueous',
    title: 'Multi-Stage Demineralizer Columns',
    subtitle: 'Physical Bed Particle Separation',
    detail: 'Stratified media cylinders representing custom sand filter units, demonstrating high-integrity sand bed size distribution to engineering auditors.',
    images: [
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-13',
    category: 'aqueous',
    title: 'Twin Cation-Exchange Water Softener',
    subtitle: 'Feedwater Hardness Scaling Control',
    detail: 'Dual fiberglass softener vessels connected to an industrial brine tank, ensuring complete salt regeneration to prevent scaling in critical heat exchangers.',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-14',
    category: 'aqueous',
    title: 'Central Feedwater Purification Panel',
    subtitle: 'Fully Instrumented Treatment Block',
    detail: 'An array of automatic softener valves, backwash controls, and UV disinfection loops managing high-flow utility water loops on a factory site.',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-15',
    category: 'refining',
    title: 'Midstream Gas Fractionation Transfer Lines',
    subtitle: 'Process Piping Header Layout',
    detail: 'High pressure stainless piping segments, valves, and moisture traps examined and approved as part of an Oildrop triethylene glycol supply loop.',
    images: [
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-16',
    category: 'refining',
    title: 'Chemical Slurry Dosing Injection Block',
    subtitle: 'Precision High-Pressure Reciprocation',
    detail: 'Piston-driven injection lines designed for delivering corrosion inhibitors directly to production wellhead lines under extremely high pressures.',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1568241416418-4e8979ac8fb3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-17',
    category: 'aqueous',
    title: 'Effluent Clarification Clarifying Bay',
    subtitle: 'Flocculent Polymer Settlement Pool',
    detail: 'Secondary aeration pond running process water treatments with high relative feed rates, securing clean, compliant discharge values.',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542060748-10c28b629f6f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'gal-18',
    category: 'warehousing',
    title: 'Sealed Blue Polymer Drums Palletized',
    subtitle: 'Hermetic Moisture-Defense Barrier',
    detail: 'Columns of polymer corrosion-free liquid drums filled with technical glycols, strapped and shrink-wrapped for shipment to on-site project reserves.',
    images: [
      'https://images.unsplash.com/photo-1566576912321-d58def7a6088?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

const LOCAL_IMAGES = [
  '/IMG-20260522-WA0000.jpg',
  '/IMG-20260522-WA0001.jpg',
  '/IMG-20260522-WA0002.jpg',
  '/sand.jpg',
  '/san2.jpg',
  '/blue_pallet.jpg',
  '/filtration.jpg',
  '/pic1.jpg',
  '/pic2.jpg',
  '/pic3.jpg',
  '/pic4.jpg',
  '/pic5.jpg',
  '/pic6.jpg',
  '/pic7.jpg',
  '/pic8.jpg',
  '/pic9.jpg',
  '/pic10.jpg',
  '/pic11.jpg',
  '/pic12.jpg',
  '/pic13.jpg',
  '/pic14.jpg',
  '/pic16.jpg',
  '/IMG-20260523-WA0009.jpg',
  '/IMG-20260523-WA0010.jpg',
  '/motion_photo_4933652164483028447.jpg',
  '/motion_photo_6215962379076297242.jpg',
  '/motion_photo_8167160051816195700.jpg'
];

GALLERY_ITEMS.forEach((item, index) => {
  const idx1 = (index * 3) % LOCAL_IMAGES.length;
  const idx2 = (index * 3 + 1) % LOCAL_IMAGES.length;
  const idx3 = (index * 3 + 2) % LOCAL_IMAGES.length;
  item.images = [LOCAL_IMAGES[idx1], LOCAL_IMAGES[idx2], LOCAL_IMAGES[idx3]];
});

interface GalleryCardProps {
  key?: string;
  item: GalleryItem;
  onSelect: (imageIdx: number) => void;
}

function GalleryCard({ item, onSelect }: GalleryCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev > 0 ? prev - 1 : item.images.length - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev < item.images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      onClick={() => onSelect(currentIdx)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer bg-slate-950 border border-slate-850 rounded-sm overflow-hidden flex flex-col justify-between hover:border-orange-500/40 hover:shadow-lg transition-all duration-300 relative"
      id={`card-${item.id}`}
    >
      {/* Image Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIdx}
            src={item.images[currentIdx]}
            alt={`${item.title} - View ${currentIdx + 1}`}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
          />
        </AnimatePresence>

        {/* Hover overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Floating Category Tag */}
        <div className="absolute top-2 left-2 bg-slate-950/80 text-[8px] font-mono font-bold uppercase tracking-widest text-slate-300 px-2 py-0.5 rounded-sm z-10">
          {item.category === 'refining' ? 'Refineries' : item.category === 'logistics' ? 'Logistics' : item.category === 'aqueous' ? 'Water systems' : 'Warehouse & Stock'}
        </div>

        {/* Multi-image indicators (Instagram style) */}
        <div className="absolute bottom-2.5 left-3 right-3 flex space-x-1 z-10 pointer-events-none">
          {item.images.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                i === currentIdx ? 'bg-orange-500 shadow-sm' : 'bg-slate-400/40'
              }`}
            />
          ))}
        </div>

        {/* Image index badge */}
        <div className="absolute top-2 right-2 bg-slate-950/70 text-[8px] font-mono text-slate-400 px-1.5 py-0.5 rounded-sm z-10">
          {currentIdx + 1} / {item.images.length}
        </div>

        {/* Arrows visible on hover */}
        <div className={`absolute inset-0 flex items-center justify-between px-2 transition-opacity duration-250 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={prevImage}
            className="w-6 h-6 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow hover:scale-110"
            title="Previous Image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            className="w-6 h-6 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow hover:scale-110"
            title="Next Image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Search Zoom Icon overlay */}
        <div className={`absolute inset-0 flex items-center justify-center bg-slate-950/30 transition-opacity duration-300 ${isHovered ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'}`}>
          <div className="bg-slate-900/90 p-2 rounded-sm border border-orange-500/30 text-orange-400 font-mono text-[8px] uppercase tracking-widest flex items-center space-x-1 shadow-md scale-95 group-hover:scale-100 transition-transform duration-300">
            <Search className="w-3 h-3" />
            <span>Interactive Zoom</span>
          </div>
        </div>
      </div>

      {/* Descriptions */}
      <div className="p-4 space-y-2 relative">
        <span className="block text-[9px] font-bold text-orange-500 uppercase tracking-widest font-mono">{item.subtitle}</span>
        <h4 className="text-sm font-bold text-slate-100 font-display group-hover:text-orange-400 transition-colors line-clamp-1">{item.title}</h4>
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
  );
}

export default function SourcingGallery() {
  const [filter, setFilter] = useState<'all' | 'refining' | 'logistics' | 'aqueous' | 'warehousing'>('all');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [lightboxImgIdx, setLightboxImgIdx] = useState<number>(0);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const activeItem = GALLERY_ITEMS.find((item) => item.id === selectedItemId);
  const activeItemInFilteredIdx = filteredItems.findIndex((item) => item.id === selectedItemId);

  const handlePrevItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemInFilteredIdx !== -1) {
      const nextIdx = activeItemInFilteredIdx > 0 ? activeItemInFilteredIdx - 1 : filteredItems.length - 1;
      setSelectedItemId(filteredItems[nextIdx].id);
      setLightboxImgIdx(0);
    }
  };

  const handleNextItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemInFilteredIdx !== -1) {
      const nextIdx = activeItemInFilteredIdx < filteredItems.length - 1 ? activeItemInFilteredIdx + 1 : 0;
      setSelectedItemId(filteredItems[nextIdx].id);
      setLightboxImgIdx(0);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItem) {
      setLightboxImgIdx((prev) => (prev > 0 ? prev - 1 : activeItem.images.length - 1));
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItem) {
      setLightboxImgIdx((prev) => (prev < activeItem.images.length - 1 ? prev + 1 : 0));
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
            <button
              onClick={() => setFilter('warehousing')}
              className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-sm transition-all border ${
                filter === 'warehousing'
                  ? 'bg-orange-600 border-orange-600 text-white shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Warehouse & Stock
            </button>
          </div>
        </div>

        {/* Gallery Bento Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onSelect={(imageIndex) => {
                setSelectedItemId(item.id);
                setLightboxImgIdx(imageIndex);
              }}
            />
          ))}
        </div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {selectedItemId !== null && activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-100 bg-slate-950/98 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedItemId(null)}
              id="lightbox-container"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-slate-900 border border-slate-800 rounded-sm w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-hidden flex flex-col justify-between relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItemId(null)}
                  className="absolute top-4 right-4 bg-slate-950/95 text-slate-400 hover:text-white p-2 border border-slate-800 rounded-sm transition-all hover:border-orange-500/50 cursor-pointer z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left/Right Item Navigations (Cross-card) */}
                <div className="absolute top-4 left-4 flex items-center space-x-1.5 z-20">
                  <button
                    onClick={handlePrevItem}
                    className="bg-slate-950/90 text-slate-400 hover:text-white border border-slate-800 rounded-sm px-2 py-1 text-[10px] font-mono tracking-wider flex items-center transition-colors cursor-pointer hover:border-slate-700"
                    title="Previous Item in Category"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 mr-0.5" /> PREV
                  </button>
                  <button
                    onClick={handleNextItem}
                    className="bg-slate-950/90 text-slate-400 hover:text-white border border-slate-800 rounded-sm px-2 py-1 text-[10px] font-mono tracking-wider flex items-center transition-colors cursor-pointer hover:border-slate-700"
                    title="Next Item in Category"
                  >
                    NEXT <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </div>

                {/* Image and Annotation Container */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 h-full overflow-y-auto md:overflow-visible">
                  
                  {/* Visual Area with Carousel Controls */}
                  <div className="md:col-span-7 bg-slate-950 flex flex-col justify-between relative aspect-video md:aspect-auto min-h-[280px] md:min-h-[460px]">
                    <div className="relative flex-1 w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={lightboxImgIdx}
                          src={activeItem.images[lightboxImgIdx]}
                          alt={activeItem.title}
                          referrerPolicy="no-referrer"
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.03 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover md:max-h-[500px]"
                        />
                      </AnimatePresence>

                      {/* Image Arrow Controls */}
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-4 bg-slate-950/90 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-orange-400 p-2 rounded-sm transition-all duration-200 cursor-pointer shadow-lg z-10"
                        title="Previous Image of Carousel"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={handleNextImage}
                        className="absolute right-4 bg-slate-950/90 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-orange-400 p-2 rounded-sm transition-all duration-200 cursor-pointer shadow-lg z-10"
                        title="Next Image of Carousel"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Photo position details */}
                      <div className="absolute bottom-4 right-4 bg-slate-950/90 text-[10px] font-mono font-bold text-orange-400 px-3 py-1 border border-slate-800 rounded-sm z-10 shadow">
                        PHOTO {lightboxImgIdx + 1} OF {activeItem.images.length}
                      </div>
                    </div>

                    {/* Horizontal Interactive Thumbnail Strip */}
                    <div className="bg-slate-950/90 border-t border-slate-850 p-3.5 flex justify-center items-center gap-2">
                      {activeItem.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setLightboxImgIdx(index)}
                          className={`relative aspect-video w-16 overflow-hidden rounded-sm border transition-all duration-200 cursor-pointer ${
                            index === lightboxImgIdx
                              ? 'border-orange-500 scale-102 ring-1 ring-orange-500/30'
                              : 'border-slate-800 opacity-50 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Annotation Detail Block */}
                  <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800 space-y-6">
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest font-mono">
                            {activeItem.subtitle}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                            {activeItem.category}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">
                          {activeItem.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        {activeItem.detail}
                      </p>

                      <div className="p-3 bg-slate-950/90 rounded-sm border border-slate-850 space-y-2 flex flex-col">
                        <div className="flex items-start space-x-2">
                          <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <div className="text-[10px] text-slate-300 leading-normal font-sans">
                            <strong className="text-slate-100">Sourcing Integrity Protocol:</strong>
                          </div>
                        </div>
                        <p className="text-[9.5px] text-slate-400 font-mono leading-relaxed pl-6">
                          Each image records authentic compliance states matching raw material, transport tightness, moisture sealing barriers, and batch parameters verified by terminal agents.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-850 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 md:gap-4 font-mono text-[11px] text-slate-500">
                      <span className="flex items-center space-x-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span className="text-slate-200 font-bold">QA APPROVED COA SIGNED</span>
                      </span>
                      <span>RECORD {activeItem.id.toUpperCase()}</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
