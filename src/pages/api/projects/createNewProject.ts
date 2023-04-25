import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
// import { Project } from "../../../types";
const prisma = new PrismaClient();

export interface Project {
  name: string;
  studio: string;
  thumbnail?: string;
  blockchain?: string;
  description?: string;
  tagline?: string;
  isTeam?: boolean;
  fundraising?: boolean;
  links?: string;
  genres?: string | string[];
  gallery?: string;
  stage?: DevStatus | undefined;
  owner?: number;
}

export enum DevStatus {
  production = "production",
  playableDemo = "playableDemo",
  live = "live",
  preProduction = "preProduction",
}

export default async function createGame(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const formData: Project = request.body;
  if (typeof formData.genres == "string") {
    formData.genres = formData.genres.split(", ");
  }

  const genresData = connectInput(formData.genres ? formData.genres : ["FPS"]);

  function connectInput(genres: string[]) {
    return genres.map((genre) => {
      return { genre: genre };
    });
  }
  try {
    console.debug("/api/projects/createNewProject reached");
    if (formData.genres === undefined) {
      formData.genres = [];
    }
    if (!formData.fundraising) {
      formData.fundraising = false;
    }
    const genresData = connectInput(formData.genres);
    console.log("formdata", formData);
    const newGame = await prisma.project.create({
      data: {
        name: formData.name,
        studio: formData.studio,
        thumbnail: formData.thumbnail,
        description: formData.description,
        blockchain: formData.blockchain,
        tagline: formData.tagline,
        fundraising: true,
        links: formData.links,
        genres: {
          connect: genresData,
        },
        gallery: formData.gallery,
        stage: formData.stage,
      },
    });
    console.log("backend newGame Successful", newGame);
    response.status(200).json(newGame);
  } catch (error) {
    console.log(error);
  }
}
