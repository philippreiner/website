import Head from "next/head";
import NextLink from "next/link";

import { Homelink } from "@components/atoms"


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
      <div className="text-center text-sm py-4 md:py-8">
        <NextLink href="/impressum">
          <a class="text-gray-500 hover:underline">Imprint & Privacy Info</a>
        </NextLink>
      </div>


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
