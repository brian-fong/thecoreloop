// React

// Look At Gaming
export interface LAG {
  heading: string;
  subheading?: string;
  number: string;
  message_id?: number;
  date: string;
  special_insights?: string;
  content: ArticleGroup[];
}

export interface ArticleGroup {
  category: string; 
  articles: Article[];
}

export interface Article {
  [index: string]: string | undefined;
  caption: string; 
  url: string;
  title?: string; 
  description?: string;
  image?: string;
  source?: string;
}

// React Components
export type Post = {
  lag: LAG;
};

export type Gallery = {
  lag: LAG;
};

export type Card = {
  url: string;
  caption: string; 
  title: string; 
  description: string; 
  image: string;
  category: string; 
  source: string;
};

