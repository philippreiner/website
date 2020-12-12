import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";
import About from "../../components/about";
import Page from "../../components/page";
import Styles from "../../styles/post.module.css";
import Head from "next/head";

import { Heading, Text, Box } from "@chakra-ui/react";

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
  const title = postData.title + ' - Philipp Reiner'
  return (
    <Layout>
      <Head>
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta property="og:image" content={postData.image} />
      </Head>
      <Page>
        <Heading as="h1" pt="4" size="2xl">
          {postData.title}
        </Heading>
        <Heading
          as="p"
          pb="4"
          pt="4"
          size="lg"
          fontWeight="400"
          color="gray.500"
        >
          {postData.slogan}
        </Heading>
       
          <div className={Styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Text pt="2" textAlign="right" pb="8" color="gray.500">
        Veröffentlicht {postData.date}
        </Text>
        <About></About>
      </Page>
    </Layout>
  );
}
