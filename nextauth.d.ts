import NextAuth, { DefaultSession } from "next-auth";
declare module 'next-auth' {
    interface Session {
        user: {
            id:string;
            email: string;
            username: string;
            avatar?:string;
            logo:string;
            createdAt: Date;
            role: string;
        } & DefaultSession['user'];
    }
}