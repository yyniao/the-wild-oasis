import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
};

console.log(process.env.AUTH_GOOGLE_ID);

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(authConfig);
