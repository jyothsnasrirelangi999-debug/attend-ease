import React, { useState } from 'react';
import { Menu, X, Users, LogIn } from 'lucide-react';

interface NavbarProps {
  activeView: 'home' | 'developers';
  onNavigate: (view: 'home' | 'developers', sectionId?: string) => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  onOpenLogin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#100812]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-17 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <button
          onClick={() => onNavigate('home', 'hero')}
          className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF702E] rounded-lg"
          aria-label="AttendEase Home"
        >
          <img
            src="/logo.png"
            alt="AttendEase Logo"
            className="w-8 h-8 rounded-lg object-contain shadow-sm"
          />
          <div className="flex flex-col text-left">
            <span className="text-lg font-bold tracking-tight text-white leading-tight">
              Attend<span className="text-[#FF702E]">Ease</span>
            </span>
            <span className="text-[10px] text-[#B8ACB8] hidden sm:inline leading-none font-medium">
              SRKR Engineering College
            </span>
          </div>
        </button>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <button
            onClick={() => onNavigate('home', 'hero')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              activeView === 'home'
                ? 'text-[#FF702E] font-semibold'
                : 'text-[#B8ACB8] hover:text-white'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('home', 'workflow')}
            className="text-[#B8ACB8] hover:text-white transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Workflow
          </button>

          <button
            onClick={() => onNavigate('home', 'features')}
            className="text-[#B8ACB8] hover:text-white transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Features
          </button>

          <button
            onClick={() => onNavigate('developers')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 flex items-center gap-1.5 ${
              activeView === 'developers'
                ? 'text-[#FF702E] font-semibold'
                : 'text-[#B8ACB8] hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-[#FF702E]" />
            <span>Developers</span>
          </button>
        </nav>

        {/* Action Zone - Desktop */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenLogin}
            className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#FF702E] to-[#FF914D] hover:opacity-95 shadow-md shadow-[#FF702E]/25 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign In to Portal</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenLogin}
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#FF702E] rounded-lg"
          >
            Login
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#B8ACB8] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF702E] rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#160D18] px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('home', 'hero');
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#B8ACB8] hover:bg-white/5 hover:text-white"
          >
            Home
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('home', 'workflow');
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#B8ACB8] hover:bg-white/5 hover:text-white"
          >
            How AttendEase Works
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('home', 'features');
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#B8ACB8] hover:bg-white/5 hover:text-white"
          >
            Key Features
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('developers');
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#B8ACB8] hover:bg-white/5 hover:text-white flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-[#FF702E]" />
            <span>Meet The Developers</span>
          </button>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 text-xs font-bold text-center text-white bg-gradient-to-r from-[#FF702E] to-[#FF914D] rounded-xl shadow-md"
            >
              Sign In to Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
