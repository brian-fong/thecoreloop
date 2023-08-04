export interface ILAG {
  num: number;
  date: string;
  subheading: string;
  content: ICategoryGroup[];
  footer: string;
};

export interface ICategoryGroup {
  category: string;
  articles: IArticle[];
};

export interface IArticle {
  caption: string;
  link: string;
  alt_text: string;
};

export interface IMetadata {
  title: string,
  description: string,
  favicon: string,
  image: string,
  source: string,
};
