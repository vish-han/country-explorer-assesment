import './globals.css';
import {Comfortaa } from 'next/font/google';
import {Metadata} from "next";

 const comfortaa = Comfortaa({
     subsets: ['latin'],
     variable: '--font-comfortaa',
     display: 'swap',
 })

export const metadata: Metadata = {
    title: "Country Explorer",
    description: "This is the Website for explorling every explore that is present on the earth",
    metadataBase: new URL("https://country-explorer-assesment.vercel.app/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${comfortaa.variable}`}>
        <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
