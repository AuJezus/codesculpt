import "@/styles/globals.css";

import { Nunito } from "next/font/google";
import { Roboto } from "next/font/google";
import { type Metadata } from "next";
import { cn } from "@/lib/utils";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BiEnvelope, BiHeart, BiHome, BiWrench } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fontNunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const fontRoboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const navItems = [
  { name: "Home", link: "/", icon: <BiHome /> },
  { name: "Services", link: "/#services", icon: <BiWrench /> },
  { name: "Benefits", link: "/#benefits", icon: <BiHeart /> },
  { name: "Contact Us", link: "/#contact", icon: <BiEnvelope /> },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background font-primary dark min-h-screen antialiased",
        fontNunito.variable,
        fontRoboto.variable,
      )}
    >
      <body>
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
