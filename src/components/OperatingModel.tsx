/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Shuffle, ShieldCheck, CheckSquare, Search, Award } from 'lucide-react';

export default function OperatingModel() {
  const coreFocuses = [
    {
      title: 'Industrial Sourcing',
      desc: 'Identifying, auditing, and vetting global chemical manufacturers whose products meet strict international purity and hazard safety indexes.'
    },
    {
      title: 'Process Material Supply',
      desc: 'Facilitating steady, bulk deliveries of process reagents, active dehydration materials, and specialized filtering media.'
    },
    {
      title: 'Application-Based Matching',
      desc: 'Conducting technical cross-checking to ensure materials chemically synchronize with system temperatures, pressures, and flow rates.'
    },
    {
      title: 'Supply Chain Coordination',
      desc: 'Directing complex logistics operations, terminal warehousing, trans-oceanic freighting, and regional clearance routes.'
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-16 lg:py-24 font-sans animate-fade-in" id="operating-model">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title Heading Block */}
        <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <p className="text-xs font-bold text-orange-500 tracking-widest uppercase font-mono mb-2">OPERATIONAL ARCHITECTURE</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-display">
              Our Operating Model
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl font-light">
              Oil Drop Chemical Ltd functions as a highly vetted procurement and distribution interface between international chemical manufacturers and industrial end-users.
            </p>
          </div>
          <div className="text-xs text-slate-550 bg-slate-950 px-4 py-2 rounded-sm border border-slate-850 font-mono shadow-sm">
            Vetted Sourcing Workflow
          </div>
        </div>

        {/* Operating Model Core focuses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFocuses.map((focus, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-850 p-6 rounded-sm space-y-4 hover:border-orange-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="bg-slate-900 border border-slate-800 text-orange-500 w-12 h-12 rounded-sm flex items-center justify-center font-bold text-lg font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-100 font-display">{focus.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{focus.desc}</p>
              </div>
              
              <div className="pt-4 flex items-center text-[10px] text-orange-500/80 font-bold uppercase tracking-widest font-mono">
                <span>SYSTEM TARGET CHECK</span>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Representation / Visual diagram */}
        <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-sm p-6 sm:p-8 border border-slate-850 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-display uppercase tracking-wider">Structured Procurement System</h3>
            <p className="text-xs text-slate-450 font-light">
              Coordinating technical requirements between overseas producers and regional facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-center relative font-sans">
            
            {/* Step 1: Overseas Producers */}
            <div className="bg-slate-900 p-5 rounded-sm border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-orange-500 font-mono tracking-widest uppercase">STAGE ONE</span>
              <h4 className="text-sm font-bold text-white font-display">Global Chemical Manufacturers</h4>
              <p className="text-[11px] text-slate-300 leading-normal font-light">
                Direct engagement with production operations in USA, Europe, and Asia. Strict pre-shipment laboratory analysis and Certificate of Analysis (CoA) checks.
              </p>
            </div>

            {/* Step 2: Sourcing interface */}
            <div className="bg-slate-900/60 p-5 rounded-sm border border-slate-750 space-y-2 border-dashed">
              <span className="text-xs font-bold text-orange-500 font-mono tracking-widest uppercase">STAGE TWO</span>
              <h4 className="text-sm font-bold text-white font-display">Oil Drop Chemical Desk</h4>
              <p className="text-[11px] text-slate-350 leading-normal font-light">
                Sourcing evaluation, alignment of physical-chemical datasheets, regulatory compliance check, trans-hemisphere freight logistics coordination.
              </p>
            </div>

            {/* Step 3: Industrial Users */}
            <div className="bg-slate-900 p-5 rounded-sm border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-orange-500 font-mono tracking-widest uppercase">STAGE THREE</span>
              <h4 className="text-sm font-bold text-white font-display">Industrial End-Users</h4>
              <p className="text-[11px] text-slate-305 leading-normal font-light">
                Port Harcourt warehousing, regional logistics delivery pipelines, direct client servicing for energetic, mineral, manufacturing, and waste treatment plants.
              </p>
            </div>

          </div>

          <div className="border-t border-slate-850 pt-5 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-450 font-mono gap-2">
            <div className="flex items-center space-x-1">
              <CheckSquare className="w-3.5 h-3.5 text-emerald-500 mr-1" />
              <span>Technical Product Verification Standardized</span>
            </div>
            <div>
              <span>Dual Node: Port Harcourt (Rivers State) | Houston (Texas) Liaison</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
