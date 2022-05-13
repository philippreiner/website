import { getSortedPostsData } from "../../lib/posts";
import Layout from "@components/layout";
import { Heading } from "@components/atoms"
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
      <Heading>
        All Posts
      </Heading>
			<div className="pt-4 md:pt-8">
					{allPostsData.map(({ id, title, image, slogan, fav, language }) => (
						<Blogpost title={title} id={id} language={language} image={image} desc={slogan}/>
					))}
			</div>
     	</Page>
    </Layout>
  );
}
