import { auth } from "@/auth.config";
import { FormLogin } from "@/components";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login"
};
export default async function LoginPage() {
  const session = await auth();
  if(session?.user) {
    redirect('/')
  }
  return (
    <main className="w-full h-full flex items-center justify-center">
        <div className="div-form-container bg-white p-6 flex flex-col gap-y-2 text-center rounded max-w-sm mt-6">
            <h1 className="text-slate-600 font-semibold">Bienvenido</h1>
            <p className="text-sm text-slate-500">
                Debe ingresar sus credenciales para poder acceder al sistema.
            </p>
            <FormLogin />
        </div>
    </main>
  );
}