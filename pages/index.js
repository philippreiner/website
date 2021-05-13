

import NextImage from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Layout from "@components/layout";
import { Container, Subline, InlineHeading, Headline} from "@components/atoms"
import Contacts from "@components/contacts"

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
		<Container>
			<div className="pt-4 sm:pt-16">
				<div className="py-4 md:pb-8 w-24 sm:w-32 md:w-40">
					<NextImage
						width="120"
						height="120"
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
						I believe that software should make our lives easier, not more complicated. At <a target="_blank" href="https://www.planb.net" class="hover:underline opacity-100 text-planb">PlanB.</a>, I enable companies to build market-leading digital products and adapt an agile mindset. Earlier Philipp co-founded <a target="_blank" href="https://www.conclurer.com" class="hover:underline text-black">Conclurer</a>, where his team developed a modular approach to industry 4.0 software and learned alot.
					</Subline>
				</div>
				<div className="pb-4 md:pb-6">
					<Contacts/>
				</div>
				<div className="pt-8 md:pt-16">

				{allPostsData.map(({ id, title, slogan }) => (
					<Blogpost title={title} id={id} desc={slogan}/>
				))}
				</div>

		</div>
	</Container>

    </Layout>
  );
}
