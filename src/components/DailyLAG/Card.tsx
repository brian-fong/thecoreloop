import Card_Portrait from "./Card_Portrait";
import Card_Landscape from "./Card_Landscape";

export default function Card({ orientation, article }: any) {
  if (orientation == "landscape") {
    return <Card_Landscape article={article} />; 
  } else {
    return <Card_Portrait article={article} />; 
  }
}

