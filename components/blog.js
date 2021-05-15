import { InlineHeading, LanguagePill} from "@components/atoms"
import NextLink from "next/link";
import NextImage from "next/image";

export function Blogpost({ title, id, image, desc, language }) {

  var url = '/blog/' + id ;

  return (
    <div id={id} class="pb-4 md:pb-12">
      <NextLink href={url}>
        <a className="flex items-center">
          <div className="flex-grow">
            <h3 class="font-bold">
              {language == 'de' &&
                <LanguagePill label="de"/>
              }
              <InlineHeading>
                {title} 
              </InlineHeading>
            </h3>
            <p>
              {desc}
            </p>
          </div>
          {image != null &&
          <div className="hidden sm:block flex-none w-32 md:w-32 pl-4">
              <NextImage
              width="110"
              height="80"
              src={image}
              alt={title}
              quality="70"
              className="object-cover rounded-lg"
            />
          </div>
          }
        </a>
      </NextLink>
    </div>
  );
}
