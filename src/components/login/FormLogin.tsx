'use client';
import { loginUser } from "@/actions";
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    email: string
    password: string
}
export const FormLogin = () => {
    const { register,handleSubmit,watch,formState: { errors,isSubmitting },} = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = async (data) => {
         const respuesta = await loginUser(data.email,data.password);
         if(!respuesta.ok) {
            alert(respuesta.message)
            return;
         }
         window.location.replace('/'); // Redirección
      }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-4 mt-4 text-sm">
            <input
            {...register('email',{ required:true })} 
            type="email" 
            autoFocus
            required 
            placeholder="Email" className="w-full py-2 px-3 border border-slate-200 rounded focus:outline focus:outline-1 focus:outline-blue-800 transition-colors duration-300" />
            <input 
            {...register('password',{ required:true,minLength:4 })}
            type="password" 
            minLength={4} 
            required 
            placeholder="Contraseña" className="w-full py-2 px-3 border border-slate-200 rounded focus:outline focus:outline-1 focus:outline-blue-800 transition-colors duration-300" />
            <button disabled={isSubmitting} type="submit" title="Ingresar" className="w-full py-2 rounded bg-blue-800 text-slate-100 hover:bg-slate-900 transition-colors duration-300 flex items-center justify-center">
                {
                    isSubmitting ? (
                        <svg width={20} height={20} fill="#f1f5f9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><rect x="11" y="1" width="2" height="5" opacity=".14"/><rect x="11" y="1" width="2" height="5" transform="rotate(30 12 12)" opacity=".29"/><rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43"/><rect x="11" y="1" width="2" height="5" transform="rotate(90 12 12)" opacity=".57"/><rect x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" opacity=".71"/><rect x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" opacity=".86"/><rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)"/><animateTransform attributeName="transform" type="rotate" calcMode="discrete" dur="0.75s" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12" repeatCount="indefinite"/></g></svg>
                    )
                    :
                    (
                        <span>Ingresar</span>
                    )
                }
            </button>
        </form>
    )
}
