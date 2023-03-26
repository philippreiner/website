import NextImage from "next/image";

import Head from "next/head";
import Layout from "@components/layout";
import fs from 'fs';
import path from 'path';

import { getContent } from "../lib/content";

import { Section, Title, SectionContainer, SectionLine, SectionContent, SectionFull, Line} from "@components/elements";
import { Contacts } from "@components/social";
import philipp from '../public/static/reiner-web.jpg'


export async function getStaticProps() {
    // Read the JSON file
    const filePath = path.join(process.cwd(), 'public', 'about.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
  
    // Get markdown content
    const bio = await getContent("about");

  // Pass the data as props
    return {
    props: {
        data,
        bio
        },
    };
  }

export default function Home({data, bio}) {
  return (
      <Layout>
        <Head>
            <title>{data.name} - {data.subtitle}</title>
            <meta property="og:image" content="/static/reiner-web.jpg"/>
            <meta property="og:image:alt" content={`${data.name} Portrait`}/>
        </Head>
        <Section>
            <SectionContent>
                <div className="my-6 mt-10 md:my-10 lg:my-12 lg:mt-16 xl:mt-20">
                    <Title size="h1">
                        <span className="text-primary dark:text-highlight">{data.name}</span>
                        &nbsp;{data.headline}
                    </Title>
                    <Contacts data={data} className="md:pt-2"/>
                </div>
            </SectionContent>
        </Section>        
        <SectionLine className="my-4"/>
        <Section className="py-4 md:py-12">
            <div className="col-span-2 flex justify-center">
                <figure className="profile-picture md:w-full">
                        <NextImage
                            width="400"
                            height="578"
                            quality="75"
                            src={philipp}
                            alt="Philipp Reiner Portrait"
                            placeholder="blur"
                            className="dark:grayscale shadow-paper-700/20 dark:shadow-slate-900/90 shadow-lg rounded-lg  aspect-square md:aspect-auto object-cover object-top w-full max-w-[160px] -mt-[50px] sm:-mt-0 md:max-w-none"
                        />
                        <figcaption className="sr-only">{data.name} Portrait</figcaption>
                    </figure>
            </div>
            <div className="sm:col-span-3 sm:col-start-4 mt-8 sm:mt-0">
                <article className="prose sm:prose-lg dark:prose-invert prose-a:text-primary dark:prose-a:text-highlight prose-a:font-bold" dangerouslySetInnerHTML={{ __html: bio }} />
                <div className="flex items-center mt-3 md:mt-6">
                    <a href="">
                        Test
                    </a>
                </div>
            </div>
        </Section>
        <SectionLine className="my-4"/>
      </Layout>
  );
}

