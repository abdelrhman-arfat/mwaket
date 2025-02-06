import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./_Components/NavBar";
import RTKProvider from "./_RTK/Provider";
import ContactSection from "./_Components/sections/Footer";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "مواقيت",
  description: "This is a web site for prayers time in egypt ",
  author: "Abdo Yasser",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RTKProvider>
        <body className={`${roboto.variable} antialiased`}>
          <NavBar />
          <main className="h-screen w-full relative">
            {children}
            <ContactSection />
          </main>
        </body>
      </RTKProvider>
    </html>
  );
}
// https://api.aladhan.com/v1/timingsByCity/05-02-2025?country=${}&city=${}
