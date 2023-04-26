import { PrismaClient } from "@prisma/client";
import { genres } from "./data/genres";
const prisma = new PrismaClient();
import DATA from "./data/projects";
import { Project, DevStatus } from "../src/types";
/*To run this from scratch 
    1. add to package.json   
        "prisma": {
        "seed": "ts-node prisma/seed.ts"
        }
    2. in the terminal, run
        - $ npm i -D ts-node typescript @types/node
        - $ npx prisma generate
        - $ npx prisma db seed
*/

interface Genres {
  genre: string;
  description?: string;
}

async function seedGenres() {
  const data: Genres[] = genres.map((genre: string) => {
    const genreDesc = genre.split(": ");
    return { genre: genreDesc[0], description: genreDesc[1] };
  });
  for (const row of data) {
    const existingRow = await prisma.genre.findUnique({
      where: { genre: row.genre },
    });
    if (!existingRow) {
      try {
        const resp = await prisma.genre.create({
          data: row,
        });
      } catch (error) {
        console.log(
          "Caught error when attempting to create a row in db",
          error
        );
      }
    } else {
      console.log(
        `Skipping creation of ${JSON.stringify(
          row
        )}, already exists in database.`
      );
    }
  }
  prisma.$disconnect();
}

//DEV note: you cannot findunique for composite keys. please use <model>.findMany() and then findOne() instead
async function seedProjects() {
  /* check for genres, if length is > 0 */
  // const games = DATA.gaming_startups;
  const project: Project[] = DATA.gaming_startups;
  for (const row of project) {
    const existingRow = await prisma.project.findUnique({
      where: {
        name_studio: {
          name: row.name,
          studio: row.studio,
        },
      },
    });
    if (!existingRow) {
      //genreData = ["genre", "genre"]
      //but you should turn it into
      //{ name: "RPG" }
      try {
        if (row.genres === undefined) {
          row.genres = [];
        }
        if (!row.fundraising) {
          row.fundraising = false;
        }
        const genresData: object[] = connectInput(row.genres);
        const resp = await prisma.project.create({
          data: {
            name: row.name,
            studio: row.studio,
            thumbnail: row.thumbnail,
            blockchain: row.blockchain,
            description: row.description,
            tagline: row.tagline,
            fundraising: row.fundraising,
            links: row.links,
            gallery: row.gallery,
            stage: row.stage ? DevStatus[row.stage] : DevStatus.preProduction,
            genres: {
              connect: genresData,
            },
            ...(row.owner && {
              owner: {
                connect: { id: row.owner },
              },
            }),
          },
        });
        console.log(
          `Project with studio ${row.studio} and name ${row.name} has been created`
        );
      } catch (error) {
        console.error(
          `caught error while creating a project in db with studio: ${row.studio} and project name ${row.name}`,
          error
        );
      }
    } else {
      console.error(
        `Skipping creation of ${row.name} and ${row.studio}, already exists in database.`
      );
    }
  }
  prisma.$disconnect();
}

function connectInput(genres: string[]) {
  return genres.map((genre) => {
    return { genre: genre };
  });
}
seedGenres();
seedProjects();
