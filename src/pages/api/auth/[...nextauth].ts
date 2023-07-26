// dotenv
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

// Axios
import axios from "axios";

// NextAuth.js
<<<<<<< HEAD
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

export const auth_options: AuthOptions = {
=======
import NextAuth, { Account, AuthOptions, Awaitable, Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

// interface Token {
//   name?: string | undefined;
//   email?: string | undefined;
//   picture?: string | undefined;
//   sub?: string | undefined;
//   provider?: string | null | undefined;
//   providerAccountId?: string | null | undefined;
//   iat?: number | undefined;
//   exp?: number | undefined;
//   jti?: string | undefined;
// }

// interface Account {
//   provider?: string | undefined;
//   type?: string | undefined;
//   providerAccountId?: string | undefined;
//   access_token?: string | undefined;
//   expires_at?: number | undefined;
//   scope?: string | undefined;
//   token_type?: string | undefined;
//   id_token?: string | undefined;
// }
// interface Account {
//   provider?: string;
//   type?: string;
//   providerAccountId?: string;
//   access_token?: string;
//   expires_at?: number;
//   scope?: string;
//   token_type?: string;
//   id_token?: string;
// }

// interface Session {
//   user?: User;
//   expires?: string | undefined;
// }
// interface Session {
//   user?: User | null | undefined;
//   expires?: string | undefined;
// }

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string | null;
  providerAccountId?: string | null;
}
// interface User {
//   name?: string | null | undefined;
//   email?: string | null | undefined;
//   image?: string | null | undefined;
//   provider?: string | null | undefined;
//   providerAccountId?: string | null | undefined;
// }

export const auth_options = {
>>>>>>> origin/dev
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
      version: "2.0",
    }),
  ],
  callbacks: {
<<<<<<< HEAD
    async jwt({ token, account }) {
      console.log("account: ", JSON.stringify(account, null, 2));

      return token;
    },
  },
}
=======
    //I can call prisma to get account, then add it into token,
    //update?
    async jwt({ token, account }: any) {
      if (account) {
        token.provider = account.provider;
        token.providerAccountId = account.providerAccountId;
      }
>>>>>>> origin/dev

      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: JWT;
      user: User | AdapterUser;
    }) {
      console.log(token);
      // Add the provider to the session;
      session.user.handle =
        token.provider === "twitter"
          ? (token.providerAccountId as string)
          : (token.email as string);
      session.user.provider = token.provider as string;
      session.user.providerAccountId = token.providerAccountId as string;
      return session;
    },
  },
};

// console.log("\n",JSON.stringify(token, null, 2));

export default NextAuth(auth_options);
