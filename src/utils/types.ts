export interface ILAG {
  num: number;
  date: string;
  subheading: string;
  content: ICategoryGroup[];
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
