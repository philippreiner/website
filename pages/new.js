import NextImage from "next/image";
import NextLink from "next/link";
import Head from "next/head";

import { getContent } from "../lib/content";

import Layout from "@components/layout";
import { Section, Card, Title, SectionContainer, SectionLine, SectionContent} from "@components/elements";
import { Contacts } from "@components/social";

import blurLightSvg from '../public/static/blur-light.svg'
import { about, image, topics, experience} from "@content/about";

export async function getStaticProps() {
    // Get markdown content
    const bio = await getContent("about");

  // Pass the data as props
    return {
    props: {
        bio
        },
    };
  }

export default function Home({ bio}) {
    const title = `${about.name} - ${about.subtitle}`;
  return (
      <Layout>
        <Head>
            <title>{title}</title>
            <meta property="og:image" content="/static/reiner-web.jpg"/>
            <meta property="og:image:alt" content={`${about.name} Portrait`}/>
        </Head>
        <div className="top-0 left-0 right-0 -z-10 fixed md:opacity-90">
            <div className="dark:hidden">
                <NextImage src={blurLightSvg} />
            </div>
        </div>
        <Section>
            <SectionContent>
                <div className="my-6 mt-10 md:my-8 lg:my-10 lg:mt-16">
                    <Title size="h1">
                        <span className="text-primary dark:text-highlight">{about.name}</span>
                        &nbsp;{about.headline}
                    </Title>
                    <Contacts className="mt-3 md:mt-6"/>
                </div>
            </SectionContent>
        </Section>        
        <SectionLine className="my-3"/>
        <Section className="py-3 md:py-6 lg:py-10">
            <div className="col-span-2 flex justify-center">
                <figure className="profile-picture md:w-full">
                    <NextImage
                        width="400"
                        height="578"
                        quality="75"
                        src={image}
                        alt={`${about.name} Portrait`}
                        placeholder="blur"
                        className="dark:grayscale shadow-paper-700/20 dark:shadow-slate-900/90 shadow-lg rounded aspect-square md:aspect-auto object-cover object-top w-full max-w-[160px] -mt-[50px] sm:-mt-0 md:max-w-none"
                    />
                    <figcaption className="sr-only">{about.name} Portrait</figcaption>
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
        <SectionLine className="my-3"/>
        <Section className="py-3 md:py-6 lg:py-10">
            <SectionContainer>
                <Title>Exploring</Title>
            </SectionContainer>
        </Section>
        <Section>
            <SectionContent className="grid md:grid-cols-2 gap-8">
            {topics.map((project, index) => (
            <NextLink href={project.url}>
                <Card key={index}>
                    <div className="mb-4">
                    <NextImage
                        width="250"
                        height="141"
                        quality="75"
                        src={`/share/${project.name}.jpg`}
                        alt={project.title}
                        placeholder="blur"
                        blurDataURL={project.thumb}
                        className=""
                    />
                    </div>
                    <h3 className="">{project.title}</h3>
                </Card>
            </NextLink>
            ))}
            </SectionContent>
        </Section>
        <Section className="py-3 md:py-6 lg:py-10">
            <SectionContainer>
                <Title>Experience</Title>
            </SectionContainer>
        </Section>
        <Section>
        <SectionContent className="grid grid-cols-1 gap-4">
            {experience.map((ex, index) => (
            <NextLink href={ex.url} target="_blank">
                    <div className="py-3 flex items-center space-beteween rounded group">
                        <div className="grow">
                            <h3 className="font-heading decoration-2 flex items-center">
                                {ex.title} 
                                <span className="text-xs font-sans bg-paper-300 dark:bg-slate-800 dark:text-gray-300 text-paper-700 py-1 px-1.5 ml-1.5 rounded">{ex.time}</span>
                            </h3>
                            <span className="text-paper-800 dark:text-gray-500">{ex.desc}</span>
                        </div>
                    </div>
            </NextLink>
            ))}
            <div className="mt-3 md:mt-6">
                <NextLink className="font-bold text-primary dark:text-highlight underline" href="/projects">
                    View Projects
                </NextLink>
            </div>
            </SectionContent>
        </Section>
        <SectionLine className="my-10"/>
      </Layout>
  );
}

