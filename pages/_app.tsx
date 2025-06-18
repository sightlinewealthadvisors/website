import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Navbar/>
  <Component suppressHydrationWarning={true} {...pageProps} />
  <Footer/>
  </>;
}
