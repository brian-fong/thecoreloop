import { PrismaClient } from "@prisma/client";
import { genres } from "./data/genres";
const prisma = new PrismaClient();

/*To run this from scratch 
    1. add to package.json   
        "prisma": {
        "seed": "ts-node prisma/seed.ts"
        }
    2. in the terminal, run
        - $ npm i -D ts-node typescript @types/node
        - $ npx prisma db seed
*/

interface Genre {
  genre: string;
  description: string;
}

async function seed() {
  const data: Genre[] = genres.map((genre) => {
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

seed();
