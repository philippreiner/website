import Head from "next/head";
import NextLink from "next/link";

const name = "Philipp Reiner";
const isBrowser = typeof window !== "undefined";
export const siteTitle = "Philipp Reiner";

export default function Layout({ children }) {


  return (
    <div>
      <Head>
        <title>Philipp Reiner</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Philipp Reiner"/>
        <meta name="author" content="Philipp Reiner"/>
      </Head>

      {children}

        <NextLink href="/impressum">
          Impressum & Datenschutz
        </NextLink>

      {process.env.NODE_ENV === "production" && (
        <script
          async
          defer
          data-domain="philippreiner.info"
          src="https://plausible.io/js/plausible.js"
        />
      )}
    </div>
  );
}
