import { Article, LinkPreview } from "../../types";
import previewLink from "../../utils/link-preview";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest, 
  response: NextApiResponse,
) {
  console.log(`${request.method} request received at /api/fetch_metadata`);

  if (request.method == "POST") {
    const article: Article = request.body.article;
    console.log(`  Fetching: ${article.url}`);
    // Generate link-preview for article
    const link_preview: LinkPreview = await previewLink(article.url);
    const article_meta: Article = {
      ...article,  // Append existing properties (url and caption)
      title: link_preview.title,
      description: link_preview.description,
      image: link_preview.image,
      source: link_preview.source,
    };
    response.json(article_meta);
    console.log("Response sent");
  }
}
