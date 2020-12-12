import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";

import { Link, Text, HStack, Container, Box } from "@chakra-ui/react";

export default function Page({ children }) {
  return (
    <Container maxWidth="42em" maxW="xl">
      <Box mb={[2, 4]}>
        <NextLink href="/" passHref>
          <Link>
            <HStack>
              <Box boxSize="24px">
                <NextImage
                  width="24"
                  height="24"
                  src="/static/philipp-reiner.jpg"
                  alt="Philipp Reiner"
                  className="radius--small"
                />
              </Box>
              <Text color="gray.500">Philipp Reiner</Text>
            </HStack>
          </Link>
        </NextLink>
      </Box>
      {children}
    </Container>
  );
}
