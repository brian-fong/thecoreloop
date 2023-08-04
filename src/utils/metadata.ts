import { unfurl } from "unfurl.js";
import { Opts } from "unfurl.js/dist/types";

export default async function fetchMeta(
  link: string,
  parsed: boolean = true,
): Promise<any> {
  const options: Opts = {
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

  try {
    const result: any = await unfurl(link, options);
    
    if (!parsed) return result;
    else {
      let result_parsed: any = {
        title: result?.title || "",
        description: result?.description || "",
        favicon: result?.favicon || "",
        image: result?.open_graph?.images?.[0]?.url || "",
        source: result?.open_graph?.site_name || "",
      };
      return result_parsed;
    }


  } catch (error) {
    console.error(error);
    return null;
  }
}
