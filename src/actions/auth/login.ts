'use server';

import { signIn } from "@/auth.config";

export const loginUser = async( email:string,password:string ) => {
    try {
        await signIn('credentials',{
            redirect:false,
            email,
            password
        });
        return {
            ok:true,
            message:'Login exitoso'
        }
    } catch (error) {
        console.log(error);
        if((error as any).type === 'CredentialsSignin') {
            return {
                ok:false,
                message:'Credenciales inválidas'
            }
        }
        else {
            return {
                ok:false,
                message:'Ocurrió un error inesperado'
            }
        }
    }
}