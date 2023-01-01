// === Node Modules ===
import { getLinkPreview } from "link-preview-js";

// === Local Modules ===

async function main() {
  console.log("Generating link preview . . . ");
  const link: string = "https://www.gamesindustry.biz/games-of-the-year-2022-podcast"
  const link_preview: any = await getLinkPreview(link);
  console.log("Link Preview: ");
  console.log(link_preview);
}

main()
  .then(() => process.exit(0));

