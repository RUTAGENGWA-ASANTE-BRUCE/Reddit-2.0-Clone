import NextAuth from "next-auth"
import SlackProvider from "next-auth/providers/slack";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SlackProvider({
      clientId: process.env.SLACK_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})