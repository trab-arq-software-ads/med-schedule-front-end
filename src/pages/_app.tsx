import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Overpass } from "@next/font/google";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={overpass.className}>
      <Component {...pageProps} />
    </main>
  );
}
