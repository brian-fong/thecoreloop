// faker.js
import { faker } from "@faker-js/faker";

// Avatars for mock data
import AVATARS from "./avatars";

function getRandomInt(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a)) + a;
}

export function generateComment() {
  // const sex = faker.name.sexType();
  // const name: string = faker.name.firstName(sex).toLowerCase();
  const name: string = faker.internet.userName().toLowerCase();
  const content: string = faker.lorem.sentences();
  const date_obj: Date = faker.date.recent(30); 
  const date_str: string = date_obj
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");
  const upvotes: number = faker.datatype.number({
    min: 0,
    max: 100,
  });

  const comment: any = {
    user: {
      name: name,
      image: AVATARS[getRandomInt(0, AVATARS.length)],
    },
    content: content,
    date: date_str,
    upvotes: upvotes,
    replies: [],
  };

  return comment;
}

export function generateCommentsUnique(count: number) {
  const comments: any[] = [];
  for (let i = 0; i < count; i++) {
    let unique_comment_created: boolean = false;
    let unique_comment: any = {};
    while (!unique_comment_created) {
      // Keep generating comments until a unique combo is found
      // Note: "unique" means the name and the avatar have not been 
      //       used yet.
      const { user, content, date, upvotes }: any = generateComment();
      const names: string[] = comments.map(comment => comment.user.name);
      const avatars: string[] = comments.map(comment => comment.user.image);

      if (!names.includes(user.name) && !avatars.includes(user.image)) {
        unique_comment_created = true;
        unique_comment = { user, content, date, upvotes };
        comments.push(unique_comment);
      }
    }
  }

  return comments;
}

