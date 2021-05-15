import Head from "next/head";
import Layout from "../components/layout";
import Page from "../components/page";
import Styles from "../styles/post.module.css";
import { getContent } from "../lib/content";

import NextImage from "next/image"

export async function getStaticProps({ params }) {
  const content = await getContent("about");
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
        <title>About Philipp Reiner</title>
      </Head>
      <Page>
        <div className="pb-4 md:pb-8">
					<NextImage
						width="200"
						height="200"
						quality="70"
						src="/static/philipp-reiner.jpg"
						alt="Philipp Reiner"
						className="object-scale-down rounded-lg"
					/>
				</div>
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Page>
    </Layout>
  );
}
