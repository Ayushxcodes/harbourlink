import type { Metadata } from "next";
import { Merriweather } from 'next/font/google'
import "./globals.css";
const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700'], // Choose the weights you want
    display: 'swap',
  })


export const metadata: Metadata = {
    title: "Harbour-Link",
    description: "Built for",
    icons:{
        icon:"/favicon.ico"
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${merriweather} font-sans antialiased bg-white-950 text-black`}
            >
                {children}
            </body>
        </html>
    );
}
