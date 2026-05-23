import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Sparkles, Building2, MapPin, Loader2, CheckCircle2, Check, 
  Mail, Phone, ShieldCheck, TicketCheck, ArrowRight, Compass 
} from 'lucide-react';
import { industries } from '../data';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndustryId?: string;
  initialSelectedFeatures?: string[];
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialIndustryId = "contracting",
  initialSelectedFeatures = []
}) => {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState("");
  const [selectedIndustryId, setSelectedIndustryId] = useState(initialIndustryId);
  const [zipCode, setZipCode] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [smsNumber, setSmsNumber] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  // Terminal logging state
  const [logsList, setLogsList] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);
  const [isCompiling, setIsCompiling] = useState(false);

  // Sync initial parameters when modal transitions or opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setBusinessName("");
      setZipCode("");
      setEmailAddress("");
      setSmsNumber("");
      setLogsList([]);
      setLogIndex(0);
      setIsCompiling(false);
      setSelectedIndustryId(initialIndustryId);
      // Generate a new random 5 digit ticket code
      setConfirmationCode(`BLD-${Math.floor(Math.random() * 89999 + 10000)}`);
    }
  }, [isOpen, initialIndustryId]);

  const selectedIndustryName = industries.find(i => i.id === selectedIndustryId)?.name || "Local Service";

  // Compilation steps
  const compilationLogs = [
    "[SYSTEM] Connecting to Google Lighthouse API server...",
    `[DISPATCH] Analyzing search volume for "${selectedIndustryName}" in ZIP: ${zipCode}...`,
    "[INFO] Average competitor page-load speed: 3.8s (Wix/Wordpress baseline)",
    "[BENCHMARK] Competitor mobile bounce rate: 64% due to poor formatting",
    "[SEO] Injecting custom BLODES JSON-LD schema microdata for localized rankings...",
    "[INTEGRATION] Pre-compiling static asset routes with Vite bundler...",
    `[BUILD] Designing interactive user experience blueprint for "${businessName}"...`,
    "[SUCCESS] 100/100 Mobile Speed Frame draft generated!"
  ];

  // Streaming logs interval loop
  useEffect(() => {
    if (!isCompiling || step !== 2) return;

    if (logIndex < compilationLogs.length) {
      const delay = logIndex === 0 ? 300 : Math.round(500 + Math.random() * 400); // realistic variance
      const timer = setTimeout(() => {
        setLogsList(prev => [...prev, compilationLogs[logIndex]]);
        setLogIndex(logIndex + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsCompiling(false);
        setStep(3);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isCompiling, logIndex, step]);

  const handleMeTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      alert("Please enter your business name.");
      return;
    }
    if (!zipCode.trim()) {
      alert("Please enter your local city or zip code.");
      return;
    }
    setStep(2);
    setIsCompiling(true);
    setLogsList([]);
    setLogIndex(0);
  };

  const handleHeTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailAddress.trim() || !smsNumber.trim()) {
      alert("Please fill out your contact details so we can deliver your custom blueprint.");
      return;
    }
    setStep(4);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Main modal frame container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950 p-6 md:p-8 shadow-2xl z-10 text-white flex flex-col gap-4">
        
        {/* Modal Header bar */}
        <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
              BLODES Instant Sandbox Studio
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps and Form */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white flex items-center gap-1.5 leading-tight font-display">
                  <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                  Request Free Custom Layout Draft
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  We don't send template PDFs. Give us 24 hours and our team will build you an actual, interactive, custom desktop/mobile mockup of your primary landing page for free.
                </p>
              </div>

              <form onSubmit={handleMeTrigger} className="flex flex-col gap-3 mt-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-300">Your Business Name *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oak Creek Kitchens & Cabinets"
                      value={businessName}
                      onChange={e => setBusinessName(e.target.value)}
                      className="w-full bg-zinc-900/60 border border-zinc-850 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-550 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-zinc-300">Industry Category</label>
                    <select
                      value={selectedIndustryId}
                      onChange={e => setSelectedIndustryId(e.target.value)}
                      className="w-full bg-zinc-900/60 border border-zinc-850 rounded-xl py-3 px-3 text-xs text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    >
                      {industries.map(ind => (
                        <option key={ind.id} value={ind.id} className="bg-zinc-950 text-white">
                          {ind.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-zinc-300">Target Zip / City *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-3.5 h-3.5 text-zinc-500" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Boise, ID or 83702"
                        value={zipCode}
                        onChange={e => setZipCode(e.target.value)}
                        className="w-full bg-zinc-900/60 border border-zinc-850 rounded-xl py-3 pl-9 pr-3 text-xs text-white placeholder-zinc-550 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 py-4 bg-emerald-500 hover:bg-emerald-450 text-zinc-950 font-sans font-bold text-sm tracking-wide rounded-2xl cursor-pointer shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2"
                >
                  <span>Trigger SEO & Layout Compiler</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex flex-col gap-4 py-8 items-center justify-center text-center font-sans animate-fade-in"
            >
              <div className="relative w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-2">
                <Loader2 
                  className="w-8 h-8 text-emerald-400 animate-spin" 
                  style={{ animationDuration: "2.5s" }}
                />
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
              </div>

              <h3 className="text-lg font-bold tracking-tight text-white leading-tight">
                Evaluating Competitor Landscape...
              </h3>
              <p className="text-xs text-zinc-400 max-w-sm">
                Compiles search keywords, diagnostic speed rankings, and semantic microdata tags matching <span className="text-white font-medium">"{businessName}"</span>.
              </p>

              {/* Terminal Logs container output */}
              <div className="w-full text-left bg-zinc-900 border border-zinc-850 p-4 rounded-xl font-mono text-[10px] text-zinc-350 h-44 overflow-y-auto flex flex-col gap-1.5 shadow-inner">
                {logsList.map((log, index) => {
                  let colorClass = "text-zinc-400";
                  if (log.startsWith("[SUCCESS]")) colorClass = "text-emerald-400 font-semibold";
                  if (log.startsWith("[SYSTEM]")) colorClass = "text-teal-300 font-bold";
                  if (log.startsWith("[INFO]")) colorClass = "text-amber-400";
                  if (log.startsWith("[DISPATCH]")) colorClass = "text-blue-300";
                  if (log.startsWith("[SEO]")) colorClass = "text-purple-300";
                  return (
                    <div key={index} className={`${colorClass} animate-fade-in`}>
                      {log}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col text-center items-center py-2">
                <div className="w-11 h-11 rounded-full bg-emerald-500/10 text-emerald-405 border border-emerald-500/20 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6 stroke-[2px] text-emerald-400" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                  Pre-compiled Draft Ready!
                </h3>
                <p className="text-xs text-zinc-400 mt-1 max-w-sm leading-relaxed">
                  We compiled an organic search outline for <span className="text-white font-semibold">"{businessName}"</span> in city sector ZIP <span className="text-white font-mono">{zipCode}</span>. Secure your digital layout!
                </p>
              </div>

              <form onSubmit={handleHeTrigger} className="flex flex-col gap-3 mt-1">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-300">Your Work Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@yourdomain.com"
                      value={emailAddress}
                      onChange={e => setEmailAddress(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-850 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-zinc-550 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-300">SMS / Cell Number for Delivery *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (208) 555-0199"
                      value={smsNumber}
                      onChange={e => setSmsNumber(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-850 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-zinc-550 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                    />
                  </div>
                  <span className="text-[10px] text-zinc-550 leading-normal mt-0.5">
                    We will text you a private mobile sandbox URL link so you can preview the fully active mock preview directly on your smartphone screen in 24 hours.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 py-4 bg-emerald-500 hover:bg-emerald-450 text-zinc-950 font-sans font-bold text-sm tracking-wide rounded-2xl cursor-pointer shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Reserve Core Draft Allocation</span>
                </button>
              </form>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-4 text-center items-center py-4"
            >
              <div className="relative mb-1">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Check className="w-8 h-8 stroke-[3.5px]" />
                </div>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <h3 className="text-xl font-bold tracking-tight text-white leading-tight">
                  Draft Successfully Reserved!
                </h3>
                <p className="text-xs tracking-wide text-emerald-400 font-mono font-semibold uppercase">
                  CONFIRMATION CODE: {confirmationCode}
                </p>
                <p className="text-xs text-zinc-300 max-w-sm mt-1.5 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{businessName}</span>! Our web engineers have allocated the template drafts and color presets matching your brand profile.
                </p>

                <p className="text-[11px] text-zinc-550 max-w-sm leading-relaxed mt-1 border-t border-zinc-900 pt-3">
                  We are preparing a fully responsive, custom-coded web interface. One of our lead developers will reach out via <span className="text-zinc-300 font-medium">{emailAddress}</span> or SMS text at <span className="text-zinc-300 font-medium">{smsNumber}</span> to request high-res assets or review listings.
                </p>
              </div>

              <div className="w-full mt-3 bg-zinc-900 border border-zinc-850 p-4 rounded-xl flex flex-col gap-2 text-left">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                  NEXT IMMEDIATE STEPS:
                </span>
                <div className="flex items-start gap-2 text-xs text-zinc-300">
                  <span className="text-emerald-400 font-bold shrink-0">1.</span>
                  <span>Check your spam folder in 15 mins for our automatic local competitor breakdown.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-300">
                  <span className="text-emerald-400 font-bold shrink-0">2.</span>
                  <span>Locate high-res photos of your latest completed work (or menus, price indices).</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full mt-3 py-3 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 font-sans font-bold text-xs rounded-xl cursor-pointer"
              >
                Return to Live Showroom
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default LeadModal;
