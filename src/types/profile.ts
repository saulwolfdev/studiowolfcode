export interface Profile {
  name: string;
  brand: string;
  role: string;
  positioning: string;
  location: string;
  stack: string[];
  about: string[];
  companies: string[];
  education: string;
}

export interface CapabilityGroup {
  number: string;
  title: string;
  note?: string;
  items: string[];
}
