/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Grab, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LightboxDetail {
  url: string;
  title?: string;
  desc?: string;
  tag?: string;
}

// Global utility trigger to enlarge any picture
export function enlargeImage(url: string, title?: string, desc?: string, tag?: string) {
  const event = new CustomEvent('open-lightbox-global', {
    detail: { url, title, desc, tag }
  });
  window.dispatchEvent(event);
}

export default function Lightbox() {
  const [data, setData] = useState<LightboxDetail | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<LightboxDetail>;
      setData(customEvent.detail);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('open-lightbox-global', handleOpen);
    
    // Add escape key listener to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setData(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-lightbox-global', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const nextZoom = Math.max(prev - 0.5, 1);
      if (nextZoom === 1) {
        setPosition({ x: 0, y: 0 }); // reset position if normalized
      }
      return nextZoom;
    });
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Drag to pan handlers (only when zoomed)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    
    // Calculate boundaries to keep context visible
    const boundaryX = (zoom - 1) * 200;
    const boundaryY = (zoom - 1) * 150;
    
    setPosition({
      x: Math.max(-boundaryX, Math.min(boundaryX, newX)),
      y: Math.max(-boundaryY, Math.min(boundaryY, newY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6"
          onClick={() => setData(null)}
          id="global-lightbox-overlay"
        >
          {/* Top Control Bar */}
          <div className="flex justify-between items-center w-full z-10 max-w-7xl mx-auto pt-2" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center space-x-2">
              <span className="bg-orange-600/20 border border-orange-500/30 text-orange-400 font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                {data.tag || 'Sourcing Photo'}
              </span>
              <span className="hidden md:inline-flex items-center space-x-1 text-slate-500 font-mono text-[9px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Asset Documentation</span>
              </span>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center space-x-2">
              {/* Zoom Buttons */}
              <div className="bg-slate-900 border border-slate-800 rounded-sm p-1 flex items-center space-x-1.5 shadow-md">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 active:scale-95 transition-all text-xs"
                  title="Zoom Out"
                  disabled={zoom <= 1}
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono font-bold text-slate-300 w-9 text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 active:scale-95 transition-all text-xs"
                  title="Zoom In"
                  disabled={zoom >= 4}
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                {(zoom > 1 || position.x !== 0 || position.y !== 0) && (
                  <button
                    onClick={handleReset}
                    className="p-1.5 rounded-sm text-orange-400 hover:text-white hover:bg-slate-800 active:scale-95 transition-all text-xs border-l border-slate-800"
                    title="Reset Zoom & Pan"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setData(null)}
                className="bg-slate-900 text-slate-400 hover:text-white p-2 border border-slate-800 rounded-sm transition-all hover:border-orange-500/50 cursor-pointer shadow-md"
                title="Close overlay (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Image Stage */}
          <div 
            ref={containerRef}
            className="flex-grow flex items-center justify-center relative overflow-hidden my-4 w-full touch-none select-none max-w-7xl mx-auto"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className={`relative transition-transform duration-100 ease-out flex items-center justify-center max-h-[70vh] max-w-full ${
                zoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''
              }`}
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              }}
              onMouseDown={handleMouseDown}
              onClick={(e) => {
                e.stopPropagation();
                // Toggle zoom on tap
                if (zoom > 1) {
                  handleReset();
                } else {
                  setZoom(2);
                }
              }}
            >
              <img
                src={data.url}
                alt={data.title || 'Enlarged view'}
                referrerPolicy="no-referrer"
                className="object-contain max-h-[70vh] rounded-xs select-none shadow-2xl border border-slate-900 pointer-events-none"
              />
            </div>

            {/* Hint message on canvas */}
            {zoom > 1 && (
              <div className="absolute top-4 bg-slate-900/90 border border-slate-800 text-[9px] text-slate-400 font-mono tracking-widest px-3 py-1.5 rounded-sm flex items-center space-x-1.5 shadow-md pointer-events-none">
                <Grab className="w-3 h-3 text-orange-500 animate-pulse" />
                <span>Zoom Mode Active: Drag Photo to Pan / Tap to Mini</span>
              </div>
            )}
            
            {zoom === 1 && (
              <div className="absolute bottom-2 bg-slate-950/60 text-[9px] text-slate-500 font-mono tracking-wider px-3 py-1 rounded-sm pointer-events-none">
                Click photo any time to zoom to 200%
              </div>
            )}
          </div>

          {/* Caption Details bar */}
          <div 
            className="w-full bg-slate-900 border border-slate-850 p-5 md:p-6 rounded-sm shadow-xl max-w-4xl mx-auto mb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold font-display text-white tracking-tight flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>{data.title || 'Operational Sourcing Audit Record'}</span>
              </h3>
              {data.desc && (
                <p className="text-xs text-slate-350 leading-relaxed font-light font-sans">
                  {data.desc}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
