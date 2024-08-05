import "@/styles/globals.css";

import { Nunito } from "next/font/google";
import { Roboto } from "next/font/google";
import { type Metadata } from "next";
import { cn } from "@/lib/utils";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BiEnvelope, BiHeart, BiHome, BiWrench } from "react-icons/bi";

export const metadata: Metadata = {
  title: "CodeSculpt - Code That Sculpts Your Online Sucess",
  description:
    "Partner with CodeSculpt to bring your vision to life. We deliver user-friendly, visually stunning websites that set you apart.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/icon-light.svg",
        href: "/favicons/icon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/icon-dark.svg",
        href: "/favicons/icon-dark.svg",
      },
    ],
  },
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
  { name: "Home", link: "/#top", icon: <BiHome /> },
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
        "dark min-h-screen scroll-p-20 scroll-smooth bg-background font-primary antialiased",
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
