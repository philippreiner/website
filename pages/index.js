import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout>

          {allPostsData.map(({ id, title, date, fav }) => (
            <NextLink href={`/blog/${id}`} passHref>
                    {title}  
            </NextLink>
          ))}
    </Layout>
  );
}
