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
} from "react-icons/si";

// Useful Constants
import { LINKS } from "../../data/links";

export default function LinkIcon({ url, size }: any) {
  const WEBSITES: string[] = Object.keys(LINKS);
  const DOMAINS: string[] = Object.values(LINKS);

  let website_found: string = "unknown";
  for (let i = 0; i < WEBSITES.length; i++) {
    const website: string = WEBSITES[i];
    const domain: string = DOMAINS[i];
    if (url.includes(domain)) website_found = website;
  }

  switch (website_found) {
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

