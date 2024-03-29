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

        <meta property="og:site_name" content="Philipp Reiner Personal Website"/>
        <meta property="og:title" content={name}/>
        <meta property="og:url" content={canonicalURL}/>
        <meta property="og:type" content="website"/>
        <meta name="author" content={name}/>
        <meta name="description" content="Philipp Reiner is an expert for digital business models"/>
      </Head>

      {children}

      <div className="text-center text-sm py-4 md:py-8 mb-4">
        <NextLink
          href="/impressum"
          prefetch={false}
          className="dark:text-gray-500 text-paper-700 decoration-2 px-3 py-1.5 hover:bg-paper-300 dark:hover:bg-gray-700 rounded-full">
          Imprint & Privacy
        </NextLink>
      </div>
      <script 
        async 
        src="/js/t.js" 
        data-ackee-server="https://www.philippreiner.info/ackee/" 
        data-ackee-domain-id="9c20f8ac-780f-4d14-8928-6e7441f1b4b0"
        data-ackee-opts='{ "ignoreLocalhost": true, "detailed": true }'
      />
    </div>
  );
}
