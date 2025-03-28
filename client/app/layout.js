import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/basis-grotesque-arabic-pro-regular.ttf",
  variable: "--font-geist-sans",
  weight: "100",
});
const geistMono = localFont({
  src: "./fonts/plantin-mt-pro-light.ttf",
  variable: "--font-geist-mono",
  weight: "100",
});

export const metadata = {
  title: "Langford College",
  description: "Online degrees without the high fees",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
