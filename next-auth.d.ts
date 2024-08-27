// next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

// Extending the default User object in NextAuth to include role and school
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      school: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string;
    school: string;
  }
}
