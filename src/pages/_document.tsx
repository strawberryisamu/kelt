import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
            {/* <title>利尻島京大昆布干しバイト</title>
            <meta name="description" content="利尻島昆布干しバイトの紹介サイトです。" />
            <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
