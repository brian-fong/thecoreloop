// dotenv
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

// NextAuth.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

interface Token {
  name?: string | undefined;
  email?: string | undefined;
  picture?: string | undefined;
  sub?: string | undefined;
  provider?: string | undefined;
  providerAccountId?: string | undefined;
  iat?: number | undefined;
  exp?: number | undefined;
  jti?: string | undefined;
}

interface Account {
  provider?: string | undefined;
  type?: string | undefined;
  providerAccountId?: string | undefined;
  access_token?: string | undefined;
  expires_at?: number | undefined;
  scope?: string | undefined;
  token_type?: string | undefined;
  id_token?: string | undefined;
}

interface Session {
  user?: User;
  expires?: string | undefined;
}

interface User {
  name?: string | undefined;
  email?: string | undefined;
  image?: string | undefined;
  provider?: string | undefined;
  providerAccountId?: string | undefined;
}

export const auth_options = {
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
    //I can call prisma to get account, then add it into token,
    //update?
    async jwt({ token, account }: { token: Token; account: Account }) {
      if (account) {
        token.provider = account.provider;
        token.providerAccountId = account.providerAccountId;
      }

      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: Token;
      user: User;
    }) {
      if (session && session.user) {
        // Add the provider to the session;
        session.user.provider = token.provider;
        session.user.providerAccountId = token.providerAccountId;
      }
      return session;
    },
  },
};

// console.log("\n",JSON.stringify(token, null, 2));

export default NextAuth(auth_options);
