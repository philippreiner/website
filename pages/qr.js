import NextImage from "next/image";
import Layout from "@components/layout";
import { Container, Homelink, WorkCard} from "@components/atoms"
import Contacts from "@components/contacts"
import NextLink from "next/link";
import { Tagline } from "@components/about";
import philipp from '../public/static/philipp-reiner.jpg'


export default function Home({ allPostsData }) {
  return (
    <Layout>
		<Container size="max-w-screen-md">
		<div className="py-4 md:py-8">
			<Homelink/>
			<div className="pt-4 pb-2">I'm Philipp, a software developer turned entrepreneur. Nice to meet you.</div>
			<Contacts/>
			<div className="pt-4 md:pt-8">
			<h3 className="font-heading text-xl pb-2 md:pb-4">We talked about..</h3>
			<a href="https://www.maxe.io" target="_blank">
				<WorkCard title="🔧 Maxe Smart Service" label="Prototype for a smart, collaborative machine logbook I'm working on. Let's shape the roadmap."/>
			</a>
			<a href="mailto:mail@philippreiner.info">
				<WorkCard title="📖 Build greating Software" label="How do non-tech people build great software on the first try? Tell me your experience."/>
			</a>
			<a href="/cv.pdf" target="_blank">
				<WorkCard title="🤝 Working with me" label="I'm open for new challenges. Download my CV to learn more."/>
			</a>
			<NextLink href="/eaas">
				<a className="">
					<WorkCard title="👀 EaaS Landscape" label="Researched 170 companies in my widely shared landscape. Shall I add you as well?"/>
				</a>
			</NextLink>
			</div>
			<div className="pt-4 md:pt-8">
			<h3 className="font-heading text-xl pb-2 md:pb-4">We meet...</h3>
				<ul className="flex flex-col space-y-1.5">
					<li>Hinterland of Things 2022</li>
					<li>Hannover Messe 2022</li>
					<li>Controll Stuttgart 2022</li>
				</ul>
			</div>
		</div>
		</Container>

    </Layout>
  );
}
