import { AppContext, AppProps } from "next/app";

import "@styles/index.css";
import { ConfigProvider } from "antd";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
};

MyApp.getInitialProps = async ({ ctx, Component }: AppContext) => {
  if (Component.getInitialProps) {
    const pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }

  return { pageProps: {} };
};

export default MyApp;
