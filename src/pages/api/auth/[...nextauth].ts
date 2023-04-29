// dotenv
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

// NextAuth.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

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
    async jwt({ token, account }) {
      console.log("account during callback", account);
      if (account) {
        token.provider = account.provider;
      }

      return token;
    },
    async session({ session, token, user }) {
      // Add the provider to the session
      session.user.provider = token.provider;
      return session;
    },
  },
};

// console.log("\n",JSON.stringify(token, null, 2));

export default NextAuth(auth_options);
