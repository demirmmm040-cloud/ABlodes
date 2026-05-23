import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Hammer, Wrench, Stethoscope, Utensils, Scale, Home, Zap, Target, 
  TrendingUp, HeartHandshake, Check, ChevronDown, Phone, ArrowRight,
  MapPin, ShieldCheck, Mail, Star
} from 'lucide-react';

import agencyHero from './assets/images/agency_hero_1779512320057.png';
import businessMockups from './assets/images/business_mockups_1779512336382.png';

import { VisualComparator } from './components/VisualComparator';
import { SandboxSimulator } from './components/SandboxSimulator';
import { RoadmapScopes } from './components/RoadmapScopes';
import { LeadModal } from './components/LeadModal';

import { industries, addOns, testimonials, advantages } from './data';
import { Industry } from './types';

const IconMap: { [key: string]: any } = {
  Hammer, Wrench, Stethoscope, Utensils, Scale, Home, Zap, Target, TrendingUp, HeartHandshake
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndustryId, setModalIndustryId] = useState("contracting");
  const [modalSelectedFeatures, setModalSelectedFeatures] = useState<string[]>([]);

  // Selected industry for the Visual Before/After Comparator Section
  const [activeComparatorId, setActiveComparatorId] = useState("contracting");

  // Faq accordion index state
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  // References for navigation smooth scroll
  const sandboxRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const triggerModalOpen = (industryId: string = "contracting", features: string[] = []) => {
    setModalIndustryId(industryId);
    setModalSelectedFeatures(features);
    setModalOpen(true);
  };

  const activeComparatorIndustry = industries.find(ind => ind.id === activeComparatorId) || industries[0];

  // Standard FAQs
  const faqs = [
    {
      q: "Why should I hire BLODES instead of just building a quick site on Wix or Squarespace?",
      a: "DIY builders write heavy, bloated, generic code that takes 3 to 6 seconds to load. Modern Google algorithms penalize slow loading times—meaning you rank lower on Maps and search. A BLODES website loads in under 0.4 seconds, features clean custom code, is fully managed, and is structured precisely to guide users toward tapping the 'Call Now' button."
    },
    {
      q: "Do you write all the wording and find the pictures, or do we have to design it?",
      a: "We do 100% of the heavy lifting. Our specialized team writes all the persuasive, local-SEO-targeted marketing copy, sources and licenses matching premium high-res media, and installs high-conversion widgets for you. You of course get final approval over all text and imagery before launching!"
    },
    {
      q: "How do I make changes or update my site when things change later?",
      a: "No more wrestling with confusing editors. Whenever you have a new project photo to add, operational business hour updates, or an announcement, simply text or email your dedicated BLODES direct link support line. We complete and deploy your changes within 1 hour, at no extra cost, included in your scoping engagement."
    },
    {
      q: "How long does the process take from start to launching live?",
      a: "No more long wait times. Once you submit your request, we completely prepare, custom-code, and launch your final high-performance website live on your personal domain in under 24 hours!"
    },
    {
      q: "What does our continuous support scope include?",
      a: "Our comprehensive support scope goes beyond standard raw hosting. It includes hyper-fast global server routing, SSL enterprise grade certification, schema search sync, active security firewalls, monthly localized backup cycles, and unlimited content/hours updates from our professional web developers."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500 selection:text-zinc-950 flex flex-col antialiased">
      
      {/* ⚠️ Top Alert Notification Banner */}
      <div className="bg-gradient-to-r from-red-950 via-zinc-90 w-full border-b border-zinc-900 px-4 py-2.5 text-center text-xs text-zinc-300 font-sans tracking-tight relative z-20">
        <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="font-semibold text-white">Attention Local Business Owners:</span>
          A slow, complex generic site can leak up to 48% of your call volume.
          <span 
            onClick={() => triggerModalOpen("contracting")}
            className="text-emerald-400 underline font-semibold cursor-pointer hover:text-emerald-300 ml-1"
          >
            Claim your 24-hour custom website today →
          </span>
        </span>
      </div>

      {/* Modern sticky navigation header */}
      <header className="sticky top-0 z-40 bg-zinc-950/75 backdrop-blur-md border-b border-zinc-900/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo brand badges */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-black tracking-tighter text-white select-none flex items-center gap-1">
              BL<span className="text-emerald-400">O</span>DES
            </span>
            <span className="text-[10px] sm:text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 px-2.5 py-0.5 rounded-full tracking-wide">
              LOCAL WEB AGENCY
            </span>
          </div>

          {/* Nav links on desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <button 
              onClick={() => scrollToSection(sandboxRef)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Interactive Blueprint
            </button>
            <button 
              onClick={() => scrollToSection(reviewsRef)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Client Success
            </button>
            <button 
              onClick={() => scrollToSection(roadmapRef)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Roadmap Scopes
            </button>
          </nav>

          {/* CTA Header button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => triggerModalOpen("contracting")}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-sans bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-500/5 hover:scale-[1.01]"
            >
              Claim Free Mockup
            </button>
          </div>
        </div>
      </header>

      {/* Hero and Intro landing block container */}
      <main className="flex-1 flex flex-col">
        
        {/* HERO SECTION */}
        <section 
          className="relative overflow-hidden py-16 md:py-24 lg:py-28 border-b border-zinc-900 bg-zinc-950"
          style={{ backgroundImage: `url(${agencyHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Ambient gradient overlay */}
          <div className="absolute inset-0 bg-zinc-950/90 z-0 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero details column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/15 text-[10px] sm:text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Core-Speed Compliant Local Web Engineering
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none font-display">
                lightning-fast bespoke web assets <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">built for your local business</span>
              </h1>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
                Stop losing half your call volume to bloated templates and Wix builders. We craft custom-coded high-conversion local landing experiences that load instantly, rank natively on Maps, and turn searchers into appointments.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button
                  onClick={() => scrollToSection(sandboxRef)}
                  className="px-6 py-4 rounded-xl text-xs sm:text-sm font-bold font-sans bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all duration-250 cursor-pointer shadow-xl shadow-emerald-500/5 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <span>Trigger Blueprints Simulator</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection(roadmapRef)}
                  className="px-6 py-4 rounded-xl text-xs sm:text-sm font-bold font-mono border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer flex items-center justify-center"
                >
                  Local Roadmap Scopes
                </button>
              </div>

              {/* Extra visual trust metrics */}
              <div className="grid grid-cols-3 gap-4 border-t border-zinc-900 pt-6 mt-4">
                <div className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-extrabold text-white">0.35s</span>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase">Avg Speed Index</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-extrabold text-emerald-400">100/100</span>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase">Google Mobile Score</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-extrabold text-white">24 Hours</span>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase">Guaranteed Deploy</span>
                </div>
              </div>
            </div>

            {/* Showcase Mockups column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/10 via-transparent to-emerald-500/5 blur-xl opacity-80" />
                <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/20 p-2 shadow-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={businessMockups}
                    alt="BLODES Mockups"
                    className="w-full h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* COMPLIMENTARY UPGRADE GRID HEADER BARS */}
        <section className="bg-zinc-950 border-b border-zinc-900 py-10 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 flex flex-col items-center gap-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/15 px-3.5 py-1.5 rounded-full shadow-sm">
                ⚡ Complimentary Client Upgrade Stack
              </span>
              <p className="text-[11px] sm:text-xs text-zinc-400 max-w-xl mx-auto leading-relaxed mt-2">
                Choose any baseline launch scope below and have all these premium system options added directly to your website repository at <span className="text-emerald-400 font-bold">Zero Setup Fee</span>.
              </p>
            </div>

            {/* Grid of upgraded details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 justify-center">
              {[
                { name: "SEO Optimization", price: "$997" },
                { name: "Mobile Responsive Design", price: "$497" },
                { name: "Speed Optimization", price: "$297" },
                { name: "Premium UI/UX Design", price: "$799" },
                { name: "Contact Form Setup", price: "$199" },
                { name: "Security Setup", price: "$249" },
                { name: "Google Indexing", price: "$149" },
                { name: "Social Media Integration", price: "$199" },
                { name: "24/7 Support", price: "$299" },
                { name: "Custom Domain Connection", price: "$99" },
                { name: "Conversion Optimized Layout", price: "$899" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-zinc-900/40 border border-zinc-900 p-3.5 rounded-2xl flex flex-col justify-between items-center text-center gap-1.5 hover:border-emerald-500/20 hover:bg-zinc-900/60 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block shrink-0" />
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1 font-mono">
                    <span className="text-[9px] text-zinc-550 line-through">{item.price}</span>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Free</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION FOR THE BLODES ADVANTAGE */}
        <section className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 max-w-4xl">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                  Custom Code VS Over-Subscribed Builders
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display">
                  built for conversions. engineered to rank.
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
                Why builders like Wix, WordPress, and Squarespace are costing you customers: Heavy code means high bounce rates.
              </p>
            </div>

            {/* Grid of Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((adv, aIdx) => {
                // Render icons dynamically
                let IconComp = Zap;
                if (adv.icon === "Target") IconComp = Target;
                if (adv.icon === "TrendingUp") IconComp = TrendingUp;
                if (adv.icon === "HeartHandshake") IconComp = HeartHandshake;

                return (
                  <div key={aIdx} className="bg-zinc-950/45 p-6 rounded-3xl border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col gap-4">
                    <div className="p-3 bg-emerald-500/10 text-emerald-450 rounded-2xl border border-emerald-500/10 w-fit">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="text-sm font-bold text-white tracking-tight">{adv.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{adv.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION FOR VISUAL BEFORE/AFTER COMPARATOR */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-zinc-950 to-zinc-950/45 border-b border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
            <div className="text-center flex flex-col items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
                Quality Verification
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-display">
                Compare Our Code to Stale DIY Builders
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-lg leading-relaxed">
                Select your industry category below to examine the visual structure speed-frame. Slide the vertical division bar to inspect the transformation.
              </p>
            </div>

            {/* Industries selector chips for visual comparison */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {industries.map(ind => (
                <button
                  key={ind.id}
                  onClick={() => setActiveComparatorId(ind.id)}
                  className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold select-none cursor-pointer transition-all ${
                    activeComparatorId === ind.id 
                      ? "bg-emerald-500 text-zinc-950 font-bold shadow shadow-emerald-500/10" 
                      : "bg-zinc-900 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {ind.name}
                </button>
              ))}
            </div>

            {/* Image Slider Comparator */}
            <VisualComparator 
              beforeImage={activeComparatorIndustry.beforeImage}
              afterImage={activeComparatorIndustry.afterImage}
              title={activeComparatorIndustry.name}
            />
          </div>
        </section>

        {/* SANDBOX SIMULATOR EMBED SECTION */}
        <section 
          ref={sandboxRef}
          className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center text-center gap-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-450 uppercase">
                Interactive Sandbox Generator
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-tight font-display">
                Pre-Calculate Your Local SEO Potential
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Configure your search territory density parameters, sliders, and target volumes to live-generate code mock suggestions instantly.
              </p>
            </div>

            {/* Sandbox simulator wrapper component */}
            <SandboxSimulator onUnlockMockup={triggerModalOpen} />
          </div>
        </section>

        {/* CLIENT CASE HISTORIES TESTIMONIALS SECTION */}
        <section 
          ref={reviewsRef}
          className="py-16 md:py-24 bg-gradient-to-b from-zinc-950 to-zinc-950 border-b border-zinc-900 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col items-center justify-center text-center gap-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-455 uppercase">
                Acclaimed Results
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-tight font-display">
                Success Files: Multiplied Local Cashflows
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Read direct reviews from trade professionals, plumbers, cosmetic physicians, and family owners about their BLODES experience.
              </p>
            </div>

            {/* Testimonials layout grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((test, index) => (
                <div 
                  key={index}
                  className="bg-zinc-900/35 border border-zinc-900 p-6 rounded-3xl flex flex-col justify-between gap-6 hover:border-zinc-850 hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    {/* Stars and metrics highlight */}
                    <div className="flex justify-between items-center bg-zinc-950/20 p-3 rounded-2xl border border-zinc-900">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4.5 h-4.5 fill-emerald-400 text-emerald-450 stroke-1" />
                        ))}
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {test.metrics}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-350 italic leading-relaxed">
                      "{test.quote}"
                    </p>
                  </div>

                  {/* Profile info footer */}
                  <div className="flex items-center gap-3 border-t border-zinc-900/50 pt-4">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-10 h-10 rounded-full object-cover border border-zinc-800"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white leading-none">{test.name}</span>
                      <span className="text-[10px] text-zinc-500 mt-1">{test.role} &bull; {test.businessName}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP COSTING PLAN SECTION */}
        <section 
          ref={roadmapRef}
          className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-900 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center text-center gap-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-450 uppercase">
                Deployment Roadmaps
              </span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-tight font-display">
                Exclusive System Integration Scopes
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Choose the design level corresponding to your expansion target. All roadmaps compile within 24 hours.
              </p>
            </div>

            {/* Roadmaps comparison matrix components */}
            <RoadmapScopes onSelectPlan={(planName) => triggerModalOpen("contracting", [])} />
          </div>
        </section>

        {/* FAQs ACCORDION SECTION */}
        <section className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
            <div className="text-center flex flex-col items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
                Assurance Hub
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                Frequently Asked Inquiries
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = faqOpenIndex === index;
                return (
                  <div 
                    key={index}
                    className="border border-zinc-90 w-full rounded-2xl overflow-hidden bg-zinc-900/10 hover:bg-zinc-900/20 transition-all duration-300"
                  >
                    <button
                      onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                      className="w-full py-4.5 px-5 flex justify-between items-center text-left gap-4 font-sans font-medium text-xs sm:text-sm text-zinc-200 select-none cursor-pointer focus:outline-none"
                    >
                      <span className="leading-snug">{faq.q}</span>
                      <ChevronDown 
                        className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180 text-emerald-400' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs text-zinc-400 leading-relaxed border-t border-zinc-900/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FOOTER CALL TO ACTION CONTAINER */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-zinc-950 to-zinc-900 text-center relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-6">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] sm:text-xs font-mono font-bold uppercase text-emerald-400 tracking-widest">
              Launch Scoping
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-none font-display">
              Ready to Claim Your Local Territory? Let's build your blueprint.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-450 max-w-xl leading-relaxed">
              Stop losing calls. Submit your sandbox parameters and visual vibe below to activate your private local mockup draft now.
            </p>
            
            <button
              onClick={() => triggerModalOpen("contracting")}
              className="px-8 py-4.5 bg-emerald-500 hover:bg-emerald-450 text-zinc-950 font-sans font-bold text-sm tracking-wide rounded-2xl cursor-pointer shadow-xl shadow-emerald-500/10 flex items-center gap-2 transition-all hover:scale-[1.01] active:scale-98 mt-2"
            >
              <span>Launch Blueprint Compiler Studio Now</span>
              <Sparkles className="w-4 h-4 text-zinc-950/20" />
            </button>
          </div>
        </section>

      </main>

      {/* Copywrite and developer link footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-550 text-[10px] sm:text-xs font-mono">
          <span>&copy; {new Date().getFullYear()} BLODES Web Dev Agency. All Rights Reserved.</span>
          <div className="flex gap-4">
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Security Policy</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Terms of System Use</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Developer Ingress</span>
          </div>
        </div>
      </footer>

      {/* Compiler Intake wizard leads Modal overlay dialog */}
      <LeadModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialIndustryId={modalIndustryId}
        initialSelectedFeatures={modalSelectedFeatures}
      />

    </div>
  );
}
