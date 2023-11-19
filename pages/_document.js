import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import i18nextConfig from '../next-i18next.config'
import { useEffect, useState } from "react";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.query.locale ||
      i18nextConfig.i18n.defaultLocale
    console.log("props", this.props)

    // const [dir, setDir] = useState('ltr')
    //     useEffect(() => {
    //       // Perform localStorage action
    //       const dir = localStorage.getItem('i18nextLng') == 'ar' ? 'rtl' : ltr

    //     }, [])
    //     if (typeof window !== 'undefined') {
    //       // Perform localStorage action
    //       const dir = localStorage.getItem('i18nextLng') == 'ar' ? 'rtl' : ltr
    // }
    return (
      <Html lang={currentLocale} dir={'auto'}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
