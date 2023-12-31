import "./globals.css";
import "@/styles/index.scss";
import { Poppins } from "next/font/google";
import { Providers } from "./provider";
// import Icon from "@/images/logo.png"

export const metadata = {
  title: "모아 - 모임 플랫폼",
  description: "모임 플랫폼",
  // icons: {
  //   icon: Icon,
  // }
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div className="bg-[#f8f8f8] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
          <Providers>

            {children}
            {/* <Footer /> */}
          </Providers>
        </div>
      </body>
    </html>
  );
}
