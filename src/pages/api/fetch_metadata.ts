import { LinkPreview } from "../../types";
import previewLink from "../../utils/link-preview";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest, 
  response: NextApiResponse,
) {
  console.log(`${request.method} request received at /api/fetch_metadata`);

  if (request.method == "POST") {
    // Unpack data in request body 
    const url: string = request.body.url;

    // Generate link-preview for article
    console.log(`  Fetching: ${url}`);
    const link_preview: LinkPreview = await previewLink(url);
    response.json(link_preview);
    console.log("Response sent");
  }
}
