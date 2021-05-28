import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";

const name = "Philipp Reiner";
export const siteTitle = "Philipp Reiner";

export default function Layout({ children }) {

  const site = "https://www.philippreiner.info";
  const canonicalURL = site + useRouter().asPath;

  return (
    <div>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalURL} />

        <meta property="og:title" content={name}/>
        <meta name="author" content={name}/>
        <meta name="description" content="Philipp Reiner is an expert for digital business models"/>
      </Head>

      {children}

      <div className="text-center text-sm py-4 md:py-8 mb-4">
        <NextLink href="/impressum">
          <a class="text-gray-500 hover:underline">Imprint & Privacy</a>
        </NextLink>
      </div>
      <script
          async
          defer
          data-domain="philippreiner.info"
          data-api="/api/event"
          src="/js/script.js"
        />
    </div>
  );
}
