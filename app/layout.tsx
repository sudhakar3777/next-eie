import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "@/redux-store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EIE",
  description: "EIE Complete Solutions Dashboard",
  // icons: {
  //   icon: ["/android-chrome-192x192"],
  //   apple: ["/apple-touch-icon.png?v=4"],
  //   shortcut: ["/apple-touch-icon.png"],
  // },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Providers>
          {/* <PersistGate loading={null} persistor={persistor}> */}
          {children}
          {/* </PersistGate> */}
        </Providers>
        {/* <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      </body>
    </html>
  );
}
