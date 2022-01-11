import Head from "next/head";
import Layout from "../components/layout";
import Page from "../components/page";
import Styles from "../styles/post.module.css";
import { getContent } from "../lib/content";
import { Container, Homelink} from "@components/atoms";
import NextImage from "next/image"

import image from '../public/photo/test1.jpg'

export async function getStaticProps({ params }) {
  const content = await getContent("about");
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
        <title>About Philipp Reiner</title>
      </Head>
      
	
      <Container size="max-w">
        <div className="py-4 pt-8 sm:pt-16 md:mb-8 ">
          <Homelink/>
        </div>
        <div className="py-1">
        <NextImage
						width="2000"
						height="1500"
						quality="80"
						src={image}
						alt="Some Test"
						placeholder="blur"
						className="object-scale-down rounded-sm"
					/>
        </div>
      </Container>
    </Layout>
  );
}
