import NextAuth,{ type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import prisma from './lib/prisma';
import { compareSync } from 'bcrypt';
export const authConfig:NextAuthConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks : {
    jwt({ token,user }) {

        if(user) {
            token.data = user;
        }
        return token
    },
    session({session,token}) {
        session.user = token.data as any;
        return session;
    }
  },
  providers : [
    Credentials({
        async authorize(credentials) {
            const parsedCredentials = z
            .object({ email: z.string().email() , password:z.string().min(4)}).safeParse( credentials );

            if(!parsedCredentials.success) return null; // SI no es success retorno null 

            const { email, password } = parsedCredentials.data;

            // Buscar correo del user 
            const findUser = await prisma.user.findUnique({
                where : {
                    email : email.toLowerCase()
                }
            });
            if(!findUser) return null; // SI no lo encuentra retorno aca

            // Comparar contraseñas -> si paso el return anteorior, el user existe
            if(!compareSync(password,findUser.password)) return null; //Si no hacen match retorno

            // Regresar usuario --> sin el password
            return {
                id:`${findUser.id}`,
                email: findUser.email,
                username: findUser.username,
                avatar: findUser.avatar,
                logo: findUser.logo,
                role:findUser.role,
                createdAt: findUser.createdAt
            }
        }
    })
  ]
  
};

export const { signIn,signOut,auth,handlers } = NextAuth(authConfig)