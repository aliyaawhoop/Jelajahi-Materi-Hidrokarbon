/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Sticky Navigation Bar & Mobile Bottom Navigation Bar
 * Header (Desktop): Beranda | Materi | Latihan Soal | Penilaian Diri | Tentang
 * Bottom Nav (Mobile): Beranda | Materi | Latihan | Penilaian | Tentang
 */

import React from 'react';
import { Home, BookOpen, Award, CheckSquare, Info, Atom, Compass } from 'lucide-react';

export type NavTab = 'beranda' | 'materi' | 'latihan-soal' | 'penilaian-diri' | 'tentang';

interface NavbarProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onStartExplore?: () => void;
}

interface NavItemConfig {
  id: NavTab;
  desktopLabel: string;
  mobileLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onTabChange }) => {
  const navItems: NavItemConfig[] = [
    { id: 'beranda', desktopLabel: 'Beranda', mobileLabel: 'Beranda', icon: Home },
    { id: 'materi', desktopLabel: 'Materi', mobileLabel: 'Materi', icon: BookOpen },
    { id: 'latihan-soal', desktopLabel: 'Latihan Soal', mobileLabel: 'Latihan', icon: Award },
    { id: 'penilaian-diri', desktopLabel: 'Penilaian Diri', mobileLabel: 'Penilaian', icon: CheckSquare },
    { id: 'tentang', desktopLabel: 'Tentang', mobileLabel: 'Tentang', icon: Info }
  ];

  const handleNavClick = (tab: NavTab) => {
    onTabChange(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. TOP HEADER (Sticky on both mobile & desktop) */}
      <header className="sticky top-0 z-40 w-full bg-[#0F0B2A]/90 backdrop-blur-md border-b border-[#3A3280]/60 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-2.5 text-left group cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label="Kembali ke Beranda"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1E1850] border border-[#3A3280] flex items-center justify-center text-[#5EEAD4] group-hover:border-[#5EEAD4] transition-colors">
              <Atom className="w-4 h-4 animate-star-1" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#EEEDFB] group-hover:text-[#5EEAD4] transition-colors">
                Dunia Hidrokarbon
              </span>
              <span className="text-[10px] text-[#B8B5DE] leading-none">
                Kimia SMA/MA Kelas XI
              </span>
            </div>
          </button>

          {/* Navigation Links (Tablet & Desktop: lg:flex) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition-colors cursor-pointer text-sm ${
                    isActive
                      ? 'bg-[#1E1850] text-[#5EEAD4] font-bold border border-[#5EEAD4]/40 shadow-sm'
                      : 'text-[#B8B5DE] hover:text-[#EEEDFB] hover:bg-[#1E1850]/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.desktopLabel}
                </button>
              );
            })}
          </nav>

          {/* Quick Action (Tablet & Desktop) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                if (currentTab !== 'beranda') {
                  onTabChange('beranda');
                  setTimeout(() => {
                    const el = document.getElementById('deret-homolog');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  const el = document.getElementById('deret-homolog');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#A99CFF] text-[#0F0B2A] rounded-xl text-xs sm:text-sm font-bold hover:bg-[#9889FC] transition-all cursor-pointer whitespace-nowrap min-h-[36px]"
            >
              <Compass className="w-4 h-4" />
              <span>Eksplor Deret</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MOBILE BOTTOM NAVIGATION BAR (Sticky at bottom for mobile screens) */}
      <nav
        aria-label="Navigasi Utama Mobile"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F0B2A]/95 backdrop-blur-md border-t border-[#3A3280] shadow-[0_-4px_20px_rgba(0,0,0,0.5)] px-2 pb-[env(safe-area-inset-bottom,0px)]"
      >
        <div className="max-w-md mx-auto flex items-center justify-around h-16">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex-1 flex flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all cursor-pointer relative ${
                  isActive
                    ? 'text-[#5EEAD4] font-bold bg-[#1E1850]/80'
                    : 'text-[#B8B5DE] hover:text-[#EEEDFB]'
                }`}
                aria-current={isActive ? 'page' : undefined}
                aria-label={item.desktopLabel}
              >
                {/* Active indicator bar on top of icon */}
                {isActive && (
                  <span className="absolute top-0 w-8 h-1 rounded-full bg-[#5EEAD4] -mt-1 shadow-[0_0_8px_#5EEAD4]" />
                )}
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 text-[#5EEAD4]' : 'text-[#B8B5DE]'
                  }`}
                />
                <span className="text-xs tracking-tight mt-0.5 leading-none">
                  {item.mobileLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
