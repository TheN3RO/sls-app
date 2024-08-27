import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongoClient";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const client = await clientPromise;
        const db = client.db() as any;

        const user = await db
          .collection("users")
          .findOne({ email: credentials?.email });

        const bcrypt = require("bcrypt");

        const passwordCorrect = await bcrypt.compare(
          credentials?.password,
          user?.password
        );

        if (passwordCorrect) {
          return {
            id: user?._id,
            image: user?.image,
            email: user?.email,
            name: user?.name,
            role: user?.role,
            school: user?.school,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token.image = user.image;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.school = user.school;
      }

      if (trigger === "update") {
        token.role = session.user.role;
        token.school = session.user.school;
      }

      return token;
    },
    session: async ({ session, token }) => {
      session.user.role = token.role as string;
      session.user.school = token.school as string;

      return session;
    },
  },
};