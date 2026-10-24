import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Trash2,
  Sparkles,
  Bot,
  User,
  ArrowRight
} from 'lucide-react';
import { ChatMessage } from '../types/attendance';

export const AIChatDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        '👋 Hi! I am the AttendEase AI Support Assistant for SRKR Engineering College. Ask me anything about student permissions, period attendance, WhatsApp exports, or portal features!',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    'How do students apply for duty-leave / permissions?',
    'How does Faculty mark attendance?',
    'What is the HOD Direct Exemption feature?',
    'How can I export attendance to WhatsApp?',
    'Who built AttendEase?',
  ];

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('duty-leave') || q.includes('permission') || q.includes('apply')) {
      return "Students can log in to the Student Portal, click 'New Permission Request', select their date, period(s) (P1 to P8), reason category (e.g. Hackathon, Sports, Medical, NSS), and upload required proof documents. Once submitted, it automatically routes to their assigned Faculty Advisor for approval.";
    }
    if (q.includes('faculty') || q.includes('mark') || q.includes('period')) {
      return "Faculty members sign in to the Faculty Portal, select the Year and Target Section (e.g. CSIT-B or CSD), select the active period (P1 to P8), and tap student roll numbers to mark them Present or Absent. Approved duty-leave permissions automatically highlight in yellow so faculty do not mark them absent by mistake.";
    }
    if (q.includes('hod') || q.includes('exemption') || q.includes('bulk')) {
      return "The HOD Direct Exemption feature allows Head of Departments to grant instant bulk attendance exemptions to multiple students directly for academic events, hackathons, sports tournaments, or college duties without requiring individual student submissions.";
    }
    if (q.includes('whatsapp') || q.includes('export')) {
      return "Tap 'WhatsApp Report' on any active classroom session. AttendEase automatically generates formatted presentees, absentees, and yellow-highlighted duty exemptions with Date and Time stamp, ready to share directly into WhatsApp class groups!";
    }
    if (q.includes('developer') || q.includes('who built') || q.includes('team') || q.includes('gowtham')) {
      return "AttendEase was created by students from the Department of CSIT & CSD at SRKR Engineering College: Chundru Gowtham Krishna (System Architect & Full-Stack Engineer), Chandani Vivekananda (Full-Stack Developer), Pavan Ketha (Frontend Developer), and Kesanakurthi Manasa Satya (UI/UX Specialist).";
    }
    return `AttendEase is a smart digital attendance and student permission management platform built specifically for SRKR Engineering College. You can manage multi-period rosters (P1-P8), track student duty-leaves with yellow highlighting, export to WhatsApp, and authenticate via passwords, PIN codes, or biometric passkeys!`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAnswer(text);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Action Button with pulsing orange indicator */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-[#FF702E] to-[#FF914D] text-white shadow-xl shadow-[#FF702E]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
            title="Open AttendEase AI Chat"
            aria-label="Open AttendEase AI Chat"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF914D] opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FF702E] border-2 border-[#100812]" />
            </span>
          </button>
        </div>
      )}

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <aside
          role="complementary"
          aria-label="AttendEase AI Assistant"
          className="fixed bottom-3.5 right-3.5 z-50 w-[calc(100vw-28px)] sm:w-[410px] h-[540px] max-h-[85vh] rounded-3xl bg-[#1A101C] border border-[#FF702E]/30 shadow-2xl shadow-black/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="px-5 py-3.5 bg-[#140B16] border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF702E] to-[#FF914D] flex items-center justify-center text-white shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white leading-tight">
                  AttendEase AI Chat
                </h3>
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SRKR Knowledge Assistant
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setMessages([
                    {
                      role: 'assistant',
                      content:
                        '👋 Conversation cleared. What would you like to know about AttendEase or SRKR attendance workflows?',
                    },
                  ])
                }
                className="p-1.5 rounded-lg text-[#B8ACB8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Clear conversation"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#B8ACB8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((msg, index) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={index}
                  className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-6 h-6 rounded-lg bg-[#211722] border border-white/10 flex items-center justify-center text-[#FF702E] shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl ${
                      isUser
                        ? 'bg-gradient-to-r from-[#FF702E] to-[#FF914D] text-white rounded-tr-xs'
                        : 'bg-[#211722] text-[#B8ACB8] border border-white/10 rounded-tl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-xs text-[#B8ACB8]">
                <div className="w-6 h-6 rounded-lg bg-[#211722] flex items-center justify-center text-[#FF702E]">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#211722] border border-white/10 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF702E] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF702E] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF702E] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          <div className="px-4 py-2 bg-[#140B16] border-t border-white/5 flex gap-1.5 overflow-x-auto shrink-0">
            {quickPrompts.map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#211722] hover:bg-[#281c29] text-[#B8ACB8] hover:text-white border border-white/10 whitespace-nowrap transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#1A101C] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask AttendEase AI..."
              className="flex-1 bg-[#211722] text-white text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF702E]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#FF702E] to-[#FF914D] text-white disabled:opacity-50 transition-all cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </aside>
      )}
    </>
  );
};
