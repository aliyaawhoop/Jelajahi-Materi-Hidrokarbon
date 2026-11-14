/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Footer Komponen Jelajahi Dunia Hidrokarbon
 */

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0F0B2A] border-t border-[#3A3280]/60 mt-12 sm:mt-16 pt-8 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:pb-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-center text-center">
        <p className="text-center text-xs text-[#B8B5DE] tracking-wide">
          Dibuat oleh Mahasiswa UM Mengajar 2026
        </p>
      </div>
    </footer>
  );
};
