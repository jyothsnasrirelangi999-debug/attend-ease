import React from 'react';
import { KeyRound, Sparkles, Clock, MessageCircle, ArrowRight } from 'lucide-react';

export const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: KeyRound,
      title: 'Flexible Login & Security',
      description: 'Sign in with password, 4-digit PIN code, or registered biometric passkeys (Touch ID, Face ID, Windows Hello).',
      badgeColor: 'text-[#FF702E]',
    },
    {
      icon: Sparkles,
      title: 'Instant Permission Sync',
      description: 'Approved duty-leave requests auto-highlight students in yellow across faculty attendance rosters and session summaries.',
      badgeColor: 'text-amber-400',
    },
    {
      icon: Clock,
      title: 'Period-Wise Selection',
      description: 'Multi-period selection (P1-P8) allows faculty and representatives to inspect specific periods or combined session attendance.',
      badgeColor: 'text-[#FF914D]',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Formatting',
      description: 'Format presentees and absentees automatically with Date and Time stamp, ready to share directly into WhatsApp groups.',
      badgeColor: 'text-emerald-400',
    },
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Key Features
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#B8ACB8] text-balance">
          Engineered specifically for SRKR Engineering College departmental workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#211722] border border-white/10 hover:border-[#FF702E]/40 hover:bg-[#281c29] transition-all duration-300 shadow-lg shadow-black/40 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-11 h-11 rounded-xl bg-[#1A101C] border border-white/10 flex items-center justify-center ${item.badgeColor} group-hover:scale-105 transition-transform mb-5`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#FF914D] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#B8ACB8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#FF702E] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                <span>AttendEase Core</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
