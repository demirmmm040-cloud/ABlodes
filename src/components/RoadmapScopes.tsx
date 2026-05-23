import React, { useState } from 'react';
import { 
  Check, Stars, Zap, ShieldCheck, HelpCircle, 
  Crown, Compass, Rocket, PhoneCall, Gift, ArrowRight 
} from 'lucide-react';

interface FeatureGroup {
  name: string;
  tagline: string;
  deliveryTime: string;
  complexityIndex: string;
  targetOutcome: string;
  icon: any;
  features: string[];
  popular: boolean;
  ctaText: string;
}

interface RoadmapScopesProps {
  onSelectPlan: (planName: string) => void;
}

export const RoadmapScopes: React.FC<RoadmapScopesProps> = ({ onSelectPlan }) => {
  const [filter, setFilter] = useState<"all" | "essential" | "advanced">("all");

  const plans: FeatureGroup[] = [
    {
      name: "The Kickstarter Scope",
      tagline: "Perfect for single owner-operators or local startups looking to establish an immediate high-speed footprint.",
      deliveryTime: "Within 24 Hours",
      complexityIndex: "Core Setup",
      targetOutcome: "Launch baseline local trust and instant click-to-call mobile features.",
      icon: Compass,
      features: [
        "1-Page High-Conversion Craft Speed Site",
        "100/100 Mobile Page Speed Index score",
        "Google Business Profile Linkage & Optimization",
        "1-Tap Urgent Call & Contact Intake Form",
        "Basic Local Off-Page SEO Metadata",
        "Continuous Secured Server Deployments"
      ],
      popular: false,
      ctaText: "Start Kickstarter Blueprint"
    },
    {
      name: "The Business Engine Scope",
      tagline: "Our most requested tier. Customized for local businesses looking to automate consultations & client bookings.",
      deliveryTime: "Within 24 Hours",
      complexityIndex: "Active Expansion",
      targetOutcome: "Automate leads from map queries directly to your smartphone.",
      icon: Rocket,
      features: [
        "Multi-page Authority Layout Structure (up to 5 pages)",
        "Interactive Before/After slider comparator module",
        "Automated Calendar Booking Scheduler support",
        "5-Star Google Business Reviews Stream Loop",
        "Local Competitor Suburban Geographic Keyword Schema",
        "Instant SMS Lead Dispatcher to your technician's mobile",
        "Ongoing Webmaster direct-refresh priority line"
      ],
      popular: true,
      ctaText: "Claim Business Engine Blueprint"
    },
    {
      name: "The Local Dominator Scope",
      tagline: "For ambitious multi-location local networks, medical groups, and premium professional advisors.",
      deliveryTime: "Within 24 Hours",
      complexityIndex: "Market Capture",
      targetOutcome: "Capture multiple surrounding suburbs and outrank local franchises.",
      icon: Crown,
      features: [
        "Custom Multi-Hub Expansion (unlimited page layout modules)",
        "Dedicated Suburban Lander Networks to rank in every district",
        "Advanced Interactive Intake Calculators & auto-generated customer PDFs",
        "Priority VIP Direct Webmaster SMS Dispatch support",
        "Custom Media Production: Curation of Professional Asset Packs",
        "High-End Competitor Traffic Siphoning Audit Reports"
      ],
      popular: false,
      ctaText: "Request Domination Scoping"
    }
  ];

  const filteredPlans = plans.filter(p => {
    if (filter === "all") return true;
    if (filter === "essential") return !p.popular; // Kickstarter / Dominator
    return p.popular; // Business Engine
  });

  return (
    <div id="roadmap-scopes" className="flex flex-col gap-6 w-full">
      <div className="flex flex-col items-center justify-center gap-3">
        {/* Toggle Pills block */}
        <div className="inline-flex items-center bg-zinc-900 border border-zinc-850 p-1.5 rounded-2xl">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 text-xs font-semibold font-sans rounded-xl cursor-pointer transition-colors ${
              filter === "all" ? "bg-zinc-800 text-white shadow" : "bg-transparent text-zinc-500 hover:text-zinc-350"
            }`}
          >
            Show All Scopes
          </button>
          <button
            onClick={() => setFilter("essential")}
            className={`px-4 py-2 text-xs font-semibold font-sans rounded-xl cursor-pointer transition-colors ${
              filter === "essential" ? "bg-zinc-800 text-white shadow" : "bg-transparent text-zinc-500 hover:text-zinc-350"
            }`}
          >
            Core / Enterprise
          </button>
          <button
            onClick={() => setFilter("advanced")}
            className={`px-4 py-2 text-xs font-semibold font-sans rounded-xl cursor-pointer transition-colors flex items-center gap-1.5 ${
              filter === "advanced" ? "bg-emerald-500 text-zinc-950 font-bold shadow" : "bg-transparent text-zinc-500 hover:text-zinc-350"
            }`}
          >
            <span>Active Growth</span>
            <span className="text-[9px] bg-zinc-950 text-emerald-400 px-1.5 py-0.5 rounded-md font-mono font-bold">
              Most Popular
            </span>
          </button>
        </div>
        
        <p className="text-xs text-zinc-400 max-w-xl text-center leading-relaxed">
          Each roadmap incorporates our high-performance core engine code with no monthly template subscription overhead.
        </p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-3">
        {filteredPlans.map((plan, idx) => {
          const IconComp = plan.icon;
          return (
            <div
              key={idx}
              className={`relative flex flex-col justify-between gap-6 p-6 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? "bg-zinc-900/40 border-emerald-500/40 shadow-[0_4px_30px_rgba(16,185,129,0.08)] ring-1 ring-emerald-500/40" 
                  : "bg-zinc-950/45 border-zinc-900 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-zinc-950 text-[10px] font-mono font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Stars className="w-3.5 h-3.5 fill-zinc-950" />
                  <span>Highly Recommended</span>
                </div>
              )}

              {/* Top part */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl border ${plan.popular ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-450" : "bg-zinc-900 border-zinc-800 text-zinc-400"}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">{plan.complexityIndex}</span>
                      <h4 className="text-base sm:text-md font-bold text-white tracking-tight">{plan.name}</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono bg-zinc-900 text-zinc-450 border border-zinc-800 px-2 py-0.5 rounded-full select-none">
                      {plan.deliveryTime}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed min-h-[45px]">
                  {plan.tagline}
                </p>

                <div className="bg-zinc-900/30 border border-zinc-900 p-3 rounded-2xl flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono font-medium tracking-wider text-zinc-500 uppercase">Target Deliverable Outcome:</span>
                  <p className="text-xs text-zinc-350 font-normal leading-relaxed">{plan.targetOutcome}</p>
                </div>

                {/* Features Checklist */}
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-500">Inclusions Pack:</span>
                  <div className="flex flex-col gap-1.5">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Trigger Action button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-semibold font-sans transition-all duration-200 cursor-pointer shadow-sm flex items-center justify-center gap-2 mt-4 ${
                  plan.popular 
                    ? "bg-emerald-500 hover:bg-emerald-450 text-zinc-950 font-bold hover:shadow-emerald-500/10 focus:ring-2 focus:ring-emerald-500" 
                    : "bg-zinc-900 hover:bg-zinc-850 text-zinc-350 hover:text-white border border-zinc-800"
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RoadmapScopes;
