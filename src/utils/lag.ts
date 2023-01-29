import { LAG } from "../types";
import { formatDate, getTodaysDate } from "./date";

export function formatTgramMsg(lag: LAG): string {
  let tgram_msg: string = "";
  
  let lag_date: string = getTodaysDate();
  try {
    lag_date = formatDate(lag.date);
  } catch (error: any) {
    console.log(error.message);
  }

  tgram_msg += `Look at Gaming #${lag.number} | ${lag_date}`;
  tgram_msg += "\n\n";
  if (lag.subheading) {
    tgram_msg += lag.subheading; 
    tgram_msg += "\n\n";
  }
  if (lag.special_insights) {
    tgram_msg += "‼️ SPECIAL INSIGHTS 👀" + "\n";
    tgram_msg += lag.special_insights;
    tgram_msg += "\n\n";
  }

  for (const [i, article_group] of lag.content.entries()) {
    const last_group: boolean = i == lag.content.length-1;
    tgram_msg += article_group.category + "\n"; 
    for (const [j, article] of article_group.articles.entries()) {
      const last_article: boolean = j == article_group.articles.length-1;
      tgram_msg += article.caption + "\n"; 
      tgram_msg += article.url + "\n";
      if (!last_article && !last_group) tgram_msg += "\n";
    }
    if (!last_group) tgram_msg += "\n\n";
  }

  return tgram_msg;
}

