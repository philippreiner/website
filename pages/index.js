import NextImage from "next/image";
import Layout from "@components/layout";
import { Container, WorkFrame, Subline, SectionTitle, DrawnLine} from "@components/atoms"
import Contacts from "@components/contacts"
import NextLink from "next/link";
import { Tagline } from "@components/about";
import philipp from '../public/static/reiner-web.jpg'

export default function Home() {
  return (
      <Layout>
          <Container size="max-w-5xl">
            <div className="md:grid md:grid-cols-[1fr,2fr] md:gap-12 lg:gap-12 pt-6 md:pt-20 lg:pt-32">
               <aside className="">
                <div className="lg:sticky top-6 mb-6">
                    <div className="flex justify-center w-full md:mb-3">
                    <NextImage
                            width="400"
                            height="578"
                            quality="75"
                            src={philipp}
                            alt="Philipp Reiner"
                            placeholder="blur"
                            className="md:rounded-lg rounded-full aspect-square md:aspect-auto object-cover object-top w-full max-w-[200px] md:max-w-none"
                        /> 
                    </div>
                    <div className="lg:block hidden">
                        <Contacts direction={"col"}/>
                    </div>

                </div>
               </aside>
                <main className="">
                    <section className="md:pt-3">
                        <Tagline/>
                        <div className="py-3 md:py-6 lg:py-8">
                            <Subline>
                            Hi, I'm Philipp. My biggest strength is to understand complex challenges fast, break them down and find straight-forward solutions. I believe Software should make our life easier, not more complicated.
                            </Subline>
                            <Subline>
                                Beside the digital stuff, I enjoy capturing moments with my cameras, explaining electric cars and go on a local hike. <NextLink href="/blog/conversation-starter"  className="text-primary hover:underline decoration-2">More about me.</NextLink>
   
                            </Subline>
                            <div className="lg:hidden py-3">
                                <Contacts/>
                            </div>
                        </div>
                    </section>
                    <section className="py-3 md:py-6">
                        <SectionTitle>Now</SectionTitle>
                        <a href="https://www.planb.net" className="hover:underline decoration-2" target="_blank">
                            <WorkFrame title="Engineering Manager at PlanB." label="Empower developers, building software and consulting customers"/>
                                </a>


                                <NextLink href="/eaas" className="hover:underline decoration-2">

                                    <WorkFrame title="Equipment-as-a-Service Landscape" label="Researching industrial companies service offerings"/>

                                </NextLink>


                    </section>
                    <section className="py-3 md:py-6">
                    <SectionTitle>Projects</SectionTitle>
                        <NextLink href="/productmode"  className="hover:underline decoration-2">
                                    <WorkFrame title="Productmode"  className="hover:underline decoration-2" label="Using AI and Automation to build great software on the first try"/>
                                </NextLink>
                                <a href="https://www.maxe.io"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="Maxe Smart Service" label="Collaborative platform for better industrial after sales"/>
                  </a>
                         <a href="https://www.workre.al"  className="hover:underline decoration-2">
                            <WorkFrame title="WorkReal"  className="hover:underline decoration-2" label="Understand how teams at work are feeling"/>
                         </a>

                   
                    </section>
                    <section className="py-3 md:py-6">
                    <SectionTitle>Past Experience</SectionTitle>
                    <a href="https://www.conclurer.com"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="Founded Conclurer" label="Build a low-code industry 4.0 software, consulted SMBs" />
                  </a>



                  <a href="https://www.heidenheimerleben.de"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="HDH Erleben" label="Quickly launched a local livestream shopping experience"/>
                  </a>
                  <a href="https://www.futureofmanufacturing.io"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="Future of Manufacturing" label="Shared my knowledge as one of the first members"/>
                  </a>
                  <WorkFrame title="Kwest" label="Created Digital Manufacturing workshops for Kwest Inc."/>
                  <WorkFrame title="Nearstage" label="Founded and sold an up-selling ticketing solution for festivals"/>
                  <a href="https://www.heidenheim.dhbw.de"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="Lecture Students" label="Teached about Supply Chain Management and Web-Programming"/>
                  </a>
                  <WorkFrame title="Bachelor Thesis" label="Researched Analytics dashboards for purchasing departments"/>
          
                    </section>
                </main>
            </div>
      </Container>

      </Layout>
  );
}
