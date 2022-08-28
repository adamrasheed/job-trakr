import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <h1 className="site_title">Job Trakr</h1>
      </header>
      <Component {...pageProps} />
      <footer>footer</footer>
    </>
  );
}

export default MyApp;
