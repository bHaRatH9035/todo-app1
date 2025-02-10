import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET
    })
  ],
  // callbacks: {
  //   redirect: params => {
  //     console.log('redirect...start')
  //     console.log(params)
  //     console.log(process.env.GOOGLE_OAUTH_CLIENT_ID)
  //     console.log(process.env.GOOGLE_OAUTH_CLIENT_SECRET)
  //     console.log('redirect...end')
  //   },
  //   signIn: params => {
  //     console.log('signing...start')
  //     console.log(params)
  //     console.log(process.env.GOOGLE_OAUTH_CLIENT_ID)
  //     console.log(process.env.GOOGLE_OAUTH_CLIENT_SECRET)
  //     console.log('signing...end')
  //   }
  // }
})