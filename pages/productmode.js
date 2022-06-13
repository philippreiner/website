import Head from "next/head";
import Layout from "../components/layout";
import Page from "../components/page";
import Styles from "../styles/post.module.css";
import { getContent } from "../lib/content";
import { Headline, LanguagePill} from "@components/atoms"
import Contacts from "@components/contacts"

export async function getStaticProps({ params }) {
  const content = await getContent("productmode");
  return {
    props: {
      content,
    },
  };
}

export default function Impressum({ content }) {
  return (
    <Layout>
      <Head>
        <title>Productmode: Build great software on the first try</title>
      </Head>
      <Page>
        <div className="pb-4">
          <Headline>
            Productmode
          </Headline>
        </div>
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
		<div className="mt-3"></div>
		<Contacts/>
      </Page>
    </Layout>
  );
}
