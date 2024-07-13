import { NextAuthOptions } from "next-auth";
import  NextAuth  from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook";

const Google_Client_ID = process.env.GOOGLE_CLIENT_ID!
const Google_Client_Secret = process.env.GOOGLE_CLIENT_SECRET!

const authOption: NextAuthOptions = {
    session:{
        strategy: 'jwt'
    },
    pages: {
        signIn: '/'
    },
    providers:[
        GoogleProvider({
            clientId: Google_Client_ID,
            clientSecret: Google_Client_Secret
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
        }),
        
    ],
    callbacks:{
        async signIn({ account, profile }) {
            if (!profile?.email){
                throw new Error('No profile')
            }
        return true
        }
    }
}

const handler = NextAuth(authOption)
export { handler as GET, handler as POST }