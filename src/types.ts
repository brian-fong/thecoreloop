// React

// Look At Gaming
export interface LAG {
  heading: string;
  subheading: string;
  message_id: number;
  number: number;
  date: string;
  special_insights: string;
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

export type Card = {
  key: string;
  url: string;
  caption: string; 
  title: string; 
  description: string; 
  image: string;
  category: string; 
  source: string;
};

