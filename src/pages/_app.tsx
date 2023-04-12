import { AppContext, AppProps } from "next/app";

import "@styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async ({ ctx, Component }: AppContext) => {
  if (Component.getInitialProps) {
    const pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }

  return { pageProps: {} };
};

export default MyApp;
