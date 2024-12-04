/** Layout para las paginas dentro de la carpeta (dashboard) */

import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /** Aca puedo protejer mis rutas dentro de esta carpeta */
  const session = await auth();
  if(!session?.user) {
    redirect('/login');
  }
  return (
    <section>
        <main>
            {children}
        </main>
    </section>
  );
}
