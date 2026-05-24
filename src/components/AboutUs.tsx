/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { Shield, Sparkles, Building2, MapPin, Globe, CheckCircle2, Award, Zap } from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data';

export default function AboutUs() {
  const functionalRoles = [
    {
      title: 'Procurement Interface',
      desc: 'Operative bridge between verified chemical manufacturers globally and regional end-users to secure pure, batch-tested products.'
    },
    {
      title: 'Industrial Distributor',
      desc: 'Maintains critical stockpiles of process reagents, desiccant beads, and filtration medias within local bonded warehouses.'
    },
    {
      title: 'Supply Chain Coordinator',
      desc: 'Handles challenging global logistics, technical shipping protocols, and clearing of high-consequence process chemicals.'
    },
    {
      title: 'Technical Support Channel',
      desc: 'Provides engineering consultations for matching specific production chemicals based on physical chemistry specifications.'
    }
  ];

  return (
    <div className="bg-white py-12 lg:py-20" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title Block */}
        <div className="border-b border-slate-200 pb-8">
          <p className="text-xs font-bold text-orange-600 tracking-widest uppercase font-mono mb-2">Corporate Profile</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            About Oil Drop Chemical Ltd
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-3xl">
            Established on the principles of chemical integrity, structural supply consistency, and technical feasibility mapping.
          </p>
        </div>

        {/* Sourced Operational Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src="/pic12.jpg"
              alt="Quality Vetting Laboratory"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
              <span className="text-[8px] font-mono font-extrabold tracking-widest text-orange-400 uppercase">STAGE 01 // SPECS ANALYSIS</span>
              <h4 className="text-xs font-extrabold uppercase font-display tracking-wide">TDS Technical Feasibility Vetting</h4>
              <p className="text-[9px] text-slate-400 font-light leading-snug">Vetting chemical structures, TDS certifications, and spec tolerances beforehand.</p>
            </div>
          </div>

          <div className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src="/blue_pallet.jpg"
              alt="Warehouse packaging pallets"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
              <span className="text-[8px] font-mono font-extrabold tracking-widest text-orange-400 uppercase">STAGE 02 // STAGING</span>
              <h4 className="text-xs font-extrabold uppercase font-display tracking-wide">Bulk Compound Warehousing</h4>
              <p className="text-[9px] text-slate-400 font-light leading-snug">Cardboard fiber container loads staged and strapped tightly onto blue pallets.</p>
            </div>
          </div>

          <div className="group relative aspect-[16/10] overflow-hidden rounded-sm border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src="/filtration.jpg"
              alt="Industrial filtration process water"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
              <span className="text-[8px] font-mono font-extrabold tracking-widest text-orange-400 uppercase">STAGE 03 // DISPATCH</span>
              <h4 className="text-xs font-extrabold uppercase font-display tracking-wide">Refining & Water Treatment Supply</h4>
              <p className="text-[9px] text-slate-400 font-light leading-snug">Dehydration glycols and sand filtration medias shipped via secure containers.</p>
            </div>
          </div>
        </div>

        {/* Company Profile Main Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-950 tracking-tight">Sourcing, Evaluation & Distribution Integrity</h3>
            
            <p className="text-slate-600 leading-relaxed text-base">
              Oil Drop Chemical Ltd is an industrial chemical procurement and distribution company engaged in the sourcing, evaluation, and supply of industrial-grade chemicals and process materials. 
            </p>
            
            <p className="text-slate-600 leading-relaxed text-base">
              The company supports industrial clients requiring consistent and reliable supply of chemicals used in production systems, processing operations, and industrial maintenance. 
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Vetting Process Assurance</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every batch of material we help source is reviewed against manufacturer Certificate of Analyses (CoA), material chemical safety datasheets (MSDS), and strict physical density/viscosity thresholds matching operational engineering guidelines.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 rounded-sm p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-600 text-white p-2 rounded-sm font-black">
                OD
              </div>
              <div>
                <span className="block font-bold tracking-tight text-white font-display">Sourcing Standards Indicator</span>
                <span className="block text-[10px] text-slate-400 font-mono tracking-widest uppercase">QA Framework</span>
              </div>
            </div>

            <div className="space-y-4 font-sans">
              <div className="border-l-2 border-orange-600 pl-4 space-y-1">
                <div className="text-sm font-semibold text-slate-100">Quality Consistency</div>
                <p className="text-xs text-slate-300">Procuring exclusively from chemical manufacturers with third-party technical certifications.</p>
              </div>
              <div className="border-l-2 border-orange-600 pl-4 space-y-1">
                <div className="text-sm font-semibold text-slate-100">Material Traceability</div>
                <p className="text-xs text-slate-300">Each consignment is accompanied by fully auditable laboratory batch results.</p>
              </div>
              <div className="border-l-2 border-orange-600 pl-4 space-y-1">
                <div className="text-sm font-semibold text-slate-100">Regional Compliance</div>
                <p className="text-xs text-slate-300">Adhering strictly to local regulatory frameworks, storage rules, and transport safety.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Functional Roles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Functional Role & Capabilities</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              How Oil Drop Chemical Ltd supports and simplifies industrial supply chain frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {functionalRoles.map((role, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200/80 p-5 rounded-sm flex flex-col justify-between hover:shadow-sm transition-shadow">
                <div className="space-y-3">
                  <div className="bg-white border border-slate-200 w-10 h-10 rounded-sm flex items-center justify-center font-bold font-mono text-orange-600 text-sm shadow-sm">
                    0{i + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-display">{role.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-600">{role.desc}</p>
                </div>
                <div className="pt-4 flex items-center text-[10px] text-orange-700 font-extrabold tracking-wider uppercase">
                  <span>Operational Standard</span>
                  <CheckCircle2 className="w-3.5 h-3.5 ml-1 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Structure Info */}
        <div className="bg-slate-50 rounded-sm p-6 sm:p-10 border border-slate-200 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-mono font-bold">
                <Globe className="w-3.5 h-3.5 animate-spin-slow text-emerald-600" />
                <span>Geographic Structure</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight font-display">Bridging Local Delivery with International Sourcing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The company operates from Nigeria with international procurement coordination support to facilitate sourcing, technical communication, and supplier engagement.
              </p>
              <div className="border-t border-slate-200 pt-4 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900 font-display"></span>
                  <span>Port Harcourt HUB</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-600 font-display"></span>
                  <span>Houston Liaison</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* PH Desk */}
              <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-slate-100 text-slate-800 text-[10px] font-bold tracking-widest uppercase px-2.1 py-1 rounded-sm">PH HUBS</span>
                    <MapPin className="text-slate-950 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">{OFFICE_LOCATIONS.nigeria.title}</h4>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">{OFFICE_LOCATIONS.nigeria.address}</p>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal bg-slate-50 p-2.5 rounded-sm border border-slate-200">
                    {OFFICE_LOCATIONS.nigeria.focus}
                  </p>
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-slate-150 mt-4 bg-slate-100">
                  <img
                    src="/pic1.jpg"
                    alt="Port Harcourt Sourcing Hub & Terminal Logistics"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[8px] font-mono tracking-wider font-bold text-slate-300 px-2 py-0.5 rounded-sm shadow">
                    PH LOGISTICS TERMINAL
                  </div>
                </div>
              </div>

              {/* Houston Desk */}
              <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-orange-50 text-orange-800 text-[10px] font-bold tracking-widest uppercase px-2.1 py-1 rounded-sm">TEXAS OFFICE</span>
                    <Globe className="text-orange-600 w-5 h-5 animate-spin-slow" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">{OFFICE_LOCATIONS.houston.title}</h4>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">{OFFICE_LOCATIONS.houston.address}</p>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal bg-slate-50 p-2.5 rounded-sm border border-slate-200 font-sans">
                    {OFFICE_LOCATIONS.houston.focus}
                  </p>
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-slate-150 mt-4 bg-slate-100">
                  <img
                    src="/pic16.jpg"
                    alt="Houston Liaison Offices & Global Procurement coordinator Desk"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[8px] font-mono tracking-wider font-bold text-slate-300 px-2 py-0.5 rounded-sm shadow">
                    USA PROCUREMENT DESK
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4-Grid Asset Showcase Segment - Meet user request of 4 pics per page */}
        <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 sm:p-10 space-y-8 text-white mt-12 shadow-md">
          <div className="border-b border-slate-800 pb-5">
            <span className="text-[10px] font-bold tracking-[0.25em] text-orange-400 font-mono">FIELD OPERATIONAL LOGS</span>
            <h3 className="text-2xl font-black text-white font-display mt-1">Verified Site Equipment Portfolio</h3>
            <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
              Photolog of core terminal dispatch lines, cargo containers, process pumps, and security polymer barrels handled in daily distribution loops.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group space-y-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/IMG-20260523-WA0009.jpg"
                  alt="Process Piping Columns"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  PH-ID // 01
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100">Hydrocarbon Process Pumps</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Line pressure boost regulators managing dosing rates on process chemical streams.
                </p>
              </div>
            </div>

            <div className="group space-y-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/IMG-20260523-WA0010.jpg"
                  alt="Moisture Locked Drums Grid"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-305"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  PH-ID // 02
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100">Polymer Storage Barrels</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Sealed blue HDPE polymer liquid containment barrels strapped and stacked on pallets.
                </p>
              </div>
            </div>

            <div className="group space-y-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/motion_photo_4933652164483028447.jpg"
                  alt="Midstream Pipeline Works"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  PH-ID // 03
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100">Piping Construction Site</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Laying down and insulating structural steel pipeline ducts in high-consequence midstream runs.
                </p>
              </div>
            </div>

            <div className="group space-y-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-sm">
                <img
                  src="/motion_photo_6215962379076297242.jpg"
                  alt="Terminal Loading Bins"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/90 text-orange-400 font-mono text-[8px] font-bold px-2 py-0.5 rounded-sm">
                  PH-ID // 04
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider font-display text-slate-100">Freight Transport Loader</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-light">
                  Heavy logistics multi-axle carrier drayage backing containers to shelter-covered loading depots.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
