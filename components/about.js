
import {InlineHeading, Headline} from "@components/atoms"
import Contacts from "@components/contacts"


export function Tagline() {
  return (
      <Headline>
      <InlineHeading>Philipp Reiner&nbsp;</InlineHeading>
      is an expert for digital business models. I combine strategy, user experience and software to create a sustainable future today.
      </Headline>
  );
}

export default function About() {
  return (
    <section className="mt-4 md:mt-8 py-4 md:py-12 border-t-2 border-gray-200 dark:border-gray-800">
          <Tagline/>
          <div className="pt-4 md:pt-6">
            <Contacts/>
          </div>
    </section>
  );
}
