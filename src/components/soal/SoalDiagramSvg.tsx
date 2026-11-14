/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Komponen Diagram SVG Khusus Soal Latihan
 * Digunakan untuk Soal 4 (penomoran C1-C10), Soal 6 (alkana bercabang),
 * Soal 8 (alkena bercabang), dan Soal 9 (alkuna 3-metil-1-pentuna).
 */

import React from 'react';

interface SoalDiagramSvgProps {
  type: 'soal-4' | 'soal-6' | 'soal-8' | 'soal-9';
}

export const SoalDiagramSvg: React.FC<SoalDiagramSvgProps> = ({ type }) => {
  if (type === 'soal-4') {
    // Soal 4:
    // C1(CH3) terikat ke C2(CH)
    // C2 terikat ke C3, dan ke C7(CH2)->C9(CH2)->C10(CH3)
    // C3 terikat ke C2, C4(CH3), C5(CH2)->C6(CH3), dan C8(CH3)
    return (
      <div className="w-full overflow-x-auto p-4 bg-[#0F0B2A]/90 border border-[#3A3280] rounded-xl flex flex-col items-center justify-center my-3">
        <div className="text-[11px] font-mono font-medium text-[#B8B5DE] mb-2 self-start flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5EEAD4] animate-pulse"></span>
          <span>Bagan Struktur Rantai Karbon Bertanda Nomor:</span>
        </div>
        <svg
          viewBox="0 0 560 250"
          className="w-full max-w-[560px] h-auto drop-shadow-md select-none font-sans"
        >
          <defs>
            <linearGradient id="cGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1850" />
              <stop offset="100%" stopColor="#150F38" />
            </linearGradient>
          </defs>

          {/* Ikatan antar atom C */}
          {/* C1 - C2 */}
          <line x1="60" y1="125" x2="140" y2="125" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />
          
          {/* C2 - C3 */}
          <line x1="180" y1="125" x2="260" y2="125" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />
          
          {/* C3 - C5 */}
          <line x1="300" y1="125" x2="380" y2="125" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />
          
          {/* C5 - C6 */}
          <line x1="420" y1="125" x2="490" y2="125" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C3 - C4 (ke atas) */}
          <line x1="280" y1="105" x2="280" y2="45" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C3 - C8 (ke bawah) */}
          <line x1="280" y1="145" x2="280" y2="205" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C2 - C7 (ke bawah) */}
          <line x1="160" y1="145" x2="160" y2="195" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C7 - C9 (ke kiri bawah) */}
          <line x1="140" y1="205" x2="90" y2="205" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C9 - C10 */}
          <line x1="70" y1="185" x2="70" y2="145" stroke="#7E72B8" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.3" />
          <line x1="50" y1="205" x2="25" y2="205" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* Node C1 */}
          <g transform="translate(45, 125)">
            <circle r="18" fill="url(#cGrad)" stroke="#5EEAD4" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">CH₃</text>
            <circle cx="12" cy="-12" r="8" fill="#5EEAD4" />
            <text x="12" y="-9" textAnchor="middle" fill="#0F0B2A" fontSize="9" fontWeight="bold">1</text>
          </g>

          {/* Node C2 */}
          <g transform="translate(160, 125)">
            <circle r="20" fill="url(#cGrad)" stroke="#B4A7FF" strokeWidth="2.5" />
            <text x="0" y="4" textAnchor="middle" fill="#EEEDFB" fontSize="12" fontWeight="bold">CH</text>
            <circle cx="14" cy="-14" r="8" fill="#B4A7FF" />
            <text x="14" y="-11" textAnchor="middle" fill="#0F0B2A" fontSize="9" fontWeight="bold">2</text>
          </g>

          {/* Node C3 */}
          <g transform="translate(280, 125)">
            <circle r="20" fill="url(#cGrad)" stroke="#FFA8C5" strokeWidth="2.5" />
            <text x="0" y="5" textAnchor="middle" fill="#EEEDFB" fontSize="13" fontWeight="bold">C</text>
            <circle cx="14" cy="-14" r="8" fill="#FFA8C5" />
            <text x="14" y="-11" textAnchor="middle" fill="#0F0B2A" fontSize="9" fontWeight="bold">3</text>
          </g>

          {/* Node C4 */}
          <g transform="translate(280, 35)">
            <circle r="17" fill="url(#cGrad)" stroke="#5EEAD4" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">CH₃</text>
            <circle cx="12" cy="-12" r="8" fill="#5EEAD4" />
            <text x="12" y="-9" textAnchor="middle" fill="#0F0B2A" fontSize="9" fontWeight="bold">4</text>
          </g>

          {/* Node C5 */}
          <g transform="translate(400, 125)">
            <circle r="18" fill="url(#cGrad)" stroke="#FDE68A" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">CH₂</text>
            <circle cx="12" cy="-12" r="8" fill="#FDE68A" />
            <text x="12" y="-9" textAnchor="middle" fill="#0F0B2A" fontSize="9" fontWeight="bold">5</text>
          </g>

          {/* Node C6 */}
          <g transform="translate(505, 125)">
            <circle r="18" fill="url(#cGrad)" stroke="#5EEAD4" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">CH₃</text>
            <circle cx="12" cy="-12" r="8" fill="#5EEAD4" />
            <text x="12" y="-9" textAnchor="middle" fill="#0F0B2A" fontSize="9" fontWeight="bold">6</text>
          </g>

          {/* Node C7 */}
          <g transform="translate(160, 205)">
            <circle r="18" fill="url(#cGrad)" stroke="#FDE68A" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">CH₂</text>
            <circle cx="12" cy="-12" r="8" fill="#FDE68A" />
            <text x="12" y="-9" textAnchor="middle" fill="#0F0B2A" fontSize="9" fontWeight="bold">7</text>
          </g>

          {/* Node C8 */}
          <g transform="translate(280, 215)">
            <circle r="17" fill="url(#cGrad)" stroke="#5EEAD4" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">CH₃</text>
            <circle cx="12" cy="-12" r="8" fill="#5EEAD4" />
            <text x="12" y="-9" textAnchor="middle" fill="#0F0B2A" fontSize="9" fontWeight="bold">8</text>
          </g>

          {/* Node C9 */}
          <g transform="translate(75, 205)">
            <circle r="18" fill="url(#cGrad)" stroke="#FDE68A" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#EEEDFB" fontSize="11" fontWeight="bold">CH₂</text>
            <circle cx="12" cy="-12" r="8" fill="#FDE68A" />
            <text x="12" y="-9" textAnchor="middle" fill="#0F0B2A" fontSize="9" fontWeight="bold">9</text>
          </g>

          {/* Node C10 */}
          <g transform="translate(18, 205)">
            <circle r="16" fill="url(#cGrad)" stroke="#5EEAD4" strokeWidth="2" />
            <text x="0" y="4" textAnchor="middle" fill="#EEEDFB" fontSize="10" fontWeight="bold">CH₃</text>
            <circle cx="11" cy="-11" r="8" fill="#5EEAD4" />
            <text x="11" y="-8" textAnchor="middle" fill="#0F0B2A" fontSize="8" fontWeight="bold">10</text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'soal-6') {
    // Soal 6: CH3 - CH(CH3) - CH(C2H5) - CH2 - CH3
    return (
      <div className="w-full overflow-x-auto p-4 bg-[#0F0B2A]/90 border border-[#3A3280] rounded-xl flex flex-col items-center justify-center my-3">
        <div className="text-[11px] font-mono font-medium text-[#B8B5DE] mb-2 self-start flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B4A7FF] animate-pulse"></span>
          <span>Rumus Struktur Alkana Bercabang:</span>
        </div>
        <svg
          viewBox="0 0 520 180"
          className="w-full max-w-[520px] h-auto drop-shadow-md select-none font-sans"
        >
          {/* Rantai utama horizontal */}
          <line x1="50" y1="80" x2="120" y2="80" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="80" x2="230" y2="80" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="270" y1="80" x2="340" y2="80" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />
          <line x1="390" y1="80" x2="450" y2="80" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* Cabang CH3 di C2 (ke atas) */}
          <line x1="140" y1="65" x2="140" y2="35" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" />

          {/* Cabang C2H5 (CH2-CH3) di C3 (ke bawah) */}
          <line x1="250" y1="95" x2="250" y2="125" stroke="#FFA8C5" strokeWidth="2.5" strokeLinecap="round" />

          {/* Label atom C pada rantai utama */}
          <text x="30" y="86" fill="#EEEDFB" fontSize="16" fontWeight="bold">CH₃</text>
          <text x="140" y="86" textAnchor="middle" fill="#5EEAD4" fontSize="16" fontWeight="bold">CH</text>
          <text x="250" y="86" textAnchor="middle" fill="#FFA8C5" fontSize="16" fontWeight="bold">CH</text>
          <text x="365" y="86" textAnchor="middle" fill="#EEEDFB" fontSize="16" fontWeight="bold">CH₂</text>
          <text x="475" y="86" fill="#EEEDFB" fontSize="16" fontWeight="bold">CH₃</text>

          {/* Label cabang */}
          <text x="140" y="24" textAnchor="middle" fill="#5EEAD4" fontSize="15" fontWeight="bold">CH₃</text>
          <text x="250" y="148" textAnchor="middle" fill="#FFA8C5" fontSize="15" fontWeight="bold">C₂H₅</text>
          <text x="250" y="165" textAnchor="middle" fill="#B8B5DE" fontSize="11">(—CH₂—CH₃)</text>
        </svg>
      </div>
    );
  }

  if (type === 'soal-8') {
    // Soal 8: CH3 - C(CH3) = CH - CH2 - CH(C2H5) - CH3
    return (
      <div className="w-full overflow-x-auto p-4 bg-[#0F0B2A]/90 border border-[#3A3280] rounded-xl flex flex-col items-center justify-center my-3">
        <div className="text-[11px] font-mono font-medium text-[#B8B5DE] mb-2 self-start flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFA8C5] animate-pulse"></span>
          <span>Rumus Struktur Alkena Bercabang:</span>
        </div>
        <svg
          viewBox="0 0 540 190"
          className="w-full max-w-[540px] h-auto drop-shadow-md select-none font-sans"
        >
          {/* C1 - C2 */}
          <line x1="45" y1="85" x2="105" y2="85" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C2 = C3 (Ikatan Rangkap Dua) */}
          <line x1="135" y1="80" x2="200" y2="80" stroke="#FFA8C5" strokeWidth="3" strokeLinecap="round" />
          <line x1="135" y1="88" x2="200" y2="88" stroke="#FFA8C5" strokeWidth="3" strokeLinecap="round" />

          {/* C3 - C4 */}
          <line x1="235" y1="85" x2="295" y2="85" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C4 - C5 */}
          <line x1="335" y1="85" x2="395" y2="85" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C5 - C6 */}
          <line x1="435" y1="85" x2="480" y2="85" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* Cabang CH3 di C2 (ke atas) */}
          <line x1="120" y1="70" x2="120" y2="40" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" />

          {/* Cabang C2H5 di C5 (ke bawah) */}
          <line x1="415" y1="100" x2="415" y2="130" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" />

          {/* Teks rumus */}
          <text x="25" y="90" fill="#EEEDFB" fontSize="15" fontWeight="bold">CH₃</text>
          <text x="120" y="90" textAnchor="middle" fill="#FFA8C5" fontSize="16" fontWeight="bold">C</text>
          <text x="215" y="90" textAnchor="middle" fill="#FFA8C5" fontSize="16" fontWeight="bold">CH</text>
          <text x="315" y="90" textAnchor="middle" fill="#EEEDFB" fontSize="15" fontWeight="bold">CH₂</text>
          <text x="415" y="90" textAnchor="middle" fill="#FDE68A" fontSize="16" fontWeight="bold">CH</text>
          <text x="495" y="90" fill="#EEEDFB" fontSize="15" fontWeight="bold">CH₃</text>

          {/* Cabang */}
          <text x="120" y="28" textAnchor="middle" fill="#5EEAD4" fontSize="14" fontWeight="bold">CH₃</text>
          <text x="415" y="150" textAnchor="middle" fill="#FDE68A" fontSize="14" fontWeight="bold">C₂H₅</text>
          <text x="415" y="170" textAnchor="middle" fill="#B8B5DE" fontSize="11">(—CH₂—CH₃)</text>
        </svg>
      </div>
    );
  }

  if (type === 'soal-9') {
    // Soal 9: 3-metil-1-pentuna (CH3 - CH2 - CH(CH3) - C ≡ CH)
    return (
      <div className="w-full overflow-x-auto p-4 bg-[#0F0B2A]/90 border border-[#3A3280] rounded-xl flex flex-col items-center justify-center my-3">
        <div className="text-[11px] font-mono font-medium text-[#B8B5DE] mb-2 self-start flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5EEAD4] animate-pulse"></span>
          <span>Struktur 3-metil-1-pentuna:</span>
        </div>
        <svg
          viewBox="0 0 500 170"
          className="w-full max-w-[500px] h-auto drop-shadow-md select-none font-sans"
        >
          {/* C5 - C4 */}
          <line x1="55" y1="80" x2="120" y2="80" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C4 - C3 */}
          <line x1="165" y1="80" x2="230" y2="80" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C3 - C2 */}
          <line x1="270" y1="80" x2="330" y2="80" stroke="#7E72B8" strokeWidth="3" strokeLinecap="round" />

          {/* C2 ≡ C1 (Ikatan Rangkap Tiga) */}
          <line x1="355" y1="73" x2="415" y2="73" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="355" y1="80" x2="415" y2="80" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="355" y1="87" x2="415" y2="87" stroke="#5EEAD4" strokeWidth="2.5" strokeLinecap="round" />

          {/* Cabang CH3 di C3 (ke atas) */}
          <line x1="250" y1="65" x2="250" y2="35" stroke="#B4A7FF" strokeWidth="2.5" strokeLinecap="round" />

          {/* Teks rumus */}
          <text x="35" y="85" fill="#EEEDFB" fontSize="15" fontWeight="bold">CH₃</text>
          <text x="145" y="85" textAnchor="middle" fill="#EEEDFB" fontSize="15" fontWeight="bold">CH₂</text>
          <text x="250" y="85" textAnchor="middle" fill="#B4A7FF" fontSize="16" fontWeight="bold">CH</text>
          <text x="345" y="85" textAnchor="middle" fill="#5EEAD4" fontSize="16" fontWeight="bold">C</text>
          <text x="435" y="85" fill="#5EEAD4" fontSize="16" fontWeight="bold">CH</text>

          {/* Cabang */}
          <text x="250" y="24" textAnchor="middle" fill="#B4A7FF" fontSize="15" fontWeight="bold">CH₃</text>

          {/* Nomor atom C rantai utama */}
          <text x="445" y="115" textAnchor="middle" fill="#B8B5DE" fontSize="11" fontFamily="monospace">C-1</text>
          <text x="345" y="115" textAnchor="middle" fill="#B8B5DE" fontSize="11" fontFamily="monospace">C-2</text>
          <text x="250" y="115" textAnchor="middle" fill="#B8B5DE" fontSize="11" fontFamily="monospace">C-3</text>
          <text x="145" y="115" textAnchor="middle" fill="#B8B5DE" fontSize="11" fontFamily="monospace">C-4</text>
          <text x="35" y="115" textAnchor="middle" fill="#B8B5DE" fontSize="11" fontFamily="monospace">C-5</text>
        </svg>
      </div>
    );
  }

  return null;
};
