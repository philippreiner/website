import NextImage from "next/image";
import Head from "next/head";
import Layout from "@components/layout";
import { Container, WorkFrame, Subline, SectionTitle} from "@components/atoms"
import Contacts from "@components/contacts"
import NextLink from "next/link";
import { Tagline } from "@components/about";

import philipp from '../public/static/reiner-web.jpg'
import blurDarkSvg from '../public/static/blur-dark.svg'
import blurLightSvg from '../public/static/blur-light.svg'
import carThumb from '../public/share/car-ui.jpg'
import eaasThumb from '../public/share/eaas-landscape.jpg'

export default function Home() {
  return (
      <Layout>
        <Head>
            <title>Philipp Reiner - Management Consultant</title>
            <meta property="og:image" content="/static/reiner-web.jpg"/>
            <meta property="og:image:alt" content="Philipp Reiner Portrait"/>
        </Head>
        <div className="top-0 left-0 right-0 -z-10 fixed md:opacity-90">
            <div className="dark:hidden">
                <NextImage src={blurLightSvg} />
            </div>
            <div className="hidden dark:block">
                <NextImage src={blurDarkSvg} />
            </div>
        </div>
          <Container size="max-w-6xl">
            <div className="md:grid md:grid-cols-[3fr,6fr] md:gap-12 lg:gap-12 pt-6 md:pt-20 lg:pt-32">
               <aside className="">
                <div className="lg:sticky top-6 mb-6">
                    <div className="flex justify-center w-full md:mb-3">
                        <figure className="profile-picture md:w-full">
                        <NextImage
                            width="400"
                            height="578"
                            quality="75"
                            src={philipp}
                            alt="Philipp Reiner Portrait"
                            placeholder="blur"
                            className="shadow-paper-700/20 dark:shadow-slate-900/90 shadow-lg md:rounded-lg rounded-full aspect-square md:aspect-auto object-cover object-top w-full max-w-[220px] md:max-w-none"
                        />
                        <figcaption className="sr-only">Philipp Reiner an Engineering Manager at work.</figcaption>
                        </figure>
                    </div>
                    <div className="hidden mt-6">
                        <Contacts direction={"col"}/>
                    </div>
                </div>
               </aside>
                <main className="lg:pr-[36px] xl:pr-[96px]">
                    <section className="md:pt-3">
                        <Tagline/>
                        <div className="py-3 md:py-6 lg:py-8">
                            <Subline>
                            Hi, I'm Philipp. My biggest strength is to understand complex challenges fast, break them down and find straight-forward solutions. I believe Software should make our life easier, not more complicated.
                            </Subline>
                            <Subline>
                                Beside work, I enjoy capturing moments with my cameras, explaining electric cars and go on a local hike. <NextLink href="/conversation-starter"  className="text-paper-800 dark:text-slate-500 hover:underline decoration-2">More about me.</NextLink>
   
                            </Subline>
                            <div className="py-3">
                                <Contacts/>
                            </div>
                        </div>
                    </section>
                    <section className="py-3 md:py-6">
                        <SectionTitle>Now</SectionTitle>
                        <a href="https://www.accenture.com" target="_blank">
                            <WorkFrame title="Manager at Accenture" label="Leading transformation projects within the Speciality Finance Area"/>
                                </a>

                    </section>
                    <section className="py-3 md:py-6">
                    <SectionTitle>Exploring</SectionTitle>
                    <NextLink href="/eaas">

<WorkFrame title="Equipment-as-a-Service Landscape" label="Researching industrial companies service offerings" image={<NextImage src={eaasThumb} placeholder="blur" width="96" height="54"/>}/>

</NextLink>

<NextLink href="/car-ui">

<WorkFrame title="Driven by Software - Automotive UIs" label="Collecting trends in car software" image={<NextImage src={carThumb} placeholder="blur" width="96" height="54"/>}/>

</NextLink>




                   
                    </section>
                    <section className="py-3 md:py-6">
                    <SectionTitle>Past Experience</SectionTitle>
                    <a href="https://www.planb.net" target="_blank">
                            <WorkFrame title="Engineering Manager at PlanB." label="Empower developers, building software and consulting customers"/>
                                </a>
                    <a href="https://www.conclurer.com"  target="_blank">
                      <WorkFrame title="Co-Founder Conclurer" label="Build a low-code industry 4.0 software, consulted SMBs" />
                  </a>
                  <a href="https://www.maxe.io"  target="_blank">
                      <WorkFrame title="Maxe Smart Service" label="Collaborative platform that automates industrial after sales"/>
                  </a>
                  <NextLink prefetch={false} href="/productmode" >
                                    <WorkFrame title="AI Product Owner"  label="Using Automation and AI to build great software on the first try"/>
                                </NextLink>
                                <a href="https://www.heidenheim.dhbw.de"  target="_blank">
                      <WorkFrame title="Lecture Students" label="Teaching Supply Chain Management and Programming"/>
                  </a>
                  <a href="https://www.workre.al" >
                            <WorkFrame title="WorkReal"  label="Understand how teams at work are feeling (Mood Tracker)"/>
                         </a>

                  <a href="https://www.heidenheimerleben.de"  target="_blank">
                      <WorkFrame title="HDH Erleben" label="Quickly launched a local livestream shopping experience"/>
                  </a>
                  <a href="https://www.futureofmanufacturing.io"  target="_blank">
                      <WorkFrame title="Future of Manufacturing" label="Shared my knowledge as one of the first members"/>
                  </a>
                  <WorkFrame title="Kwest" label="Created Digital Manufacturing workshops for Kwest Inc."/>
                  <WorkFrame title="Nearstage" label="Founded and sold an up-selling ticketing solution for festivals"/>

                  <WorkFrame title="Bachelor Thesis" label="Researched Analytics dashboards for purchasing departments"/>
          
                    </section>
                </main>
            </div>
      </Container>

      </Layout>
  );
}
