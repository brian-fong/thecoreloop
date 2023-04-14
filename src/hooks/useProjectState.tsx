// Hooks
import { useState } from "react";

export default function useProjectState() {
  const [blockchain, setBlockchain] = useState<string>("");
  const [contributors, setContributors] = useState<any[]>([]);
  const [description, setDescription] = useState<string>("");
  const [fundraising, setFundraising] = useState<string>("undisclosed");
  const [gallery, setGallery] = useState<any[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [links, setLinks] = useState<string[]>([""]);
  const [name, setName] = useState<string>("");
  const [stage, setStage] = useState<string>("");
  const [studio, setStudio] = useState<any>({
    name: "",
    link: "",
  });
  const [story, setStory] = useState<string>("");
  const [isTeam, setIsTeam] = useState<boolean>(false);
  const [tagline, setTagline] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");

  const project: any = {
    blockchain, setBlockchain,
    contributors, setContributors,
    description, setDescription,
    fundraising, setFundraising,
    gallery, setGallery,
    genres, setGenres,
    images, setImages,
    links, setLinks,
    name, setName,
    stage, setStage,
    studio, setStudio,
    story, setStory,
    isTeam, setIsTeam,
    tagline, setTagline,
    thumbnail, setThumbnail,
  };

  return project;
}

