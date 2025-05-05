import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { FaWhatsapp, FaTiktok, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const geistSans = localFont({
  src: "./fonts/basis-grotesque-arabic-pro-regular.ttf",
  variable: "--font-geist-sans",
  weight: "100",
});
const geistMono = localFont({
  src: "./fonts/basis-grotesque-arabic-pro-regular.ttf",
  variable: "--font-geist-mono",
  weight: "100",
});

export const metadata = {
  title: "Langford College",
  description: "A Smarter Route To a British Degree",
};

export default function RootLayout({ children }) {
  // const FACEBOOK_LIKE = process.env.NEXT_PUBLIC_FB_LINK;
  const WHATSAPP_LINK = process.env.NEXT_PUBLIC_WHATSAPP_LINK;
  // const TIKTOK_LINK = process.env.NEXT_PUBLIC_TIKTOK_LINK;
  // const INSTAGRAM_LINK = process.env.NEXT_PUBLIC_INSTAGRAM_LINK;
  // const YOUTUBE_LINK = process.env.NEXT_PUBLIC_YOUTUBE_LINK;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <Toaster position="top-center" reverseOrder={false} />

        {/* Floating Action Buttons */}
        <div className="fixed right-4 bottom-15 flex flex-col gap-3 z-50">
          {/* <a href={`${FACEBOOK_LIKE}`} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-3 rounded-full shadow-lg text-white hover:bg-blue-700 hover:scale-105 transition-all duration-200">
            <FaFacebookF size={24} />
          </a> */}
          <a href={`${WHATSAPP_LINK}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 p-3 rounded-full shadow-lg text-white hover:bg-green-600 hover:scale-105 transition-all duration-200">
            <FaWhatsapp size={24} />
          </a>
          {/* <a href={`${TIKTOK_LINK}`} target="_blank" rel="noopener noreferrer" className="bg-black p-3 rounded-full shadow-lg text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200">
            <FaTiktok size={24} />
          </a>
          <a href={`${INSTAGRAM_LINK}`} target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-3 rounded-full shadow-lg text-white hover:bg-pink-600 hover:scale-105 transition-all duration-200">
            <FaInstagram size={24} />
          </a>
          <a href={`${YOUTUBE_LINK}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 p-3 rounded-full shadow-lg text-white hover:bg-red-700 hover:scale-105 transition-all duration-200">
            <FaYoutube size={24} />
          </a> */}
        </div>
      </body>
    </html>
  );
}
