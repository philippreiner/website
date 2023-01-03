import { getAllProjectIds, getProjectData } from "../lib/projects";
import Layout from "@components/layout";

import Styles from "../styles/post.module.css";
import Head from "next/head";
import Contacts from "@components/contacts";
import NextImage from "next/image";

import { Heading, Container, Homelink, } from "@components/atoms"

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}
export default function Project({ postData }) {
  var title = `${postData.title} - Philipp Reiner`

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={postData.slogan} />
        <meta property="og:image" content={postData.image} />
        <meta name="description" content={postData.slogan} />
      </Head>
      <Container size="max-w-screen-2xl">
        <div className="py-4 md:py-8 md:px-4">
          <Homelink/>
        </div>
        </Container>
      <Container size="max-w-screen-2xl">
          <div className="lg:grid gap-8 xl:gap-16 grid-cols-2 lg:grid-cols-5 md:px-4">
            <div className="lg:col-start-3 lg:col-span-3 pt-2 pb-4">
              <Heading>
              {postData.title}
              </Heading>
            </div>
            <aside className="pb-4 lg:col-span-2">
              <div className="lg:sticky top-4">
                <figure>
                  <NextImage
                    width="600"
                    height="400"
                    src={postData.image}
                    alt={title}
                    quality="75"
                    className="object-cover rounded-lg"
                  />
                </figure>
              </div>
            </aside>
            <main className="lg:col-span-3 2xl:pr-[120px] md:pb-16">
                <div className={Styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </main>
          </div>
      </Container>
          
    </Layout>
  );
}
