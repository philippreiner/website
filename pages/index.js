import NextImage from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Layout from "@components/layout";
import { Container, Minilogo, Subline, InlineHeading, Headline} from "@components/atoms"
import Contacts from "@components/contacts"
import NextLink from "next/link";
import { Blogpost } from "@components/blog"

import { Fade } from "react-awesome-reveal";

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
		<Container>
			<div className="pt-4 sm:pt-16">
				<div className="py-4 md:pb-8 w-24 sm:w-32 md:w-40">
					<NextImage
						width="120"
						height="120"
						quality="70"
						src="/static/philipp-reiner.jpg"
						alt="Philipp Reiner"
						className="object-scale-down rounded-lg"
					/>
				</div>
				<div className="pb-4 md:pb-6">
					<Headline>
						<InlineHeading>Philipp Reiner&nbsp;</InlineHeading>
						is an expert for digital business models. I combine strategy, user experience and software to create a sustainable future today.
					</Headline>
				</div>
				
				<div className="pb-4 md:pb-6">
					<Subline>
						Software should make our life easier, not more complicated. At <a target="_blank" href="https://www.planb.net" class="hover:underline opacity-100 text-planb whitespace-nowrap"><Minilogo name="planb"/>PlanB.</a>, I enable companies to build market-leading digital products and adapt an agile mindset. Earlier I've co-founded <a target="_blank" href="https://www.conclurer.com" class="hover:underline text-black dark:text-white  whitespace-nowrap"><Minilogo name="conclurer"/>Conclurer</a>, where my team developed a modular approach to industry 4.0 software and learned alot.
					</Subline>
				</div>
				<div className="pb-8 md:pb-12 lg:pb-14">
					<Contacts/>
				</div>
				<Fade cascade delay="50" triggerOnce>
					<div className="pt-8 border-t-2 border-gray-200 dark:border-gray-800 md:pt-16">	
						{allPostsData.map(({ id, title, image, slogan, fav, language }) => (
							fav != false && <Blogpost title={title} id={id} language={language} image={image} desc={slogan}/>
						))}
						&nbsp;
					</div>
					<div className="-mt-4">
						<NextLink href="/blog">
							<a class="text-gray-500 underline">All Posts</a>
						</NextLink>
					</div>
				</Fade>
		</div>
	</Container>

    </Layout>
  );
}
