import NextImage from "next/image";
import NextLink from "next/link";
import Head from "next/head";

import fs from 'fs';
import path from 'path';

import { getContent } from "../lib/content";

import Layout from "@components/layout";
import { Section, Card, Title, SectionContainer, SectionLine, SectionContent, SectionFull, Line} from "@components/elements";
import { Contacts } from "@components/social";
import philipp from '../public/static/reiner-web.jpg'
import { Container, WorkFrame, PastWorkFrame, Subline, SectionTitle} from "@components/atoms"


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
    const title = `${data.name} - ${data.subtitle}`;
  return (
      <Layout>
        <Head>
            <title>{title}</title>
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
                        alt={`${data.name} Portrait`}
                        placeholder="blur"
                        className="dark:grayscale shadow-paper-700/20 dark:shadow-slate-900/90 shadow-lg rounded aspect-square md:aspect-auto object-cover object-top w-full max-w-[160px] -mt-[50px] sm:-mt-0 md:max-w-none"
                    />
                    <figcaption className="sr-only">{data.name} Portrait</figcaption>
                </figure>
            </div>
            <div className="sm:col-span-3 sm:col-start-4 mt-8 sm:mt-0">
                <article className="markdown" dangerouslySetInnerHTML={{ __html: bio }} />
                <div className="markdown space-y-4 md:space-y-0 md:space-x-4 flex items-center mt-3 md:mt-6">
                    <NextLink href="/conversation-starter" >
                        Conversation Starter
                    </NextLink>
                </div>
            </div>
        </Section>
        <SectionLine className="my-4"/>
        <Section className="py-3 md:py-6 lg:py-12">
            <SectionContainer>
                <Title>Exploring</Title>
            </SectionContainer>
        </Section>
        <Section>
            <SectionContent className="grid md:grid-cols-2 gap-8">
                {data.exploring.map((project, index) => (
                    <Card key={index}>
                        <NextLink href={project.url}>
                            {project.title}
                        </NextLink>
                    </Card>
                ))}
            </SectionContent>
        </Section>
        <Section className="py-3 md:py-6 lg:py-12">
            <SectionContainer>
                <Title>Experience</Title>
            </SectionContainer>
        </Section>
        <Section>
            <SectionContent>
            <a href="https://www.accenture.com" target="_blank">
                            <WorkFrame 
                            title={<>Manager at Accenture <span className="text-xs font-sans bg-paper-300 text-paper-700 py-1 px-1.5 ml-1.5 rounded">Now</span></>} 
                            label="Leading transformation projects for specialty finance topics"/>
                                </a>
                        <a href="https://www.planb.net" target="_blank">
                            <WorkFrame title={<>Engineering Manager at PlanB <span className="text-xs font-sans bg-paper-300 text-paper-700 py-1 px-1.5 ml-1.5 rounded">2020-2023</span></>} label="Empowered developers, building software and defined product strategies"/>
                                </a>
                        <a href="https://www.conclurer.com"  target="_blank">
                      <WorkFrame title={<>Co-Founder Conclurer<span className="text-xs font-sans bg-paper-300 text-paper-700 py-1 px-1.5 ml-1.5 rounded">2011-2020</span></>} label="Delivered a low-code after-sales software for manufacturing OEMs" />
                        </a>

            </SectionContent>
        </Section>
      </Layout>
  );
}

