import NextImage from "next/image";
import Head from "next/head";
import Layout from "@components/layout";
import { Container, WorkFrame, PastWorkFrame, Subline, SectionTitle} from "@components/atoms"
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
                                Beside work, I enjoy capturing moments with my cameras, explaining electric cars and go on a local hike. 
                                <NextLink href="/conversation-starter"  className="text-paper-800 dark:text-slate-500 hover:underline decoration-2">More about me.</NextLink>
   
                            </Subline>
                            <div className="py-3">
                                <Contacts/>
                            </div>
                        </div>
                    </section>
                    <section className="py-3 md:py-6">
                        <SectionTitle>Experience</SectionTitle>
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
                    <SectionTitle>Projects</SectionTitle>
                    
                <a href="https://www.maxe.io"  target="_blank">
                    <WorkFrame title="Maxe Smart Service" label="Collaborative platform that automates industrial after sales"/>
                </a>
                <NextLink href="/productmode" >
                        <WorkFrame title="AI Product Owner"  label="Using Automation and AI to build great software on the first try"/>
                 </NextLink>
                <WorkFrame title="Quality Platform" label="Product Management for a new, unified manufacturing solution"/>
                <WorkFrame title="B2B Shop" label="Product Management around various pricing and ordering apps"/>
                <WorkFrame title="IoT App" label="Refined strategy for a IoT solution for regulated markets"/>
                <WorkFrame title="Service Portals" label="Shipped monitoring, service and after-sales portals (B2B)"/>
                <WorkFrame title="Maintenance Workflows" label="Build software to support maintenance tasks on the shopfloor"/>
                <WorkFrame title="Cloud Hosting" label="Developed a 1-click deployment for an Open Source CMS"/>
                <a href="https://www.heidenheim.dhbw.de"  target="_blank">
                    <WorkFrame title="University Lecturer" label="Teaching Supply Chain Management and Web Programming"/>
                </a>
                <a href="https://www.workre.al" >
                    <WorkFrame title="WorkReal"  label="Understand how teams at work are feeling (Mood Tracker)"/>
                </a>
                <a href="https://www.heidenheimerleben.de"  target="_blank">
                      <WorkFrame title="Heidenheim Erleben" label="Launched a local livestream shopping experience during Covid"/>
                  </a>
                <WorkFrame title="Future of Manufacturing" label="Created Digital Manufacturing workshops for a startup"/>
                <WorkFrame title="Nearstage" label="Founded and sold an up-selling ticketing solution for festivals"/>
                <WorkFrame title="Bachelor Thesis" label="Researched Analytics dashboards for purchasing departments"/>
          
                    </section>
                </main>
            </div>
      </Container>

      </Layout>
  );
}
