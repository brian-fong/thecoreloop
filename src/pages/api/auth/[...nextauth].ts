import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const auth_options = {
  providers: [
    GoogleProvider({
      clientId: process.env.G_CLIENT_ID!,
      clientSecret: process.env.G_CLIENT_SECRET!,
    }),
  ],
}

export default NextAuth(auth_options)

