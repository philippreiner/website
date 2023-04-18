import React from 'react';
import axios from 'axios';

import Head from "next/head";
import { getContent } from "../lib/content";


import Layout from "@components/layout";
import { Header, Section, SectionContent, SectionLine, SectionContainer, Title} from "@components/elements";

const content = {
  'title':'Philipps Newsletter',
  'disclaimer': 'When you submit you agree to share your email with <a class="underline" href="https://buttondown.email/legal/privacy" target="_blank">ButtonDown</a>. They provide an awesome newsletter managing software and can use your data to send emails on my behalf. Email is only used for sending. No spam and you can unsubscribe anytime. '
};

export async function getStaticProps() {
  const desc = await getContent("newsletter");

  const API_KEY = process.env.NEXT_PUBLIC_BUTTONDOWN_API_KEY;
  let newsletters = [];

  try {
    const response = await axios.get(`https://api.buttondown.email/v1/emails?status=sent&order=-published&page_size=100`, {
      headers: {
        Authorization: `Token ${API_KEY}`,
      },
    });

    newsletters = response.data.results
    .map((newsletter) => ({
      id: newsletter.id,
      title: newsletter.subject,
      url: newsletter.absolute_url,
    }))
    .reverse();
  } catch (error) {
    console.error('Failed to fetch newsletters:', error.message);
  }

  return {
    props: {
      newsletters,
      desc
    },
    revalidate: false, // In seconds or false
  };
}



const Newsletters = ({ newsletters, desc }) => {
  if (newsletters.length === 0) {
    return <div>No newsletters found.</div>;
  }

  const title = content.title;

  return (
    <Layout>
      <Head>
          <title>{title}</title>
          <meta property="description" content="Philipps personal newsletter"/>
      </Head>
      <Header></Header>
      <Section className="py-6 md:py-10 lg:py-16">
        <SectionContent>
          <Title as="h1">{title}</Title>
        </SectionContent>
      </Section>
      <Section className="grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className='rounded p-3 md:p-6 lg:col-span-2 bg-primary text-white dark:bg-paper-300 dark:text-black'>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/reiner"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://buttondown.email/reiner', 'popupwindow')"
          className="flex flex-col space-y-1.5 md:space-y-3 py-1.5 md:py-3 lg:py-6"
        >

          <label for="bd-email" className=''>Your Email</label>
          <input type="email" name="email" id="bd-email" className='border-none bg-white/20 dark:bg-paper-400 p-3 md:py-3.5 rounded'/>
          <div>
            <input type="submit" value="Submit & Subscribe" className='bg-paper-100 text-black p-3 md:px-6 rounded-full cursor-pointer hover:bg-paper-300 dark:bg-primary dark:text-white dark:hover:bg-black dark:hover:text-white md:flex-inline w-auto'/>
          </div>
          <input type="hidden" name="tag" value="friend" />
          <p className='opacity-50 text-xs md:pt-3' dangerouslySetInnerHTML={{ __html: content.disclaimer }}></p>
        </form>
        </div>
        <div className='p-3 md:p-6 md:col-span-2 lg:col-span-3 bg-paper-300 rounded dark:bg-slate-800'>
          <article className="markdown" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      </Section>
      <Section className="py-3 md:py-6 md:pt-10 lg:py-10 lg:pt-16">
            <SectionContainer>
                <Title>Posts</Title>
            </SectionContainer>
        </Section>
      <Section>
          <SectionContent>
            <ul>
              {newsletters.map((newsletter) => (
                <li className='py-1.5 md:py-2' key={newsletter.id}>
                    <a className="font-bold hover:text-primary hover:dark:text-highlight hover:underline" href={newsletter.url} target="_blank" rel="noopener noreferrer">
                      {newsletter.title}
                    </a>
                </li>
              ))}
            </ul>
          </SectionContent>
      </Section>
      <SectionLine className="my-10"/>
    </Layout>
  );
};

export default Newsletters;