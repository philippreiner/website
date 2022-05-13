import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark:bg-black dark:text-white sm:text-lg">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument