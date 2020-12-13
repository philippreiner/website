import Head from "next/head";
import Layout from "../components/layout";
import Page from "../components/page";
import Styles from "../styles/post.module.css";
import { getContent } from "../lib/content";

import { Heading, Text, Box } from "@chakra-ui/react";

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
        <title>Über Philipp Reiner</title>
      </Head>
      <Page>
        <Heading as="h1" pt="4" pb="4" size="2xl">
          Über mich
        </Heading>
        <div
          className={Styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Page>
    </Layout>
  );
}
