import { getGlobalConfig } from "@/lib/api";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  // Add site config from sanity.
  const config = await getGlobalConfig();
  if (!config) {
    return { pageProps };
  }
  if (config && pageProps) {
    pageProps.config = config;
  }
  return { pageProps };
};
