import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn , Noto_Kufi_Arabic , Markazi_Text} from 'next/font/google';

const vazirmatn = Vazirmatn({
    subsets: ['latin' , 'arabic'],
    variable: '--font-vazirmatn',
    display: 'swap',
})

const kufi = Noto_Kufi_Arabic({
    subsets: ['arabic'],
    variable: '--font-noto-kufi-arabic',
    display: 'swap',
})

const markazi = Markazi_Text({
    subsets: ['arabic'],
    variable: '--font-markazi',
    display: 'swap',
})

export const metadata: Metadata = {
  title: "دکتر آنلاین",
  description: "پلتفرم رزرو نوبت دکتر آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${markazi.variable} ${vazirmatn.variable} ${kufi.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
