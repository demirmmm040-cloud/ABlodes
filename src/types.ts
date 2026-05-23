export interface WireframeStructure {
  header: string;
  hero: string;
  middle: string;
  social: string;
  action: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  heroText: string;
  leadValue: number;
  typicalMonthlyJobVolume: number;
  features: string[];
  beforeImage: string;
  afterImage: string;
  accentColor: string;
  wireframeStructure: WireframeStructure;
}

export interface AddOnFeature {
  id: string;
  label: string;
  description: string;
  priceEstimate: number;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  businessName: string;
  industry: string;
  quote: string;
  avatar: string;
  metrics: string;
}

export interface Advantage {
  title: string;
  description: string;
  icon: string;
}
