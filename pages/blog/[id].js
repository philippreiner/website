import { getAllPostIds, getPostData } from "../../lib/posts";
import NextLink from "next/link";
import Layout from "../../components/layout";
import Page from "../../components/page";

import { Heading } from "@chakra-ui/react";

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
  return (
    <Layout>
      <Page>
        <Heading as="h1" size="2xl">
          {postData.title}
        </Heading>

        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <br />
      </Page>
    </Layout>
  );
}
