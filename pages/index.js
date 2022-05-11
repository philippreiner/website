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
					I'm Philipp, a software developer turned entrepreneur. My biggest strength is to understand complex challenges superfast, breaking them down and create simple but powerful solutions. I believe Software should make our life easier, not more complicated.
					</Subline>
				</div>
				<div className="pb-6 md:pb-10 lg:pb-12">
					<Contacts/>
				</div>

				<div className="pb-6">
					<h3 className="font-heading text-2xl">Now</h3>
				</div>
				<div className="pb-6 md:pb-12">
				<a href="https://www.planb.net" target="_blank">
					<WorkCard title="Engineering Manager at PlanB." label="Leading developers, manage customer expectations and establish an agile mindset"/>
				</a>
				<a href="https://www.maxe.io" target="_blank">
					<WorkCard title="Maxe Smart Service" label="Exploring new business models with collaborative service software"/>
				</a>
				<WorkFrame title="Productmode" label="How can non-tech companies build great software on the first try?"/>
				<NextLink href="/eaas" className="hover:underline decoration-2">
					<a>
						<WorkFrame title="Equipment-as-a-Service" label="Researched 140 companies in my widely shared landscape"/>
					</a>
				</NextLink>
				</div>


				<div className="pb-6">
					<h3 className="font-heading text-2xl">Past Experience</h3>
				</div>
				<div className="pb-6 md:pb-12">
				<a href="https://www.conclurer.com"  className="hover:underline decoration-2" target="_blank">
					<WorkFrame title="Founded Conclurer" label="Build and sold a low-code industry 4.0 software to 40 customers" />
				</a>
				<WorkFrame title="Metrology" label="Combined 5 teams and solutions into one innovative platform" />
				<a href="https://www.heidenheimerleben.de"  className="hover:underline decoration-2" target="_blank">
					<WorkFrame title="HDH Erleben" label="Quickly launched a local livestream shop for 100k visitors"/>
				</a>
				<a href="https://www.futureofmanufacturing.io"  className="hover:underline decoration-2" target="_blank">
					<WorkFrame title="Future of Manufacturing" label="Shared my knowledge as one of the first members"/>
				</a>
				<WorkFrame title="Aveo" label="Created Digital Manufacturing workshops for Aveo"/>
				<a href="https://www.cuse.io"  className="hover:underline decoration-2" target="_blank">
					<WorkFrame title="Predictive Service" label="Developed a predictive maintenance prototype"/>
				</a>
				<WorkFrame title="Nearstage" label="Founded an up-selling ticketing solution for festivals, sold 60k tickets"/>
				<a href="https://www.heidenheim.dhbw.de"  className="hover:underline decoration-2" target="_blank">
					<WorkFrame title="Lecture Students" label="Teached about Supply Chain Management and Web-Programming"/>
				</a>
				<WorkFrame title="Bachelor Thesis" label="Researched Analytics dashboards for purchasing departments"/>
				</div>
				
				<div className="pb-6">
					<h3 className="font-heading text-2xl text-gray-500 pb-6">Learn more</h3>
					<NextLink href="/blog/conversation-starter" className="hover:underline decoration-2">
						<a>
							<WorkFrame title="Conversation starters"/>
						</a>
					</NextLink>
					<NextLink href="/blog" className="hover:underline decoration-2">
						<a>
							<WorkFrame title="Blogposts"/>
						</a>
					</NextLink>
				</div>
		</div>
	</Container>

    </Layout>
  );
}
