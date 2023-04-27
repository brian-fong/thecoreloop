// Components
import {
  BsGlobe as WebIcon,
  BsFacebook as FacebookIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
  BsTelegram as TelegramIcon,
  BsYoutube as YoutubeIcon,
} from "react-icons/bs";
import { 
  FaDiscord as DiscordIcon,
  FaMediumM as MediumIcon,
} from "react-icons/fa";
import {
  SiAppstore as AppstoreIcon,
  SiGoogleplay as PlaystoreIcon,
  SiLinktree as LinktreeIcon,
  SiSubstack as SubstackIcon,
  SiTiktok as TiktokIcon,
  SiOpensea as OpenseaIcon,
} from "react-icons/si";

// Useful Constants
import { LINKS } from "../../data/links";

export default function LinkIcon({ url, size }: any) {
  const SOURCES: string[] = Object.keys(LINKS);
  const DOMAINS: string[][] = Object.values(LINKS);

  let source_found: string = "unknown";
  for (let i = 0; i < SOURCES.length; i++) {
    const source: string = SOURCES[i];
    const domains: string[] = DOMAINS[i];
  
    for (let domain of domains) {
      if (url.includes(domain)) source_found = source;
    }
  }

  switch (source_found) {
    case "appstore":
      return <AppstoreIcon size={size} />;
    case "discord":
      return <DiscordIcon size={size} />;
    case "facebook":
      return <FacebookIcon size={size} />;
    case "instagram":
      return <InstagramIcon size={size} />;
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "linktree":
      return <LinktreeIcon size={size} />;
    case "medium":
      return <MediumIcon size={size} />;
    case "opensea":
      return <OpenseaIcon size={size} />;
    case "playstore":
      return <PlaystoreIcon size={size} />;
    case "substack":
      return <SubstackIcon size={size} />;
    case "tiktok": 
      return <TiktokIcon size={size} />;
    case "telegram":
      return <TelegramIcon size={size} />;
    case "twitter":
      return <TwitterIcon size={size} />;
    case "youtube":
      return <YoutubeIcon size={size} />;
    default:
      return <WebIcon size={size} />;
  }
}

