import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hammer, Wrench, Stethoscope, Utensils, Scale, Home, Zap, Target, TrendingUp, HeartHandshake,
  Check, Sparkles, MapPin, Loader2, Cpu, Eye, Layout, ShieldAlert
} from 'lucide-react';
import { Industry, AddOnFeature } from '../types';
import { industries, addOns } from '../data';

const IconMap: { [key: string]: any } = {
  Hammer, Wrench, Stethoscope, Utensils, Scale, Home, Zap, Target, TrendingUp, HeartHandshake,
  Check, Sparkles, MapPin, Loader2, Cpu, Eye, Layout, ShieldAlert
};

interface SandboxSimulatorProps {
  onUnlockMockup: (industryId: string, selectedFeatures: string[]) => void;
}

export const SandboxSimulator: React.FC<SandboxSimulatorProps> = ({ onUnlockMockup }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industries[0]);
  const [dominanceFactor, setDominanceFactor] = useState(85);
  const [actionVolume, setActionVolume] = useState(3);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["local_seo", "before_after"]);
  const [colorTheme, setColorTheme] = useState<"emerald" | "amber" | "blue">("emerald");
  const [aestheticVibe, setAestheticVibe] = useState<"minimal" | "playful">("minimal");

  const handleIndustryChange = (ind: Industry) => {
    setSelectedIndustry(ind);
    if (ind.id === "restaurant") {
      setActionVolume(20);
      setDominanceFactor(90);
    } else if (ind.id === "hvac_plumbing") {
      setActionVolume(8);
      setDominanceFactor(85);
    } else {
      setActionVolume(3);
      setDominanceFactor(75);
    }
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Memoized math formulations exactly matching BLODES analytics estimations
  const metrics = useMemo(() => {
    const monthlyVisits = Math.round(actionVolume * (dominanceFactor * 3.8));
    const annuallyExtraVisits = Math.round(monthlyVisits * 12);
    const speedRank = Math.min(100, Math.round(91 + (selectedFeatures.includes("local_seo") ? 8 : 4)));
    const authorityMultiplier = Math.round((dominanceFactor / 10 * (1.2 + selectedFeatures.length * 0.45)) * 10) / 10;
    
    return {
      monthlyVisits,
      annuallyExtraVisits,
      speedRank,
      authorityMultiplier
    };
  }, [selectedIndustry, dominanceFactor, actionVolume, selectedFeatures]);

  // Color styling mapping
  const activeColorClasses = {
    emerald: "text-emerald-400 border-emerald-500 bg-emerald-500/10",
    amber: "text-amber-400 border-amber-500 bg-amber-500/10",
    blue: "text-blue-400 border-blue-500 bg-blue-500/10"
  };

  const primaryAccentHex = {
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    blue: "text-blue-400"
  };

  return (
    <div id="sandbox-simulator" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
      {/* Left controls column */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        
        {/* Step 1: Industry selection */}
        <div className="bg-zinc-950/45 p-6 rounded-2xl border border-zinc-900/90 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-sm border border-emerald-500/25">
              1
            </span>
            <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
              Select Your Local Business Industry
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {industries.map(ind => {
              const isSelected = selectedIndustry.id === ind.id;
              const IconComp = IconMap[ind.icon] || Hammer;
              return (
                <button
                  key={ind.id}
                  onClick={() => handleIndustryChange(ind)}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                    isSelected 
                      ? "bg-zinc-900 border-zinc-700 ring-2 ring-emerald-500 text-white shadow-lg" 
                      : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-zinc-800 hover:text-zinc-200"
                  }`}
                >
                  <div className={`p-1.5 rounded-lg mb-2 ${isSelected ? "text-emerald-400 bg-emerald-500/10" : "text-zinc-500"}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {ind.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Slider Calibration objectives */}
        <div className="bg-zinc-950/45 p-6 rounded-2xl border border-zinc-900/90 flex flex-col gap-5 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-sm border border-emerald-500/25">
              2
            </span>
            <h3 className="text-base sm:text-lg font-medium text-white tracking-tight">
              Calibrate Your Specific Search Target Objectives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dominance percentage */}
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">Target Local Dominance Factor</span>
                <span className="text-emerald-400 font-mono font-bold text-lg">{dominanceFactor}% Match</span>
              </div>
              <input
                type="range"
                min={30}
                max={100}
                step={5}
                value={dominanceFactor}
                onChange={e => setDominanceFactor(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <span className="text-[11px] text-zinc-500 font-mono leading-tight">
                Target ratio of high-intent search terms dominated in your local radius.
              </span>
            </div>

            {/* Incremental conversion actions volume limit */}
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-baseline">
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">Target Action Volume Target</span>
                <span className="text-emerald-400 font-mono font-bold text-lg">
                  +{actionVolume} actions / mo
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={selectedIndustry.id === "restaurant" ? 120 : 15}
                step={1}
                value={actionVolume}
                onChange={e => setActionVolume(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <span className="text-[11px] text-zinc-500 font-mono leading-tight">
                Goal for incremental high-intent reservations/bids submitted via your web infrastructure.
              </span>
            </div>
          </div>
        </div>

        {/* Step 3: Enhance conversions feature stack */}
        <div className="bg-zinc-950/45 p-6 rounded-2xl border border-zinc-900/90 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-sm border border-emerald-500/25">
              3
            </span>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg font-medium text-white tracking-tight leading-tight">
                Enhance Blueprint Conversion Channels
              </h3>
              <span className="text-[11px] sm:text-xs text-zinc-500 mt-0.5">
                Enable features below to transform your wireframe structure instantly.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 max-h-[350px] overflow-y-auto pr-1">
            {addOns.map(feature => {
              const isActive = selectedFeatures.includes(feature.id);
              return (
                <div
                  key={feature.id}
                  onClick={() => toggleFeature(feature.id)}
                  className={`flex items-start gap-4 p-3.5 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                    isActive 
                      ? "bg-zinc-900/60 border-emerald-500/40 text-white shadow-[0_2px_12px_rgba(16,185,129,0.06)]" 
                      : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-zinc-850 hover:bg-zinc-900/10"
                  }`}
                >
                  <div className="mt-1 flex items-center justify-center">
                    <div className={`w-4.5 h-4.5 rounded border flex items-center justify-center transition-colors ${
                      isActive ? "bg-emerald-500 border-emerald-500 text-zinc-950" : "border-zinc-700"
                    }`}>
                      {isActive && <Check className="w-3 h-3 stroke-[3px]" />}
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className={`text-xs sm:text-sm font-semibold ${isActive ? "text-white" : "text-zinc-300"}`}>
                        {feature.label}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/10 px-2 py-0.5 rounded uppercase tracking-wider shrink-0 text-right">
                        +${feature.priceEstimate} value
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-zinc-500 font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Right sticky results visualization column */}
      <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
        
        {/* Scorecard panel */}
        <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-2xl border border-zinc-850 shadow-2xl flex flex-col gap-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col gap-1">
            <span className="text-[10px] sm:text-[11px] tracking-widest text-emerald-400 font-mono font-semibold uppercase">
              Target Blueprint Metrics Exposure Projections
            </span>
            <h4 className="text-base sm:text-lg font-medium text-white tracking-tight">
              Organic Search Engagement Index
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-950/40 p-4 rounded-xl border border-zinc-900 flex flex-col gap-0.5">
              <span className="text-[11px] text-zinc-500 font-mono uppercase">Monthly Ingest</span>
              <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-1">
                +{metrics.monthlyVisits.toLocaleString()} visits
              </span>
              <span className="text-[10px] text-zinc-500 mt-1 leading-tight">
                Hyper-targeted local views
              </span>
            </div>
            
            <div className="bg-zinc-950/40 p-4 rounded-xl border border-zinc-900 flex flex-col gap-0.5">
              <span className="text-[11px] text-zinc-500 font-mono uppercase">Annualized Reach</span>
              <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-1">
                +{metrics.annuallyExtraVisits.toLocaleString()} views
              </span>
              <span className="text-[10px] text-emerald-400 leading-tight mt-1 flex items-center gap-1 font-mono font-medium">
                <TrendingUp className="w-3.5 h-3.5" /> Sustained Traffic
              </span>
            </div>
          </div>

          <div className="bg-zinc-950/80 p-4 rounded-xl border border-emerald-500/10 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-white font-medium">Core Performance Rank</span>
              <span className="text-[10px] text-zinc-500">Static compiled speed indexing code grade</span>
            </div>
            <div className="text-right">
              <span className="text-sm sm:text-base font-bold font-mono text-emerald-400">
                Score: {metrics.speedRank}/100
              </span>
              <span className="text-[10px] text-zinc-400 block font-mono">Optimum Load Pass</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs px-1 font-mono text-zinc-400 border-t border-zinc-900/50 pt-4">
            <span>Aggregated Reach Multiplier</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/10">
              {metrics.authorityMultiplier}x Power Factor
            </span>
          </div>
        </div>

        {/* Live Visual wireframe viewport mockup */}
        <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-900 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h4 className="text-[10px] sm:text-xs tracking-widest text-zinc-400 font-mono font-semibold uppercase flex items-center gap-1.5">
              <Layout className="w-3.5 h-3.5 text-zinc-400" />
              Blueprint: {selectedIndustry.name}
            </h4>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/15 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Wireframe Mock
            </span>
          </div>

          {/* Wireframe simulated screen mockup */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 flex flex-col gap-3 font-mono text-[10px]">
            {/* Mock Header navbar */}
            <div className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-2 rounded-lg text-zinc-300">
              <span className="font-bold text-emerald-400 flex items-center gap-1">
                BL<span className="text-emerald-400">O</span>DES.co/Client
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded bg-amber-500/20 border border-amber-500/30 block shrink-0" />
                <span className="px-2 py-0.5 bg-emerald-500 text-zinc-950 rounded-[4px] font-bold font-sans text-[9px] uppercase tracking-wide">
                  Call Now
                </span>
              </div>
            </div>

            {/* Mock Hero content banner */}
            <div className="bg-zinc-900/35 border border-dashed border-zinc-800 p-4 rounded-lg flex flex-col gap-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/3 to-transparent"></div>
              
              <div className="font-bold text-white text-[11px] leading-tight flex items-start gap-1">
                {React.createElement(IconMap[selectedIndustry.icon] || Hammer, { className: "w-3.5 h-3.5 text-emerald-400 inline shrink-0 mt-0.5" })}
                <span>{selectedIndustry.heroText}</span>
              </div>
              <p className="text-zinc-500 text-[9px] leading-tight font-sans">
                Compelling custom micro-copy and local authority indicators targeting your core zip codes.
              </p>
              
              <div className="flex gap-2 mt-1">
                <div className="flex-1 bg-emerald-500/15 border border-emerald-500/20 py-1 rounded text-center text-emerald-400 text-[9px] font-bold">
                  ⚡ Schedule Instantly
                </div>
                <div className="flex-1 bg-zinc-805 border border-zinc-700 py-1 rounded text-center text-zinc-350 text-[9px]">
                  View Success Gallery
                </div>
              </div>
            </div>

            {/* Feature Module block: active if before_after checkbox checked */}
            <AnimatePresence>
              {selectedFeatures.includes("before_after") && (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-emerald-950/20 border border-emerald-500/25 p-3 rounded-lg text-[9px] flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-300 font-bold flex items-center gap-1 font-mono">
                      <Zap className="w-3 h-3 text-emerald-400 animate-pulse" />
                      Before & After Slider Module
                    </span>
                    <span className="text-[8px] bg-emerald-500/10 text-emerald-300 px-1.5 py-0.2 rounded font-sans uppercase">Active</span>
                  </div>
                  <div className="h-5 bg-zinc-950 rounded border border-zinc-800 flex items-center justify-center text-zinc-500 font-sans">
                    Slide handle horizontally to reveal craft quality
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Form block */}
            <div className="bg-zinc-900/35 p-3 rounded-lg border border-zinc-800/70 flex flex-col gap-2">
              <span className="text-zinc-300 font-bold font-sans">Submit Proposal Request</span>
              <div className="h-4 bg-zinc-900 border border-zinc-800 rounded flex items-center px-1.5 text-zinc-500 text-[8px]">
                Name/Business name...
              </div>
              <div className="h-4 bg-zinc-900 border border-zinc-800 rounded flex items-center px-1.5 text-zinc-500 text-[8px]">
                Phone / SMS...
              </div>
            </div>
          </div>

          {/* Theme customizer tools */}
          <div className="border-t border-zinc-900 pt-4 flex flex-col sm:flex-row gap-4 justify-between items-start md:items-center">
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
                Theme Accent Profile:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setColorTheme("emerald")}
                  className={`w-5 h-5 rounded-full bg-emerald-500 border-2 transition-transform ${
                    colorTheme === "emerald" ? "border-white scale-110" : "border-transparent opacity-80"
                  }`}
                  title="Vibrant Emerald / Growth"
                />
                <button
                  onClick={() => setColorTheme("amber")}
                  className={`w-5 h-5 rounded-full bg-amber-500 border-2 transition-transform ${
                    colorTheme === "amber" ? "border-white scale-110" : "border-transparent opacity-80"
                  }`}
                  title="Warm Bronze / Wood tones"
                />
                <button
                  onClick={() => setColorTheme("blue")}
                  className={`w-5 h-5 rounded-full bg-blue-500 border-2 transition-transform ${
                    colorTheme === "blue" ? "border-white scale-110" : "border-transparent opacity-80"
                  }`}
                  title="Hyper-Dispatch Blue & Slate"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
                Aesthetic Vibe:
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setAestheticVibe("minimal")}
                  className={`text-[9px] px-2 py-1 rounded font-mono border transition-all ${
                    aestheticVibe === "minimal" 
                      ? "bg-white text-zinc-950 border-white font-bold shadow" 
                      : "bg-transparent text-zinc-400 border-zinc-800 hover:text-zinc-305"
                  }`}
                >
                  Clean Minimalist
                </button>
                <button
                  onClick={() => setAestheticVibe("playful")}
                  className={`text-[9px] px-2 py-1 rounded font-mono border transition-all ${
                    aestheticVibe === "playful" 
                      ? "bg-white text-zinc-950 border-white font-bold shadow" 
                      : "bg-transparent text-zinc-400 border-zinc-800 hover:text-zinc-305"
                  }`}
                >
                  Bold Premium
                </button>
              </div>
            </div>
          </div>

          {/* Major submission CTA */}
          <button
            onClick={() => onUnlockMockup(selectedIndustry.id, selectedFeatures)}
            className="w-full mt-2 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-sans font-bold text-sm tracking-wide rounded-2xl cursor-pointer shadow-lg shadow-emerald-500/15 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-98"
          >
            <span>Unlock Free Blueprint Mockup Now</span>
            <Sparkles className="w-4 h-4 fill-zinc-950/20" />
          </button>
        </div>

      </div>
    </div>
  );
};
