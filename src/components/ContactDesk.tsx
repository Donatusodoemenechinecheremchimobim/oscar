/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { CONTACT_INFO, OFFICE_LOCATIONS } from '../data';

export default function ContactDesk() {
  const [times, setTimes] = useState({
    nigeria: '',
    houston: ''
  });

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [messageSubmitted, setMessageSubmitted] = useState(false);

  // Dynamic timezone calculators
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      
      // Calculate Africa/Lagos (WAT, UTC+1) time
      try {
        const watTime = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(now);

        // Calculate America/Chicago (Houston, CDT is UTC-5) time
        const houstonTime = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Chicago',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(now);

        setTimes({
          nigeria: watTime,
          houston: houstonTime
        });
      } catch (e) {
        // Fallback default offsets
        setTimes({
          nigeria: new Date(now.getTime() + 1 * 3600000).toLocaleTimeString(),
          houston: new Date(now.getTime() - 5 * 3600000).toLocaleTimeString()
        });
      }
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setMessageSubmitted(true);
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setMessageSubmitted(false);
    }, 8000);
  };

  return (
    <div className="bg-white py-12 lg:py-20 font-sans" id="contact-desk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title Deck */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-600">Sourcing Desks & support</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1 font-display">
            Contact Sourcing Liaison
          </h2>
          <p className="text-slate-500 text-sm mt-1 max-w-2xl font-light">
            Get in touch immediately through our local distribution hubs or trans-atlantic coordination desk.
          </p>
        </div>

        {/* Office hubs with active clock and direct details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Offices info */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Nigeria Operations */}
            <div className="border border-slate-200 rounded-sm p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between bg-slate-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                <MapPin className="w-24 h-24 text-slate-950" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-slate-900 text-white rounded-sm px-3 py-1.5 self-start w-fit">
                  <span className="text-[9px] font-bold uppercase tracking-wide font-mono">Operations Desk</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-950 font-display">{OFFICE_LOCATIONS.nigeria.companyName}</h3>
                  <p className="text-xs text-slate-600 flex items-start space-x-1.5 leading-normal">
                    <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <span>{OFFICE_LOCATIONS.nigeria.address}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed pl-3 border-l border-slate-300 font-light">
                  {OFFICE_LOCATIONS.nigeria.focus}
                </p>
              </div>

              {/* Active clock */}
              <div className="mt-6 border-t border-slate-200 pt-4 flex justify-between items-center text-xs">
                <div className="flex items-center space-x-1.5 font-bold text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500">PH Time:</span>
                </div>
                <code className="bg-slate-900 text-orange-450 font-mono text-xs px-2.5 py-1 rounded-sm font-bold">
                  {times.nigeria || 'LoadingWAT...'}
                </code>
              </div>

            </div>

            {/* Houston Operations */}
            <div className="border border-slate-200 rounded-sm p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between bg-slate-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                <Clock className="w-24 h-24 text-slate-950" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-orange-600 text-white rounded-sm px-3 py-1.5 self-start w-fit">
                  <span className="text-[9px] font-bold uppercase tracking-wide font-mono">Sourcing HQ Desk</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-950 font-display">{OFFICE_LOCATIONS.houston.title}</h3>
                  <p className="text-xs text-slate-600 flex items-start space-x-1.5 leading-normal">
                    <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <span>{OFFICE_LOCATIONS.houston.address}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed pl-3 border-l border-slate-300 font-light">
                  {OFFICE_LOCATIONS.houston.focus}
                </p>
              </div>

              {/* Active clock */}
              <div className="mt-6 border-t border-slate-200 pt-4 flex justify-between items-center text-xs">
                <div className="flex items-center space-x-1.5 font-bold text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-orange-600 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-500">Houston Time:</span>
                </div>
                <code className="bg-slate-900 text-orange-450 font-mono text-xs px-2.5 py-1 rounded-sm font-bold">
                  {times.houston || 'LoadingCDT...'}
                </code>
              </div>

            </div>

            {/* Quick Sourcing contacts overlay */}
            <div className="md:col-span-2 bg-slate-950 text-white rounded-sm p-6 border border-slate-900 space-y-4">
              <span className="text-[9px] uppercase tracking-widest text-orange-400 font-bold font-mono block">Validated Communication Channels</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Emails section */}
                <div className="bg-slate-900 p-4 rounded-sm border border-slate-850 space-y-2">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div className="space-y-0.5">
                    <span className="block text-[9px] uppercase text-slate-400 font-mono font-bold tracking-wide">Procurement Email:</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="block text-xs font-bold text-white hover:text-orange-400 transition-colors truncate font-mono">
                      {CONTACT_INFO.email}
                    </a>
                    <a href={`mailto:${CONTACT_INFO.altEmail}`} className="block text-[10px] text-slate-400 hover:text-orange-400 transition-colors truncate font-mono">
                      {CONTACT_INFO.altEmail}
                    </a>
                  </div>
                </div>

                {/* Telephone section */}
                <div className="bg-slate-900 p-4 rounded-sm border border-slate-850 space-y-2">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <div className="space-y-0.5">
                    <span className="block text-[9px] uppercase text-slate-400 font-mono font-bold tracking-wide">Assigned Helpline:</span>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="block text-xs font-bold text-white hover:text-orange-400 transition-colors font-mono">
                      {CONTACT_INFO.phone}
                    </a>
                    <a href={`tel:${CONTACT_INFO.altPhone}`} className="block text-[10px] text-slate-400 hover:text-orange-400 transition-colors font-mono">
                      {CONTACT_INFO.altPhone}
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* General Message Box Form */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 shadow-sm rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-3 pb-4">
              <h3 className="text-sm font-bold text-slate-950 uppercase tracking-widest font-mono flex items-center space-x-1.5">
                <HelpCircle className="w-5 h-5 text-orange-600" />
                <span>Submit General Inquiry</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                For non-quotation items, technical feedback, or employment requests, write us a direct message below.
              </p>
            </div>

            {messageSubmitted ? (
              <div className="bg-slate-950 border border-orange-500/20 text-white p-6 rounded-sm space-y-2 text-center py-10 my-auto">
                <CheckCircle2 className="w-10 h-10 text-orange-500 mx-auto" />
                <h4 className="text-xs font-bold uppercase tracking-wider font-display text-orange-400">Inquiry Logs Filed</h4>
                <p className="text-xs text-slate-350 leading-normal max-w-sm mx-auto font-light">
                  Your general message has been received. Our administration specialists will reply within 24 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleGeneralSubmit} className="space-y-4 my-auto">
                
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-600 uppercase font-mono tracking-widest">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-600 uppercase font-mono tracking-widest">Business Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="johndoe@company.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-slate-900 focus:outline-none font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-600 uppercase font-mono tracking-widest">Subject Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Career in Port Harcourt Ops Desk"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-bold text-slate-600 uppercase font-mono tracking-widest">Your Message Specifications</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your non-commercial question, supplier inquiry details, or other items..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-white border border-slate-205 rounded-sm px-3.5 py-2.5 text-xs focus:ring-1 focus:ring-slate-900 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-950 hover:bg-orange-600 text-white font-bold text-xs py-3.5 px-4 rounded-sm shadow transition-colors flex items-center justify-center space-x-1.5 cursor-pointer uppercase tracking-widest"
                >
                  <Send className="w-3.5 h-3.5 text-orange-500" />
                  <span>SEND SECURED EMAIL</span>
                </button>

              </form>
            )}

            <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400 font-mono">
              <span>GDPR Compliance Secure</span>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
