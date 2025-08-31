import './globals.css';
import { Inter, Playfair_Display,Comfortaa } from 'next/font/google';

 const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});
 const comfortaa = Comfortaa({
     subsets: ['latin'],
     variable: '--font-comfortaa',
     display: 'swap',
 })

 const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} ${comfortaa.variable}`}>
        <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
