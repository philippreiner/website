import Head from "next/head";
import Layout from "../components/layout";
import Page from "../components/page";
import Styles from "../styles/post.module.css";
import { getContent } from "../lib/content";
import { Headline} from "@components/atoms"

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
        <title>Impressum - Philipp Reiner</title>
      </Head>
      <Page>
        <div className="pb-4">
        <Headline>Impressum</Headline>
        </div>
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Page>
    </Layout>
  );
}
