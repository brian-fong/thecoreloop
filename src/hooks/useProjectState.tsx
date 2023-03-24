// Hooks
import { useState } from "react";

export default function useProjectState() {
  const [blockchain, setBlockchain] = useState<string>("");
  const [contributors, setContributors] = useState<any[]>([]);
  const [description, setDescription] = useState<string>("");
  const [fundraising, setFundraising] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const [headline, setHeadline] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [stage, setStage] = useState<string>("");
  const [story, setStory] = useState<string>("");
  const [submittedByTeam, setSubmittedByTeam] = useState<boolean>(false);
  const [thumbnail, setThumbnail] = useState<string>("");

  const project: any = {
    blockchain, setBlockchain,
    contributors, setContributors,
    description, setDescription,
    fundraising, setFundraising,
    genres, setGenres,
    headline, setHeadline,
    images, setImages,
    links, setLinks,
    name, setName,
    stage, setStage,
    story, setStory,
    submittedByTeam, setSubmittedByTeam,
    thumbnail, setThumbnail,
  };

  return project;
}

