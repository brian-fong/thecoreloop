import * as dotenv from "dotenv";
dotenv.config()
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const auth_options = {
  providers: [
    GoogleProvider({
      clientId: process.env.G_CLIENT_ID!,
      clientSecret: process.env.G_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(auth_options)

