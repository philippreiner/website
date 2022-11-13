import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";

import Page from "../../components/page";
import Styles from "../../styles/post.module.css";
import Head from "next/head";
import About from "@components/about";

import { Heading } from "@components/atoms"

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
        <meta name="description" content={postData.slogan} />
      </Head>
      <Page>
        <div className="pb-4">
          <Heading>
            {postData.title}
          </Heading>
        </div>
        <article>
          <div className={Styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <div className="text-paper-900 dark:text-gray-500 text-sm pt-4 flex items-center">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="7.25" stroke="currentColor" stroke-width="1.5"></circle>
                  <path stroke="currentColor" strokeWidth="1.5" d="M12 8V12L14 14"></path>
                </svg>
                {postData.date}
          </div>
        </article>
        <div className="pt-2 pb-4">
          <About/>
        </div>


      </Page>
    </Layout>
  );
}
