import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='icon' href='https://media.graphassets.com/zBLcmcqfTqWM40oqOtea?_gl=1*1x19891*_ga*NjI3OTA1ODgzLjE2ODE2NjM0MzQ.*_ga_G6FYGSYGZ4*MTY4MTk0MjcyMC42LjEuMTY4MTk0NTQzOC42MC4wLjA.' />
          <title>Crypto Tutor</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
