import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import Links from "../components/links";

import { Box, Text, Link, Container, Heading } from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Container maxWidth="46em" maxW="xl">
        <Box>
          <Box borderRadius="12px" boxSize={["72px", "128px", "160px"]}>
            <NextImage
              width="160"
              height="160"
              src="/static/philipp-reiner.jpg"
              alt="Philipp Reiner"
              className="radius"
            />
          </Box>

          <Box pt={["24px",null,"42px"]} pb={[1,null,2]}>
            <Heading fontWeight={["500", "900"]} as="h1" size="lg">
              <Text as="span" color="primary">
                Philipp Reiner
              </Text>{" "}
              ist Experte für digitale Geschäftsmodelle. Ich kombiniere
              Strategie, User Experience und Software um innovativ die Zukunft zu gestalten.
            </Heading>
          </Box>
          <Box pt="24px">
            <Links></Links>
          </Box>
        </Box>

        <Box pt={[6, 8, 12]}>
          <Heading as="h2" pb="1" color="gray.500" fontWeight="500" size="md">
            Artikel
          </Heading>
          {allPostsData.map(({ id, title, date, fav }) => (
            <NextLink href={`/blog/${id}`} passHref>
              <Box
                pb="4"
                pt="4"
                borderStyle="none"
                borderColor="gray.100"
                borderBottomWidth="0px"
              >
                <Link>
                  <Text>
                    {title}  
                    {fav && <StarIcon pl="3px" mt="-3px" w="5" h="5" color="orange.300" />}
                  </Text>
                  <Text color="gray.500" fontSize="sm">
                    {date}
                  </Text>
                </Link>
              </Box>
            </NextLink>
          ))}
        </Box>
      </Container>
    </Layout>
  );
}
