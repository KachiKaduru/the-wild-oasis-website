import Header from "./_components/Header";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_contexts/ReservationContext";
import { HeaderProvider } from "./_contexts/HeaderContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased`}
      >
        <ReservationProvider>
          <HeaderProvider>
            <Header />
          </HeaderProvider>
          <div className="flex-1 px-4 py-6 sm:px-6 sm:py-9 md:px-8 md:py-12 grid">
            <main className="max-w-7xl mx-auto w-full">{children}</main>
          </div>
        </ReservationProvider>
      </body>
    </html>
  );
}
