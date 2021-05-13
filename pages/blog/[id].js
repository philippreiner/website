import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";

import Page from "../../components/page";
import Styles from "../../styles/post.module.css";
import Head from "next/head";

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
        <h1>
          {postData.title}
        </h1>
        <h2>
          {postData.slogan}
        </h2>
       
        <div className={Styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <p>
        Veröffentlicht {postData.date}
        </p>
      </Page>
    </Layout>
  );
}
