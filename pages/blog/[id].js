import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";

import Page from "../../components/page";
import Styles from "../../styles/post.module.css";
import Head from "next/head";

import { Subline, InlineHeading, Headline} from "@components/atoms"

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export default function Post({ postData }) {
  var title = postData.title + ' - Philipp Reiner'

  return (
    <Layout>
      <Head>
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta property="og:description" content={postData.slogan} />
        <meta property="og:image" content={postData.image} />
      </Head>
      <Page>
        <div className="pb-4">
          <Headline>
              <InlineHeading>
                {postData.title}
              </InlineHeading>
          </Headline>
        </div>
        <div className={Styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <p className="text-gray-500">
        Veröffentlicht {postData.date}
        </p>
      </Page>
    </Layout>
  );
}
