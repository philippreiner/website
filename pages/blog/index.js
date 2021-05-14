import NextImage from "next/image";
import { getSortedPostsData } from "../../lib/posts";
import Layout from "@components/layout";
import { Container, Subline, InlineHeading, Headline} from "@components/atoms"
import Contacts from "@components/contacts";
import Page from "@components/page";

import { Blogpost } from "@components/blog"


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
		<Page>
			<Headline>All Posts</Headline>
			<div className="pt-4 md:pt-8">
					{allPostsData.map(({ id, title, image, slogan, fav, language }) => (
						<Blogpost title={title} id={id} language={language} image={image} desc={slogan}/>
					))}
			</div>
     	</Page>
    </Layout>
  );
}
