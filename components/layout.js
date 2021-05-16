import Head from "next/head";
import NextLink from "next/link";

import { Homelink } from "@components/atoms"


const name = "Philipp Reiner";
export const siteTitle = "Philipp Reiner";

export default function Layout({ children }) {


  return (
    <div>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={name}/>
        <meta name="author" content={name}/>
      </Head>

      {children}

      <div className="text-center text-sm py-4 md:py-8 mb-4">
        <NextLink href="/impressum">
          <a class="text-gray-500 hover:underline">Imprint & Privacy</a>
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
