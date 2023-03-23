// Hooks
import { useEffect, useState } from "react";

export default function useProjectState() {
  const [isTeamMember, setIsTeamMember] = useState<boolean>(false);
  const [isFundraising, setIsFundraising] = useState<boolean>(false);
  const [isPartnerships, setIsPartnerships] = useState<boolean>(false);

  const [blockchain, setBlockchain] = useState<string>("");
  const [contributors, setContributors] = useState<any[]>([]);
  const [description, setDescription] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [stage, setStage] = useState<string>("");
  const [story, setStory] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");

  const project: any = {
    isTeamMember, setIsTeamMember,
    isFundraising, setIsFundraising,
    isPartnerships, setIsPartnerships,
    blockchain, setBlockchain,
    contributors, setContributors,
    description, setDescription,
    genres, setGenres,
    images, setImages,
    links, setLinks,
    name, setName,
    stage, setStage,
    story, setStory,
    thumbnail, setThumbnail,
  };

  return project;
}

