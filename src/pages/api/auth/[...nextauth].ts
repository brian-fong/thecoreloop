// dotenv
import * as dotenv from "dotenv";
dotenv.config()

// Axios
import axios from "axios";

// NextAuth.js
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

export const auth_options: AuthOptions = {
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
      if (account) {
        // Send POST request to Next.js API endpoint
        const response: any = await axios.post(
          "http://localhost:3000/api/login",
          {
            data: account.provider,
          }
        );
      }

      return token;
    },
  },
}

export default NextAuth(auth_options)

