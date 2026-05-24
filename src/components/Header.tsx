/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Droplet, Phone, Mail, Globe, Menu, X, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuickSearch: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenQuickSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'sectors', label: 'Industry Applications' },
    { id: 'procurement', label: 'Procurement Request' },
    { id: 'contact', label: 'Contact Desk' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans" id="oildrop-header">
      {/* Top Bar - Sourcing Details */}
      <div className="bg-slate-950 text-slate-400 text-xs py-2 px-4 border-b border-slate-900 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-slate-300 text-[11px] sm:text-xs">Nigeria Port Harcourt Operations & Houston Desks Connected</span>
            </span>
            <span className="text-slate-800">|</span>
            <span className="flex items-center space-x-1">
              <span className="text-orange-500 font-bold tracking-wider text-[10px]">FEASIBILITY COMPLIANT</span>
              <span>- Standard Sourcing Protocol</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-500 transition-colors flex items-center space-x-1">
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <span className="text-slate-800">|</span>
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-orange-500 transition-colors flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md text-slate-800 border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-600 rounded-sm flex items-center justify-center mr-1.5 sm:mr-3 shadow-inner">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rotate-45"></div>
              </div>
              <div>
                <span className="block text-[11px] xs:text-xs sm:text-lg lg:text-xl font-black tracking-tighter uppercase text-slate-900 leading-none">
                  OILDROP <span className="text-orange-600">CHEMICAL</span>
                </span>
                <span className="block text-[6px] xs:text-[7px] sm:text-[8px] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-slate-500 font-bold font-mono mt-0.5 sm:mt-1 leading-none">
                  Industrial Procurement & Distribution
                </span>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-tab-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-slate-900 text-white font-bold'
                        : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={onOpenQuickSearch}
                className="px-3 py-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-sm transition-colors border border-slate-200 flex items-center space-x-1"
                title="Search Products & Specifications"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow inline-block mr-1" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Sourcing Finder</span>
              </button>
              
              <button
                onClick={() => handleNavClick('procurement')}
                className="bg-slate-900 text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors rounded-sm shadow-sm flex items-center space-x-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-orange-500" />
                <span>Request Quote</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 focus:outline-none border border-slate-200 shadow-sm transition-colors"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only font-bold">Open main menu</span>
                {mobileMenuOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div
          className={`lg:hidden transition-all duration-350 ease-in-out border-t border-slate-200 bg-white overflow-y-auto max-h-[calc(100vh-80px)] ${
            mobileMenuOpen ? 'max-h-screen opacity-100 py-3 block' : 'max-h-0 opacity-0 hidden'
          }`}
        >
          <div className="px-3 pt-1 pb-3 space-y-1 sm:px-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full block px-4 py-3 rounded-sm text-left text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                    isActive
                      ? 'bg-slate-900 text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-4 pb-4 border-t border-slate-150 px-4 space-y-3.5">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Liaison Desks Active & Online</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenQuickSearch();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-widest py-3 rounded-sm transition-all border border-slate-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
                <span>Sourcing Finder</span>
              </button>

              <button
                onClick={() => handleNavClick('procurement')}
                className="w-full text-center bg-slate-950 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-sm transition-all shadow flex items-center justify-center space-x-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-orange-500" />
                <span>Request Quote</span>
              </button>
            </div>

            {/* Quick Sourcing contacts inside mobile menu */}
            <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-[11px] text-slate-500 font-sans">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">PH OPERATIONS</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-mono font-bold text-slate-800 hover:text-orange-600 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">PROCUREMENT DIRECT</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-mono font-bold text-slate-800 hover:text-orange-600 transition-colors truncate max-w-[160px]">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
