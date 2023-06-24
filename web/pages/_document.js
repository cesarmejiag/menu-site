import Document, { Html, Head, Main, NextScript } from "next/document";
import client from "@/client";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const getInitialProps = await Document.getInitialProps(ctx);
    const init = await client.fetch(`*[_id == "global-config"] {lang}[0]`);
    return { ...getInitialProps, ...init };
  }

  render() {
    const { lang } = this.props;
    return (
      <Html lang={lang || "es-MX"}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
