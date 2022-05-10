import NextImage from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Layout from "@components/layout";
import { Container, WorkCard, WorkFrame, Subline} from "@components/atoms"
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
						className="object-scale-down rounded"
					/>
				</div>
				<div className="pb-4 md:pb-6">
					<Tagline/>
				</div>
				<div className="pb-4 md:pb-6">
					<Subline>
					Hi. I'm a software developer turned business guy. My biggest strength is to understand complex challenges superfast, breaking them down and create simple but powerful solutions. I believe Software should make our life easier, not more complicated.
					</Subline>
				</div>
				<div className="pb-6 md:pb-10 lg:pb-12">
					<Contacts/>
				</div>

				<div className="md:-ml-8 md:-mr-8 pb-6">
					<h3 className="font-heading text-2xl">Now</h3>
				</div>
				<div className="md:-ml-8 md:-mr-8 pb-6">
				<WorkCard title="Build great Software on the First Try" label="Thinking how non-tech companies can build software and adapt an agile mindset"/>
				<WorkCard title="Exploring business models and software for the industrial service" label="Research business models and developing collaborative software"/>
				<WorkFrame title="Working at PlanB managing customers and our growing company"/>
				<WorkFrame title="Research Equipment-as-a-Service in my widely shared Landscape"/>
				</div>


				<div className="md:-ml-8 md:-mr-8 pb-6">
					<h3 className="font-heading text-2xl">Past Experience</h3>
				</div>
				<div className="md:-ml-8 md:-mr-8 pb-6">
				<WorkFrame title="Founded Conclurer, a low-code industry 4.0 SaaS and grew to 15 people"/>
				<WorkFrame title="Build a metrology software and researched new solutions in this market"/>
				<WorkFrame title="Developed a regional ecommerce platform around livestreams during Covid-19"/>
				<WorkFrame title="Lecture Students about Supply Chain Strategies and Web Programming"/>
				<WorkFrame title="Developed a predictive maintenance prototype for SMBs"/>
				<WorkFrame title="Founded and sold Nearstage, an up-selling ticketing solution for festivals"/>
				<WorkFrame title="Created Digital Manufacturing workshops for Kwest"/>
				<WorkFrame title="Shared knowledge with the Future of Manufacturing Community"/>
				<WorkFrame title="Bachelor Thesis about BI dashboard for purchasing departments"/>
				</div>

				<div className="hidden border-t-2 md:-ml-8 md:-mr-8 border-gray-100 dark:border-gray-800"></div>
				<div className="hidden pt-6 md:pt-10 lg:pt-12">	
					{allPostsData.map(({ id, title, image, slogan, fav, language }) => (
						fav != false && <Blogpost title={title} id={id} language={language} image={image} desc={slogan}/>
					))}
					&nbsp;
				</div>
				<div className="-mt-4 hidden">
					<NextLink href="/blog">
						<a className="text-gray-500 hover:underline">All Posts</a>
					</NextLink>
				</div>
		</div>
	</Container>

    </Layout>
  );
}
