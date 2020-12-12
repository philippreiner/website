import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";
import Links from "../components/links";

import { Box, Link, Flex, Heading, Text } from "@chakra-ui/react";

export default function About({ children }) {
  return (
    <Box
      mt={[8, 12]}
      mb={[8, 12]}
      borderRadius="16px"
      bg="gray.100"
      p={[4, 8]}
    >
      <Flex direction={["column",null,"row"]} >
        <Box mr="4" boxSize={["48px", "64px", "120px"]}>
          <NextImage
            width="120"
            height="120"
            src="/static/philipp-reiner.jpg"
            alt="Philipp Reiner"
            className="radius"
          />
        </Box>
        <Box>
          <Heading as="h4" size="lg" fontWeight="500">
            Philipp Reiner
          </Heading>
          <Text pb="2">
            Experte für digitale Geschäftsmodelle, User-Experience und digitale
            Transformation. &nbsp;
            <NextLink href="/" passHref>
              <Link color="gray.500">Mehr...</Link>
            </NextLink>
          </Text>
          <Links></Links>
        </Box>
      </Flex>
    </Box>
  );
}
