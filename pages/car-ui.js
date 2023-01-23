import Head from "next/head";
import Layout from "../components/layout";
import Styles from "../styles/post.module.css";
import { getContent } from "../lib/content";
import { Container, Homelink} from "@components/atoms";
import NextImage from "next/image"
import Contacts from "@components/contacts"

import landscape from '../public/share/car-ui.jpg'


export async function getStaticProps({ params }) {
  const content = await getContent("car-ui");
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
        <title>Automotive HMI and future CAR Ui Moodboard</title>
        <meta property="og:image" content="/share/car-ui.jpg"/>
        <meta property="og:image:alt" content="Overview image with different car UI"/>
        <meta property="og:title" content="Automotive HMI and future CAR Ui Moodboard"/>
        <meta name="description" content="Current (2023) automotive and car user interfaces from tesla to volkswagen"/>
      </Head>
      
	
      <Container size="max-w-screen-2xl">
        <div className="py-4 md:py-8 flex items-center justify-between flex-wrap">
          <Homelink/>
          <h1 className="w-full md:w-auto md:text-paper-900 dark:md:text-slate-500 text-center pt-8 md:py-4 font-heading">“Driven by Software” Car UI Moodboard</h1>
        </div>
      </Container>
        <section className="p-1 md:px-4 md:pb-8 lg:py-12 lg:max-w-screen-2xl m-auto">
            <figure className="">
              <a href="/share/car-ui.jpg" target="_blank">
              <NextImage
                width="1920"
                height="1080"
                quality="75"
                src={landscape}
                alt="Infographic listing "
                placeholder="blur"
                className="object-scale-down rounded shadow-paper-700/30 dark:shadow-slate-900/90 shadow-lg"
              />
              <span className="md:hidden text-center block pt-1 text-paper-500 dark:text-slate-500 text-xs">Click for 100%</span>
              </a>
              <figcaption className="sr-only">Overview of 20 infotainment UIs from car companies showing the lateset automotive car touch software trends.</figcaption>
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
