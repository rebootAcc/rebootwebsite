import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Jost } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";

const jost = Jost({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${jost.style.fontFamily};
        }
        body {
          font-family: ${jost.style.fontFamily};
        }
      `}</style>

      {pageLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
