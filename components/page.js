import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";


export default function Page({ children }) {
  return (
    <div>
        <NextLink href="/" passHref>
                <NextImage
                  width="24"
                  height="24"
                  src="/static/philipp-reiner.jpg"
                  alt="Philipp Reiner"
                  className="radius--small"
                />
        </NextLink>
      {children}
    </div>
  );
}
