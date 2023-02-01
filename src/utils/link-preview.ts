import { unfurl } from 'unfurl.js'
import { LinkPreview } from '../types'; 
const extractUrls = require("extract-urls");

export default async function previewLink(url: string): Promise<LinkPreview> {
  // Initialize <LinkPreview> object
  let link_preview: LinkPreview = {
    url: url,
    title: "",
    description: "",
    image: "",
    source: "",
    error: "",
  };

  // Additional options for link preview
  const options: any = {
    headers: { 
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
      'cache-control': 'max-age=0',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
    },
    timeout: 5000,
  };

  // Generate link preview . . . 
  try {
    if (url.includes("https://twitter.com/")) {
      // If URL is a Tweet, then . . . 
      
      const { open_graph }: any = await unfurl(url);

      // Assign title
      if (open_graph.title) link_preview.title = open_graph.title;

      // Assign description
      if (open_graph.description) link_preview.description = open_graph.description;

      // Assign image (default: Twitter Logo)
      link_preview.image = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png";
      if (open_graph.images && open_graph.images.length > 0) link_preview.image = open_graph.images[0].url;
      // If image not found, then generate thumbnail from first link in description (if any)
      if (!link_preview.image && link_preview.description) {
        const urls: string[] = extractUrls(link_preview.description);
        if (urls && urls.length > 0) {
          // Generate thumbnail using the first link found
          const thumbnail: string = (await previewLink(urls[0])).image;
          if (thumbnail) link_preview.image = thumbnail;
        }
      }

      // Assign source (default: "Twitter")
      const author: string = url.substring(20, url.indexOf("/", 20));
      if (author) link_preview.source = author;
      else if (!link_preview.source) link_preview.source = "Twitter";
    } else {
      // Else if URL is a regular article, then . . . 
      
      const { author, title, description, open_graph, oEmbed }: any = await unfurl(url, options);

      // Assign title
      if (title) link_preview.title = title;

      // Assign description
      if (description) link_preview.description = description; 

      // Use OpenGraph for description, image, and source
      if (open_graph) {   
        if (!link_preview.description && open_graph.description) link_preview.description = open_graph.description;
        if (open_graph.images && open_graph.images.length > 0) link_preview.image = open_graph.images[0].url;
        if (open_graph.site_name) link_preview.source = open_graph.site_name;
      }

      // Use oEmbed for image and source (if needed)
      if (oEmbed) {
        if (!link_preview.image) {
          if (oEmbed.thumbnails && oEmbed.thumbnails.length > 0) link_preview.image = oEmbed.thumbnails[0].url;
        } 
        if (!link_preview.source) {
          if (oEmbed.provider_name) link_preview.source = oEmbed.provider_name;
        }
      }

      // Assign source (default: URL domain name)
      if (!link_preview.source && author) link_preview.source = author;
      else if (!link_preview.source) link_preview.source = (new URL(url)).hostname;
    }
  } catch (error: any) {
    console.log(error.message);
  }

  return link_preview;
}

