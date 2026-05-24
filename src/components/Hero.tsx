import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, ArrowRight, Search, FlaskConical, ChevronLeft, ChevronRight, Activity, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { enlargeImage } from './Lightbox';

interface HeroProps {
  onNavToTab: (tab: string) => void;
}

const HERO_IMAGES = [
  {
    url: '/IMG-20260522-WA0000.jpg',
    tag: 'Offshore Exploration',
    title: 'Offshore Drilling Rig Platform',
    desc: 'Marine exploration rig platform operating in high-pressure offshore thermal conditions.'
  },
  {
    url: '/IMG-20260522-WA0001.jpg',
    tag: 'Gas Processing',
    title: 'Primary Sourcing Site View',
    desc: 'High-capacity industrial fluid separation and moisture control gas dehydration facility.'
  },
  {
    url: '/IMG-20260522-WA0002.jpg',
    tag: 'Chemical Utilities',
    title: 'Petrochemical Refineries',
    desc: 'Refine fractionators and process lines delivering key industrial system consumables.'
  },
  {
    url: '/pic7.jpg',
    tag: 'Refineries',
    title: 'TEG Dehydration loops',
    desc: 'High pressure stainless gas dehydration manifolds & piping headers.'
  },
  {
    url: '/blue_pallet.jpg',
    tag: 'Warehouse & Stock',
    title: 'Blue Pallet Compound Storage',
    desc: 'Double-corrugated custom fiberboard stacks staged in static loads.'
  },
  {
    url: '/pic9.jpg',
    tag: 'Logistics',
    title: 'Pallet Freight Shrink Wrapping',
    desc: 'Sealed moisture-locked consignments secured tightly inside containers.'
  },
  {
    url: '/sand.jpg',
    tag: 'Water systems',
    title: 'Sand Pressure Filters',
    desc: 'Industrial silica sand and aggregate media separators passed for scale prevention.'
  },
  {
    url: '/filtration.jpg',
    tag: 'Aqueous treatment',
    title: 'Flocculation Settlement Bay',
    desc: 'Process clarification basin undergoing chemical flocculent dosage run checks.'
  }
];

export default function Hero({ onNavToTab }: HeroProps) {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCarouselIdx((prev) => (prev < HERO_IMAGES.length - 1 ? prev + 1 : 0));
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setCarouselIdx((prev) => (prev > 0 ? prev - 1 : HERO_IMAGES.length - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setCarouselIdx((prev) => (prev < HERO_IMAGES.length - 1 ? prev + 1 : 0));
  };

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

        {/* Right Column: Key Sourcing Interface - Now with Image Showcase Carousel */}
        <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Operational Assets Portfolio</h3>
              <span className="bg-emerald-500 text-white text-[9px] font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-sm flex items-center space-x-1 shadow-sm">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                <span>SYSTEM ACTIVE</span>
              </span>
            </div>

            {/* Framer Motion Sourcing Carousel */}
            <div 
              onClick={() => enlargeImage(HERO_IMAGES[carouselIdx].url, HERO_IMAGES[carouselIdx].title, HERO_IMAGES[carouselIdx].desc, HERO_IMAGES[carouselIdx].tag)}
              className="relative aspect-video sm:aspect-[4/3] lg:aspect-square w-full rounded-sm border border-slate-200 overflow-hidden bg-slate-950 shadow-md group cursor-zoom-in"
              title="Click/Tap to Enlarge Photograph"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={carouselIdx}
                  src={HERO_IMAGES[carouselIdx].url}
                  alt={HERO_IMAGES[carouselIdx].title}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 50 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-102 group-hover:grayscale-0 transition-all duration-500"
                />
              </AnimatePresence>

              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Instant Zoom Banner Indicator on Hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/80 px-3 py-2 border border-orange-500/40 text-orange-400 font-mono text-[9px] uppercase tracking-widest rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none flex items-center space-x-1">
                <Search className="w-3.5 h-3.5" />
                <span>Tap to Zoom Image</span>
              </div>

              {/* Carousel controls */}
              <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(e); }}
                  className="w-8 h-8 rounded-sm bg-slate-950/90 border border-slate-805 hover:border-orange-500 text-white hover:text-orange-400 flex items-center justify-center cursor-pointer transition-all pointer-events-auto shadow-lg"
                  title="Previous Asset"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNextImage(e); }}
                  className="w-8 h-8 rounded-sm bg-slate-950/90 border border-slate-805 hover:border-orange-500 text-white hover:text-orange-400 flex items-center justify-center cursor-pointer transition-all pointer-events-auto shadow-lg"
                  title="Next Asset"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Image Floating Captions & Badge */}
              <div className="absolute top-3 left-3 bg-slate-950/80 border border-slate-850 text-orange-400 text-[8px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm z-10">
                {HERO_IMAGES[carouselIdx].tag}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <p className="text-xs font-mono tracking-wider text-slate-300">Operational Log {carouselIdx + 1}/{HERO_IMAGES.length}</p>
                </div>
                <h4 className="text-sm font-extrabold font-display uppercase tracking-tight text-white">{HERO_IMAGES[carouselIdx].title}</h4>
                <p className="text-[10px] text-slate-400 font-light leading-snug line-clamp-2 max-w-sm">{HERO_IMAGES[carouselIdx].desc}</p>
              </div>

              {/* Playback dots */}
              <div className="absolute top-4 right-4 flex space-x-1.5 z-10">
                {HERO_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === carouselIdx ? 'bg-orange-500 w-3' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Hub Checkpoints Summary */}
          <div className="bg-slate-900 p-5 text-white rounded-sm relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/10 rounded-full blur-xl -mr-8 -mt-8"></div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2">
                <span>Verification Hub Desk</span>
                <span className="text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                  QA VETTED
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                We verify specifications, check packaging integrity, ensure moisture locking, and test filtration performance prior to terminal dispatch.
              </p>
            </div>

            <div 
              onClick={() => onNavToTab('procurement')}
              className="flex items-center justify-between group cursor-pointer border-t border-slate-800 pt-3 mt-4"
            >
              <span className="text-[10px] font-extrabold border-b border-orange-600 pb-1 uppercase tracking-wider text-orange-500 group-hover:text-white transition-colors">
                SUBMIT TECHNICAL REQUIREMENTS
              </span>
              <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
