import React from 'react';
import { Users, ExternalLink, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'developers', sectionId?: string) => void;
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLogin }) => {
  return (
    <footer className="py-8 bg-[#100812] border-t border-white/10 text-xs text-[#B8ACB8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left branding */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="AttendEase"
            className="w-5 h-5 rounded-md object-contain"
          />
          <span className="font-bold text-white">AttendEase</span>
          <span>•</span>
          <span>SRKR Engineering College</span>
        </div>

        {/* Right Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-5 font-medium">
          <button
            onClick={() => onNavigate('developers')}
            className="text-[#FF702E] hover:text-[#FF914D] font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meet The Developers</span>
          </button>

          <button
            onClick={onOpenLogin}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Portal Login
          </button>

          <a
            href="https://github.com/gowthamkrishna27/AttendEase"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-[#B8ACB8]" />
          </a>
        </div>
      </div>
    </footer>
  );
};
