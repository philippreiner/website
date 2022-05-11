import Head from "next/head";
import Layout from "../components/layout";
import { getContent } from "../lib/content";
import { Container, Homelink} from "@components/atoms";
import NextImage from "next/image"
import Contacts from "@components/contacts"

import landscape from '../public/share/eaas-landscape.jpg'
import examples from '../public/share/industry-software.jpg'


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
        <title>Future Manufacturing Business Models.</title>
      </Head>
      
	
      <Container size="max-w-screen-2xl">
        <div className="py-4 md:py-8">
          <Homelink/>
        </div>
        <div className="py-1">
        <p className="text-gray-500 mb-4">The EaaS landscape collects around 170 industrial manufacturing OEMs that use software and new business models to grew their revenue. It is not yet complete but still shows that most manufacturing companies have become software developers. As the graphic is widely shared, I receive lots of feedback (and learned alot). I'm always happy to hear your opionion, answer questions or add another example to the landscape. You can also find my <a href="/share/eaas-definition.jpg" className="underline decoration-2">cluster explainer here</a>.</p>
        <NextImage
						width="1920"
						height="1080"
						quality="80"
						src={landscape}
						alt="Infographic with many company logos clustered into new types of business models"
						placeholder="blur"
						className="object-scale-down rounded"
					/>

        <p className="text-gray-500 mt-8 mb-4">In addition I clustered the software offerings of the manufacturing companies based on public examples.</p>
        <NextImage
						width="1920"
						height="1080"
						quality="80"
						src={examples}
						alt="Infographic that explains the five cluster of the landscape"
						placeholder="blur"
						className="object-scale-down rounded"
					/>
        <p className="text-gray-500 mt-8 mb-4">Any questions or feedback? Just contact me.</p>
         <Contacts/>
        </div>

      </Container>
    </Layout>
  );
}
