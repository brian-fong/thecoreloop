import { Article } from "../../types";
import Card_Portrait from "./Card_Portrait";
import Card_Landscape from "./Card_Landscape";

export default function Card({ orientation, article }: any) {
  const article_copy: Article = {...article};
  if (orientation == "landscape") {
    return <Card_Landscape article={article_copy} />; 
  } else {
    return <Card_Portrait article={article_copy} />; 
  }
}

