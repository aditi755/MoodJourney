import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logout from "@/components/Logout";
import { AuthProvider } from "@/context/AuthContext";
const Opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"] , weight: ['400']})
import Head from "./head";
export const metadata = {
  title: "MoodJourney",
  description: "Track your daily mood everu day of the year",
};

export default function RootLayout({ children }) {
  const header = (
    <Link href={'/'}>
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
    <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>MoodJourney</h1> 
 <div className="flex items-center justify-between">
  <Logout />
  </div>
  </header>
    </Link>
  )

  const footer = (
    // grid implementation place-item-center
  <footer className="p-4 sm:p-8 grid place-items-center">
  <p className={'text-indigo-500 '  + fugaz.className}>Created with love</p>
  </footer>
  )

  return (
    <html lang="en">
      <AuthProvider>
      <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800' + Opensans.className}>
        {header}
        {children}
       {footer}
        </body>
      </AuthProvider>
      
       
    </html>
  );
}

