/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Animasi SVG Molekul Metana (CH₄) & Etena (C₂H₄)
 * Mengapung pelan dengan atom hidrogen mengorbit seperti planet mengelilingi karbon.
 * Menghormati prefers-reduced-motion.
 */

import React, { useState } from 'react';

export const MoleculeOrbit: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'metana' | 'etena'>('metana');

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      {/* Switch model toggle */}
      <div className="flex items-center gap-1.5 p-1 bg-[#1E1850] border border-[#3A3280] rounded-xl mb-4 text-xs font-semibold">
        <button
          onClick={() => setActiveModel('metana')}
          className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
            activeModel === 'metana'
              ? 'bg-[#5EEAD4] text-[#0F0B2A]'
              : 'text-[#B8B5DE] hover:text-[#EEEDFB]'
          }`}
          aria-label="Tampilkan model molekul metana"
        >
          Metana (CH₄) · Alkana
        </button>
        <button
          onClick={() => setActiveModel('etena')}
          className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
            activeModel === 'etena'
              ? 'bg-[#B4A7FF] text-[#0F0B2A]'
              : 'text-[#B8B5DE] hover:text-[#EEEDFB]'
          }`}
          aria-label="Tampilkan model molekul etena"
        >
          Etena (C₂H₄) · Alkena
        </button>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Soft background glow */}
        <div 
          className="absolute inset-4 rounded-full blur-2xl opacity-20 transition-colors duration-500 pointer-events-none"
          style={{ backgroundColor: activeModel === 'metana' ? '#5EEAD4' : '#B4A7FF' }}
        />

        {activeModel === 'metana' ? (
          /* METANA (CH4) TETRAHEDRAL ORBIT SVG */
          <svg
            viewBox="0 0 320 320"
            className="w-full h-full animate-float select-none"
            role="img"
            aria-label="Animasi model molekul metana dengan atom hidrogen mengorbit karbon"
          >
            <defs>
              {/* Radial gradients for planetary atoms */}
              <radialGradient id="gradCarbon" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#8176E0" />
                <stop offset="60%" stopColor="#3B3278" />
                <stop offset="100%" stopColor="#1E1850" />
              </radialGradient>
              <radialGradient id="gradHydrogen" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#A7F3D0" />
                <stop offset="70%" stopColor="#5EEAD4" />
                <stop offset="100%" stopColor="#14B8A6" />
              </radialGradient>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Orbit paths */}
            <ellipse cx="160" cy="160" rx="100" ry="46" fill="none" stroke="#3A3280" strokeWidth="1.5" strokeDasharray="4 4" transform="rotate(-25 160 160)" />
            <ellipse cx="160" cy="160" rx="96" ry="42" fill="none" stroke="#3A3280" strokeWidth="1.5" strokeDasharray="4 4" transform="rotate(40 160 160)" />

            {/* Orbiting Ring 1 with H atoms */}
            <g className="animate-orbit-cw origin-center" style={{ transformOrigin: '160px 160px' }}>
              {/* Bond line 1 */}
              <line x1="160" y1="160" x2="65" y2="135" stroke="#5EEAD4" strokeWidth="2" strokeOpacity="0.4" />
              {/* Hydrogen 1 */}
              <g transform="translate(65, 135)">
                <circle cx="0" cy="0" r="16" fill="url(#gradHydrogen)" filter="url(#softGlow)" />
                <text x="0" y="5" textAnchor="middle" fill="#0F0B2A" fontSize="13" fontWeight="800" fontFamily="sans-serif">H</text>
              </g>

              {/* Bond line 2 */}
              <line x1="160" y1="160" x2="255" y2="185" stroke="#5EEAD4" strokeWidth="2" strokeOpacity="0.4" />
              {/* Hydrogen 2 */}
              <g transform="translate(255, 185)">
                <circle cx="0" cy="0" r="16" fill="url(#gradHydrogen)" filter="url(#softGlow)" />
                <text x="0" y="5" textAnchor="middle" fill="#0F0B2A" fontSize="13" fontWeight="800" fontFamily="sans-serif">H</text>
              </g>
            </g>

            {/* Orbiting Ring 2 with H atoms (Counter-rotation) */}
            <g className="animate-orbit-ccw origin-center" style={{ transformOrigin: '160px 160px' }}>
              {/* Bond line 3 */}
              <line x1="160" y1="160" x2="160" y2="60" stroke="#5EEAD4" strokeWidth="2" strokeOpacity="0.4" />
              {/* Hydrogen 3 */}
              <g transform="translate(160, 60)">
                <circle cx="0" cy="0" r="16" fill="url(#gradHydrogen)" filter="url(#softGlow)" />
                <text x="0" y="5" textAnchor="middle" fill="#0F0B2A" fontSize="13" fontWeight="800" fontFamily="sans-serif">H</text>
              </g>

              {/* Bond line 4 */}
              <line x1="160" y1="160" x2="160" y2="260" stroke="#5EEAD4" strokeWidth="2" strokeOpacity="0.4" />
              {/* Hydrogen 4 */}
              <g transform="translate(160, 260)">
                <circle cx="0" cy="0" r="16" fill="url(#gradHydrogen)" filter="url(#softGlow)" />
                <text x="0" y="5" textAnchor="middle" fill="#0F0B2A" fontSize="13" fontWeight="800" fontFamily="sans-serif">H</text>
              </g>
            </g>

            {/* Central Carbon Atom (C) */}
            <circle cx="160" cy="160" r="32" fill="url(#gradCarbon)" stroke="#5EEAD4" strokeWidth="2.5" />
            <text x="160" y="167" textAnchor="middle" fill="#EEEDFB" fontSize="22" fontWeight="800" fontFamily="sans-serif">
              C
            </text>
            <text x="160" y="181" textAnchor="middle" fill="#5EEAD4" fontSize="9" fontWeight="700" letterSpacing="0.05em">
              4 VALENSI
            </text>
          </svg>
        ) : (
          /* ETENA (C2H4) DOUBLE BOND ORBIT SVG */
          <svg
            viewBox="0 0 320 320"
            className="w-full h-full animate-float select-none"
            role="img"
            aria-label="Animasi model molekul etena dengan ikatan rangkap dua karbon-karbon"
          >
            <defs>
              <radialGradient id="gradCarbonE" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#9C8EFF" />
                <stop offset="60%" stopColor="#483B8E" />
                <stop offset="100%" stopColor="#1E1850" />
              </radialGradient>
              <radialGradient id="gradHydrogenE" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#DDD6FE" />
                <stop offset="70%" stopColor="#B4A7FF" />
                <stop offset="100%" stopColor="#7C3AED" />
              </radialGradient>
            </defs>

            {/* Orbit circles */}
            <circle cx="120" cy="160" r="64" fill="none" stroke="#3A3280" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="200" cy="160" r="64" fill="none" stroke="#3A3280" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Double bond lines between Carbon atoms */}
            <line x1="124" y1="154" x2="196" y2="154" stroke="#B4A7FF" strokeWidth="3" />
            <line x1="124" y1="166" x2="196" y2="166" stroke="#B4A7FF" strokeWidth="3" />

            {/* Orbiting H on left Carbon */}
            <g className="animate-orbit-cw origin-center" style={{ transformOrigin: '120px 160px' }}>
              <line x1="120" y1="160" x2="68" y2="116" stroke="#B4A7FF" strokeWidth="2" strokeOpacity="0.4" />
              <g transform="translate(68, 116)">
                <circle cx="0" cy="0" r="14" fill="url(#gradHydrogenE)" />
                <text x="0" y="4" textAnchor="middle" fill="#0F0B2A" fontSize="12" fontWeight="800">H</text>
              </g>

              <line x1="120" y1="160" x2="68" y2="204" stroke="#B4A7FF" strokeWidth="2" strokeOpacity="0.4" />
              <g transform="translate(68, 204)">
                <circle cx="0" cy="0" r="14" fill="url(#gradHydrogenE)" />
                <text x="0" y="4" textAnchor="middle" fill="#0F0B2A" fontSize="12" fontWeight="800">H</text>
              </g>
            </g>

            {/* Orbiting H on right Carbon (Opposite direction) */}
            <g className="animate-orbit-ccw origin-center" style={{ transformOrigin: '200px 160px' }}>
              <line x1="200" y1="160" x2="252" y2="116" stroke="#B4A7FF" strokeWidth="2" strokeOpacity="0.4" />
              <g transform="translate(252, 116)">
                <circle cx="0" cy="0" r="14" fill="url(#gradHydrogenE)" />
                <text x="0" y="4" textAnchor="middle" fill="#0F0B2A" fontSize="12" fontWeight="800">H</text>
              </g>

              <line x1="200" y1="160" x2="252" y2="204" stroke="#B4A7FF" strokeWidth="2" strokeOpacity="0.4" />
              <g transform="translate(252, 204)">
                <circle cx="0" cy="0" r="14" fill="url(#gradHydrogenE)" />
                <text x="0" y="4" textAnchor="middle" fill="#0F0B2A" fontSize="12" fontWeight="800">H</text>
              </g>
            </g>

            {/* Carbon Atom 1 */}
            <circle cx="120" cy="160" r="26" fill="url(#gradCarbonE)" stroke="#B4A7FF" strokeWidth="2" />
            <text x="120" y="167" textAnchor="middle" fill="#EEEDFB" fontSize="18" fontWeight="800">C</text>

            {/* Carbon Atom 2 */}
            <circle cx="200" cy="160" r="26" fill="url(#gradCarbonE)" stroke="#B4A7FF" strokeWidth="2" />
            <text x="200" y="167" textAnchor="middle" fill="#EEEDFB" fontSize="18" fontWeight="800">C</text>
          </svg>
        )}
      </div>

      {/* Caption indicator */}
      <div className="flex items-center gap-2 text-xs text-[#B8B5DE] mt-1">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeModel === 'metana' ? '#5EEAD4' : '#B4A7FF' }} />
        <span>{activeModel === 'metana' ? 'Metana (CH₄): 1 atom C mengikat 4 atom H' : 'Etena (C₂H₄): Ikatan rangkap dua C=C'}</span>
      </div>
    </div>
  );
};
