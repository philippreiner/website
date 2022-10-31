import NextImage from "next/image";
import Layout from "@components/layout";
import { Container, WorkCard, WorkFrame, Subline} from "@components/atoms"
import Contacts from "@components/contacts"
import NextLink from "next/link";
import { Tagline } from "@components/about";
import philipp from '../public/static/philipp-reiner.jpg'


export default function Home() {
  return (
      <Layout>
          <Container size="max-w-screen-md">
          <section className="pt-4 pb-4 md:pt-8 lg:pt-12 md:pb-8 lg:pb-12">
                  <div className="pb-2 md:pb-6 lg:-ml-6 lg:-mr-6">
                  <NextImage
                          width="800"
                          height="500"
                          quality="75"
                          src={philipp}
                          alt="Philipp Reiner"
                          placeholder="blur"
                          className="rounded-lg"
                      /> 
                  </div>

                      <Tagline/>
                      <div className="pb-2 md:pt-2 md:pb-6">
                          <Subline>
                          Hello – I'm Philipp, a software developer turned entrepreneur. My biggest strength is to understand complex challenges superfast, break them down and find simple solutions. <br/>I believe Software should make our life easier, not more complicated.
                          </Subline>
                      </div>
                      <Contacts/>
          </section>
          <section className="pb-6 md:pb-12">

          <h3 className="font-heading text-2xl pb-2 md:pb-4">Now</h3>

  <a href="https://www.planb.net" target="_blank">
      <WorkCard title="Engineering Manager at PlanB." label="Empower developers, building software and consulting customers"/>
  </a>
  <a href="/productmode"  className="hover:underline decoration-2">
      <WorkFrame title="Productmode"  className="hover:underline decoration-2" label="How can non-tech companies build great software on the first try?"/>
  </a>




  <NextLink href="/eaas" className="hover:underline decoration-2">

      <WorkFrame title="Equipment-as-a-Service" label="Researched 140 companies in my widely shared landscape"/>

  </NextLink>

          </section>
          <section className="pb-6 md:pb-12">



                      <h3 className="font-heading text-2xl pb-2 md:pb-4">Past Experience</h3>
      
                      <a href="https://www.maxe.io"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="Maxe Smart Service" label="Developed a collaborative industrial service platform"/>
                  </a>
                  <a href="https://www.conclurer.com"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="Founded Conclurer" label="Build a low-code industry 4.0 software, consulted SMBs" />
                  </a>

                  <WorkFrame title="Metrology" label="Combined multiple teams and build one new solution" />
                  <a href="https://www.heidenheimerleben.de"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="HDH Erleben" label="Quickly launched a local livestream shopping experience"/>
                  </a>
                  <a href="https://www.futureofmanufacturing.io"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="Future of Manufacturing" label="Shared my knowledge as one of the first members"/>
                  </a>
                  <WorkFrame title="Aveo" label="Created Digital Manufacturing workshops for Aveo"/>
                  <a href="https://www.cuse.io"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="Predictive Service" label="Developed a predictive maintenance MVP"/>
                  </a>
                  <WorkFrame title="Nearstage" label="Founded and sold an up-selling ticketing solution for festivals"/>
                  <a href="https://www.heidenheim.dhbw.de"  className="hover:underline decoration-2" target="_blank">
                      <WorkFrame title="Lecture Students" label="Teached about Supply Chain Management and Web-Programming"/>
                  </a>
                  <WorkFrame title="Bachelor Thesis" label="Researched Analytics dashboards for purchasing departments"/>
          
                  </section>
                  <section className="pb-6 md:pb-12">
          
                      <h3 className="font-heading text-2xl dark:text-gray-500 pb-2 md:pb-4">Learn more</h3>
                      <NextLink
                          href="/blog/conversation-starter"
                          className="hover:underline decoration-2">

                          <WorkFrame title="Conversation starters"/>

                      </NextLink>
                      <NextLink href="/blog" className="hover:underline decoration-2">

                          <WorkFrame title="Blogposts"/>

                      </NextLink>
              </section>
          
      </Container>

      </Layout>
  );
}
