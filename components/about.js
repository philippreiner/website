
import {InlineHeading, Headline, DrawnLine} from "@components/atoms"
import Contacts from "@components/contacts"


export function Tagline() {
  return (
      <Headline>
      <InlineHeading>Philipp Reiner&nbsp;</InlineHeading>
      empowers software teams, researches subscription business models and always thinks about tomorrow.
      </Headline>
  );
}

export default function About() {
  return (
    <section className="mt-4 md:mt-8 py-4 md:py-6">
          <Tagline/>
          <div className="pt-4 md:pt-6">
            <Contacts/>
          </div>
    </section>
  );
}
//       is an expert for Business Models, manages software teams and always thinks about tomorrow.
