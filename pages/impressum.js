import Head from "next/head";
import Layout from "../components/layout";
import Page from "../components/page";
import Styles from "../styles/post.module.css";
import { getContent } from "../lib/content";
import { Headline, LanguagePill} from "@components/atoms"

export async function getStaticProps({ params }) {
  const content = await getContent("impressum");
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
        <title>Imprint</title>
      </Head>
      <Page>
        <div className="pb-4">
          <Headline>
            Imprint / Impressum
            
          </Headline>
        </div>
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Page>
    </Layout>
  );
}
