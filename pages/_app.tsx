import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Link from "next/link";
import { siteInfo } from "../utils/constants";

import Footer from "../components/Footer";

import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <header>
        <div className="container">
          <h1 className="site_title">
            <Link href={"/"}>
              <a>{siteInfo.title}</a>
            </Link>
          </h1>
        </div>
      </header>
      <Component {...pageProps} />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
