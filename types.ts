
export interface Memory {
  id: number;
  url: string;
  title: string;
  caption: string;
}

export interface SiteConfig {
  coupleName: string;
  heroSubtitle: string;
  messages: string[];
  memories: Memory[];
  closingText: string;
  musicUrl: string;
}
