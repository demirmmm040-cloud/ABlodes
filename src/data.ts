import { Industry, AddOnFeature, Testimonial, Advantage } from './types';

export const industries: Industry[] = [
  {
    id: "contracting",
    name: "General Contracting",
    icon: "Hammer",
    heroText: "Build Trust Online Before You Step Onto The Job Site",
    leadValue: 6500,
    typicalMonthlyJobVolume: 4,
    features: [
      "Interactive 4K Project Gallery & Filters",
      "Instant Quote Constructor & Estimate Tool",
      "Guild Quality & Houzz Review Import",
      "Before & After Slider Modules",
      "Local Service Area Interactive Map"
    ],
    beforeImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=60&w=800",
    afterImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=60&w=800",
    accentColor: "from-amber-500 to-orange-600",
    wireframeStructure: {
      header: "Logo | Core Services & Projects | Call Now [Phone]",
      hero: 'Large high-res kitchen rehab banner + "Get Your Custom Bid" form overlay',
      middle: "Filterable Grid: Kitchens, Decks, Additions with direct image zooms",
      social: "Before-and-after interactive slider + GuildQuality stars badge overlay",
      action: "Quick Quote Form asking for scope, ZIP, and preferred start date"
    }
  },
  {
    id: "hvac_plumbing",
    name: "Plumbing & HVAC",
    icon: "Wrench",
    heroText: "Double Your Emergency Dispatch Calls While You Sleep",
    leadValue: 850,
    typicalMonthlyJobVolume: 25,
    features: [
      "⚡ 1-Tap Emergency Mobile Dial Buttons",
      "Real-time Service Truck Live Map",
      "No-Hassle Membership Club Signups",
      "Local SEO Schema for Google Maps Dominance",
      "SMS-integrated Emergency Contact Form"
    ],
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=60&w=800",
    afterImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=60&w=800",
    accentColor: "from-cyan-500 to-blue-600",
    wireframeStructure: {
      header: "⚠️ 24/7 Red Alert Dispatch Banner | Phone Icon | Book Online",
      hero: "Trust badges + Service selector: Repair, AC Install, Leak Emergency",
      middle: "$50 Off First Service Web-only Special Voucher with countdown timer",
      social: "Live stream of feeded Google Local Service Reviews and photos",
      action: "2-Phase intake form: Urgent (texts dispatcher) vs Standard schedule"
    }
  },
  {
    id: "dental_medical",
    name: "Dental & Medical Clinics",
    icon: "Stethoscope",
    heroText: "Onboard Premium Private Patients Automatically",
    leadValue: 1800,
    typicalMonthlyJobVolume: 15,
    features: [
      "Patient Portal Integration & Online Booking",
      "Sleek Virtual Tour of Practice Interior",
      "Interactive Cosmetic Before/After Slider",
      "New Patient PDF Automation & Clear FAQ Pack",
      "HIPAA-Compliant Contact Ingest Webhook"
    ],
    beforeImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=60&w=800",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=60&w=800",
    accentColor: "from-emerald-400 to-teal-600",
    wireframeStructure: {
      header: "Clinical Logo | Urgent Inquiries | Schedule Appointment",
      hero: 'Warm smile imagery + "Welcome $99 Dental Exam + Cleaning" Deal Banner',
      middle: "Interactive service cards: Orthodontics, Implants, Routine Hygiene",
      social: "Patients highlight review cards mentioning specific doctor names",
      action: "Calendar booking widget showing real open appointment slots"
    }
  },
  {
    id: "restaurant",
    name: "Restaurants & Cafes",
    icon: "Utensils",
    heroText: "Pack Your Dining Room on Off-Peak Weekdays",
    leadValue: 65,
    typicalMonthlyJobVolume: 280,
    features: [
      "Interactive Premium Dining Menu with Dietary Filters",
      "Seamless Table Booking & OpenTable / Reservation sync",
      "Mouth-Watering Responsive Food Gallery Rows",
      "Group Reservation & Private Event PDF Download",
      "Google Place Pins & One-Tap GPS Directions"
    ],
    beforeImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=60&w=800",
    afterImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=60&w=800",
    accentColor: "from-rose-500 to-amber-600",
    wireframeStructure: {
      header: "Sleek Sans Logo | Order Online Button | Menu | Location",
      hero: 'Mouth-watering chef dish video loop + "Claim Free Dessert tonight" code',
      middle: "Interactive menu filters: Vegan, Gluten-Free, Signature Steaks",
      social: "Live Instagram slider of food stories + local influencer quotes",
      action: "Clean calendar selector for reserving a table in 3 taps"
    }
  },
  {
    id: "law_firm",
    name: "Law Firms & Advisors",
    icon: "Scale",
    heroText: "Establish Instant Judicial Trust & Legal Authority",
    leadValue: 4500,
    typicalMonthlyJobVolume: 6,
    features: [
      "Secure Client Portal Portal Ingress",
      "Interactive Case Results Matrix & Search",
      "Attorney Profile Focus Cards with Full Career CVs",
      "Dynamic Assessment Flowchart Tool",
      "Strict Privacy-Encoded Consultation Ingest API"
    ],
    beforeImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=60&w=800",
    afterImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=60&w=800",
    accentColor: "from-slate-700 to-zinc-900",
    wireframeStructure: {
      header: "Prestige Typography | Legal Pillars | Request Evaluation",
      hero: 'Dramatic high-level skyline of courthouse + "Over $20M Recovered" stat',
      middle: "Interactive matrix of law categories: Injury, Business, Real Estate",
      social: "Written peer-reviews from colleagues and corporate client letters",
      action: "Confidential Free Evaluation intake asking about the potential legal matter"
    }
  },
  {
    id: "real_estate",
    name: "Real Estate Brokers",
    icon: "Home",
    heroText: "Siphon High-End Local Listings Before Zillow Gets To Them",
    leadValue: 9500,
    typicalMonthlyJobVolume: 3,
    features: [
      "MLS Live Real-Time Property Data Feed Sync",
      "Interactive Home Valuation Estimator Widget",
      "Neighborhood Density Custom Interactive Guidebook",
      "HD Aerial Drone Slider Galleries",
      "Integrated Agent Chat Widget or Schedule Flow"
    ],
    beforeImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=60&w=800",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=60&w=800",
    accentColor: "from-purple-500 to-indigo-600",
    wireframeStructure: {
      header: "Signature Broker Brand Logo | Properties List | Sell Securely",
      hero: 'Vast, luxury home twilight aerial with dynamic "How much of my equity is left?" bar',
      middle: "Filterable listing layout grid with dynamic custom 3D Virtual tour pins",
      social: "Warm emotional quotes from first-time home sellers praising the agent",
      action: "Listing evaluation form asking for Property Address, beds, and target term"
    }
  }
];

export const addOns: AddOnFeature[] = [
  {
    id: "local_seo",
    label: "Local SEO Mastery Pack",
    description: "Schema markup, local map citations, and dynamic keywords integration to rank #1 locally on Google Search.",
    priceEstimate: 499,
    category: "core"
  },
  {
    id: "online_booking",
    label: "Automated Booking & Intake System",
    description: "Sync online calendars, booking deposits, automatic SMS appointment confirmation/reminders.",
    priceEstimate: 699,
    category: "automation"
  },
  {
    id: "before_after",
    label: "High-Conversion Before & After Sliders",
    description: "Perfect for contractors, auto shops, and cosmetic practitioners to visually prove your craft quality.",
    priceEstimate: 249,
    category: "core"
  },
  {
    id: "truck_tracker",
    label: "Real-time SMS Lead Alert Relay",
    description: "Instantly bounce client web requests direct to technician phone numbers via rapid Twilio relays.",
    priceEstimate: 399,
    category: "automation"
  },
  {
    id: "review_loop",
    label: "Google & Yelp Review Automatic Sync",
    description: "Pull 5-star Google Business Reviews dynamically into custom interactive carousel blocks weekly.",
    priceEstimate: 299,
    category: "growth"
  },
  {
    id: "marketing_pop",
    label: "Voucher Coupon Engine / Exit Intent Alerts",
    description: "Intelligent overlays prompting local customers with limited-time deals or lead-generating callbacks on exit.",
    priceEstimate: 199,
    category: "growth"
  },
  {
    id: "content_ghost",
    label: "Professional Copywriting + Media Pack",
    description: "Handcrafted persuasive content, licensed stock or drone footage curation, custom branding assets.",
    priceEstimate: 599,
    category: "core"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Vance",
    role: "Founder",
    businessName: "Vance Elite Contracting",
    industry: "contracting",
    quote: "Our old DIY website did nothing. BLODES rebuilt it around our custom project scale. In the first month, we got 3 premium kitchen rehab calls from organic search alone. One job paid for the entire site five times over.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=clamp&w=150&h=150&q=80",
    metrics: "+300% Organic Leads"
  },
  {
    name: "Sarah Lin, DDS",
    role: "Clinical Director",
    businessName: "Lin Family Dental Care",
    industry: "dental_medical",
    quote: "BLODES streamlined our intake completely. Patients love the online scheduler, and our site loads within 0.2 seconds. No more clumsy third-party links, and we integrated patient forms securely from day one.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=clamp&w=150&h=150&q=80",
    metrics: "+85 New Patients/mo"
  },
  {
    name: "Jason Croft",
    role: "General Manager",
    businessName: "Croft Bros HVAC & Plumbing",
    industry: "hvac_plumbing",
    quote: "When a home water pipe bursts, minutes count. BLODES added a bold tap-to-call service that targets local geo-queries perfectly. Our mobile conversions spiked instantly.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=clamp&w=150&h=150&q=80",
    metrics: "2.1x Emergency Dispatches"
  },
  {
    name: "Chef Emilio Rossi",
    role: "Owner",
    businessName: "Osteria Del Sole",
    industry: "restaurant",
    quote: "The interactive menu BLODES built displays on smartphones like a premium app. We can update specials in seconds and our reservations are always booked out, keeping off-peak Tuesday nights busy.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=clamp&w=150&h=150&q=80",
    metrics: "No booking commission fees"
  }
];

export const advantages: Advantage[] = [
  {
    title: "Speed That Beats Wix by 6.5x",
    description: "Slow sites kill business. BLODES websites deploy static, compiled assets serving in milliseconds to maximize Local Google Ranking.",
    icon: "Zap"
  },
  {
    title: "Built to Capture, Not Just Show",
    description: "We structure the content layout directly to guide users toward tapping the phone button or requesting quotes.",
    icon: "Target"
  },
  {
    title: "Zero-Maintenance Local Dominance",
    description: "We handle perfect Schema definitions behind the scenes so Google and Apple Maps understand exactly where and what you service.",
    icon: "TrendingUp"
  },
  {
    title: "No DIY Headaches",
    description: "You focus on plumbing, construction, or cooking. We write your copy, structure your assets, and monitor uptime 24/7.",
    icon: "HeartHandshake"
  }
];
