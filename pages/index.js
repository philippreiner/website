import NextImage from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Layout from "@components/layout";
import { Container, Minilogo, Subline} from "@components/atoms"
import Contacts from "@components/contacts"
import NextLink from "next/link";
import { Blogpost } from "@components/blog"
import { Tagline } from "@components/about";

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
					<Tagline/>
				</div>
				<div className="pb-4 md:pb-6">
					<Subline>
						Software should make our life easier, not more complicated. At <a rel="noreferrer" target="_blank" href="https://www.planb.net" class="hover:underline opacity-100 text-planb whitespace-nowrap"><Minilogo name="planb"/>PlanB.</a>, I enable companies to build market-leading digital products and adapt an agile mindset. Earlier I've co-founded <a rel="noreferrer" target="_blank" href="https://www.conclurer.com" class="hover:underline text-black dark:text-white whitespace-nowrap"><Minilogo name="conclurer"/>Conclurer</a>, where my team developed a modular approach to industry 4.0 software and learned alot.
						&nbsp;<NextLink href="/blog/conversation-starter">
							<a class="underline">Learn more</a>
						</NextLink>
					</Subline>
				</div>
				<div className="pb-6 md:pb-10 lg:pb-12">
					<Contacts/>
				</div>
				<div className="pt-6 md:pt-10 lg:pt-12 border-t-2 border-gray-200 dark:border-gray-800">	
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
		</div>
	</Container>

    </Layout>
  );
}
