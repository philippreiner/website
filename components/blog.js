import { InlineHeading,} from "@components/atoms"
import NextLink from "next/link";

export function Blogpost({ title, id, desc }) {

  var url = '/blog/' + id ;

  return (
    <div class="pb-4 md:pb-8">
      <NextLink href={url}>
        <a>
          <h3 class="font-bold">
            <InlineHeading>
              {title}
            </InlineHeading>
          </h3>
          <p>
            {desc}
          </p>
        </a>
      </NextLink>
    </div>
  );
}
