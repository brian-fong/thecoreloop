// dotenv
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

// NextAuth.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

interface Token {
  name?: string;
  email?: string;
  picture?: string;
  sub?: string;
  provider?: string;
  providerAccountId?: string;
  iat?: number;
  exp?: number;
  jti?: string;
}

interface Account {
  provider?: string;
  type?: string;
  providerAccountId?: string;
  access_token?: string;
  expires_at?: number;
  scope?: string;
  token_type?: string;
  id_token?: string;
}

interface Session {
  user: User;
  expires?: string;
}

interface User {
  name?: string;
  email?: string;
  image?: string;
  provider?: string;
  providerAccountId?: string;
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
    async session({ session, token }: { session: Session; token: Token }) {
      // Add the provider to the session;
      session.user.provider = token.provider;
      session.user.providerAccountId = token.providerAccountId;
      return session;
    },
  },
};

// console.log("\n",JSON.stringify(token, null, 2));

export default NextAuth(auth_options);
