import Head from "next/head";
import Layout from "../components/layout";
import Styles from "../styles/post.module.css";
import { getContent } from "../lib/content";
import { Container, Homelink} from "@components/atoms";
import NextImage from "next/image"
import Contacts from "@components/contacts"

import landscape from '../public/share/eaas-landscape.jpg'

export async function getStaticProps({ params }) {
  const content = await getContent("eaas");
  return {
    props: {
      content,
    },
  };
}

export default function Eaas({ content }) {
  return (
    <Layout>
      <Head>
        <title>EaaS & Service 4.0 Landscape</title>
        <meta property="og:image" content="/share/eaas-landscape.jpg"/>
        <meta property="og:image:alt" content="Overview image of equipment as a service companies"/>
        <meta property="og:title" content="Equipment-as-a-Service & Service 4.0 Overview & Examples"/>
        <meta name="description" content="Overview of 200+ manufacturing OEMs that lead Software and Service based business models e.g. Equipment-as-a-Service"/>
      </Head>
      
	
      <Container size="max-w-screen-2xl">
        <div className="py-4 md:py-8 flex items-center justify-between flex-wrap">
          <Homelink/>
          <h1 className="w-full md:w-auto md:text-paper-900 dark:md:text-slate-500 text-center pt-8 md:py-4 font-heading">The “Equipment-as-a-Service” Landscape</h1>
        </div>
      </Container>
        <section className="p-1 md:px-4 md:pb-8 lg:py-12 lg:max-w-screen-2xl m-auto">
            <figure className="">
              <a href="/share/eaas-landscape.jpg" target="_blank">
              <NextImage
                width="1920"
                height="1080"
                quality="75"
                src={landscape}
                alt="Infographic with industrial company logos clustered into subscription and software business models"
                placeholder="blur"
                className="object-scale-down rounded shadow-paper-700/30 dark:shadow-slate-900/90 shadow-lg"
              />
              <span className="md:hidden text-center block pt-1 text-paper-500 dark:text-slate-500 text-xs">Click for 100%</span>
              </a>
              <figcaption className="sr-only">Overview of 200+ manufacturing OEMs that lead Software and Service based business models e.g. Equipment-as-a-Service at Siemens</figcaption>
            </figure>        
        </section>

        <Container>
          <article className="pt-4 lg:pt-8 lg:pb-16">
              <div
              className={Styles.content}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="pt-2">
             <Contacts/>
            </div>
          </article>
       </Container>
    </Layout>
  );
}
