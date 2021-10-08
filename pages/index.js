import NextImage from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Layout from "@components/layout";
import { Container, Minilogo, Subline} from "@components/atoms"
import Contacts from "@components/contacts"
import NextLink from "next/link";
import { Blogpost } from "@components/blog"
import { Tagline } from "@components/about";
import philipp from '../public/static/philipp-reiner.jpg'

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
			<div className="pt-4 sm:pt-10">
				<div className="py-4 md:-ml-8 md:-mr-8 md:pb-8">
					<NextImage
						width="1600"
						height="1000"
						quality="80"
						src={philipp}
						alt="Philipp Reiner"
						placeholder="blur"
						className="object-scale-down rounded-sm"
					/>
				</div>
				<div className="pb-4 md:pb-6">
					<Tagline/>
				</div>
				<div className="pb-4 md:pb-6">
					<Subline>
						Software should make our life easier, not more complicated. At <a rel="noreferrer" target="_blank" href="https://www.planb.net" class="hover:underline opacity-100 text-planb whitespace-nowrap"><Minilogo name="planb"/>PlanB.</a>, I enable companies to build market-leading digital products and adapt an agile mindset. Earlier I've co-founded <a rel="noreferrer" target="_blank" href="https://www.conclurer.com" class="hover:underline text-black dark:text-white whitespace-nowrap"><Minilogo name="conclurer"/>Conclurer</a>, where my team developed a modular approach to industry 4.0 software and learned alot.
			
						<NextLink href="/blog/conversation-starter">
							<a className="hover:underline text-gray-500 ml-2">Learn more about me</a>
						</NextLink>
					</Subline>
				</div>
				<div className="pb-6 md:pb-10 lg:pb-12">
					<Contacts/>
				</div>
				<div className="border-t-2 md:-ml-8 md:-mr-8 border-gray-100 dark:border-gray-800"></div>
				<div className="pt-6 md:pt-10 lg:pt-12">	
					{allPostsData.map(({ id, title, image, slogan, fav, language }) => (
						fav != false && <Blogpost title={title} id={id} language={language} image={image} desc={slogan}/>
					))}
					&nbsp;
				</div>
				<div className="-mt-4">
					<NextLink href="/blog">
						<a className="text-gray-500 hover:underline">All Posts</a>
					</NextLink>
				</div>
		</div>
	</Container>

    </Layout>
  );
}
