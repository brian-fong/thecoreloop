// React
import { ReactElement } from "react";

// Look At Gaming
export interface LAG {
  heading: string;
  subheading: string;
  message_id: number;     // TODO: change to string
  number: number;         // TODO: change to string
  date: string;
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
  special_insights: string;
  heading: string; 
  date: string; 
  cards: ReactElement[];
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

