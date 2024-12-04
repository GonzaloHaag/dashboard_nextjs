import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title : {
    default : 'Sistema de control',
    template: '%s | Sistema de control',
  },
  description: "Description sistema de control",
  keywords:['sistema','control','nextjs','prisma','dashboard','control de clientes','control de stock','control de productos'],
  creator:'Gonzalo Haag'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} antialiased min-h-dvh w-full bg-slate-100`}
      >
          {children}
      </body>
    </html>
  );
}
