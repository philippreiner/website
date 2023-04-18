import NextImage from "next/image";
import Layout from "@components/layout";
import { Container, Homelink, WorkCard} from "@components/atoms"
import Contacts from "@components/contacts"
import NextLink from "next/link";
import { Tagline } from "@components/about";
import philipp from '../public/static/philipp-reiner.jpg'
import {Card,} from "@components/elements";

import { topics } from "@content/about";
export default function Home({ allPostsData }) {
  return (
      <Layout>
          <Container size="max-w-screen-md">
          <div className="py-4 md:py-8">
              <Homelink/>
              <div className="pt-4 pb-2">I'm Philipp, a manager at Accenture with a focus on subscription business models and empowering (industrial) software teams.</div>
              <Contacts/>
              <div className="pt-4 md:pt-8">
              <h3 className="font-heading text-xl pb-2 md:pb-4">We probably talked about …</h3>


              <div className="grid md:grid-cols-2 gap-8">
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
            </div>
           
              <a className="mt-8 block" href="mailto:mail@philippreiner.info">
                  <WorkCard title="📖 Build greating Software" label="How do non-tech people build great software on the first try?"/>
              </a>
              </div>
              <div className="pt-4 md:pt-8">
              <h3 className="font-heading text-xl pb-2 md:pb-4">We might have meet at …</h3>
                  <ul className="flex flex-col space-y-1.5">
                      <li>Hannover Messe 2023</li>
                      <li>Accenture S&C Events</li>
                      <li>DigiServ Network Events</li>
                      <li>Ostalb Hackathon 2022</li>
                      <li>Make OW 2022</li>
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
