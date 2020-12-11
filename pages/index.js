import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";
import { getSortedPostsData } from '../lib/posts'

import {
  Box,
  Text,
  Link,
  Stack,
  Container,
  Heading,
} from "@chakra-ui/react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Philipp Reiner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="53em" maxW="xl">
        <Box pt={["32px", "48px", "72px", "86px"]}>
          <Box borderRadius="12px" boxSize={["72px", "128px", "160px"]}>
            <NextImage
              width="160"
              height="160"
              src="/static/philipp-reiner.jpg"
              alt="Philipp Reiner"
              className="radius"
            />
          </Box>

          <Box pt="24px">
            <Heading fontWeight="500" as="h1" size="lg">
              <Text as="span" color="primary">
                Philipp Reiner
              </Text>{" "}
              ist Experte für neue, innovative Geschäftsmodelle. Ich kombiniere
              Strategie, User Experience und Software um die digitale Zukunft zu
              gestalten.
            </Heading>
          </Box>
          <Box pt="24px">
            <Stack direction={["column", "row"]} spacing="12px">
              <Link color="blue.500" href="mailto:hey@philippreiner.info">
                hey@philippreiner.info
              </Link>
              <Link
                isExternal
                color="blue.500"
                href="https://www.linkedin.com/in/philippreiner/"
              >
                LinkedIn
              </Link>
              <Link
                isExternal
                color="blue.500"
                href="https://www.twitter.com/reiner"
              >
                Twitter
              </Link>
              <Link isExternal color="blue.500" href="https://www.planb.net">
                Arbeit
              </Link>
            </Stack>
          </Box>
        </Box>

        <Box pt={[2, 4, 8]}>
          <Heading as="h2" pb="1" color="gray.500" fontWeight="500" size="md">
            Artikel
          </Heading>
          {allPostsData.map(({ id, title, date}) => (
            <NextLink href={`/blog/${id}`} passHref>
            <Box
              pb="4"
              pt="4"
              borderStyle="solid"
              borderColor="gray.100"
              borderBottomWidth="1px"
            >
              <Link>
                <Text>{title}</Text>
                <Text color="gray.500" fontSize="sm">
                  {date}
                </Text>
              </Link>
            </Box>
          </NextLink>
          ))}
          
        </Box>
      </Container>
    </div>
  );
}
