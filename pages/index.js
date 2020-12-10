import Head from 'next/head'
import NextLink from 'next/link'

import { Box,Text, Link, VStack, Stack, Container, Image, Heading} from "@chakra-ui/react"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Philipp Reiner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="54em" maxW="xl">
        <Box pt={["32px","48px","72px","86px"]}>
          <Image
            borderRadius="12px"
            boxSize={["72px","128px","144px"]}
            src="static/philipp-reiner.jpg"
            alt="Segun Adebayo"
          />
          <Box pt="24px">
            <Heading fontWeight="500" as="h1" size="lg">
            <Text as="span" color="primary">Philipp Reiner</Text> ist Experte für neue Geschäftsmodelle und Innovation. Ich kombiniere Strategie, User Experience und Software und ermögliche dadurch die digitale Zukunft.
            </Heading>
          </Box>
          <Box pt="24px">
            <Stack direction={["column", "row"]} spacing="12px">
            <Link color="blue.500" href="mailto:hey@philippreiner.info">
                hey@philippreiner.info
              </Link>
              <Link isExternal color="blue.500" href="https://www.linkedin.com/in/philippreiner/">
                LinkedIn
              </Link>
              <Link isExternal color="blue.500" href="https://www.twitter.com/reiner">
                Twitter
              </Link>
              <Link isExternal color="blue.500" href="https://www.planb.net">
                Arbeit
              </Link>
            </Stack>
          </Box>
        </Box>
        <Box pt="24px">
          <NextLink as="Link" href="posts/first-post">
              <Link>
                <Box bg="gray.50" p="10px" borderRadius="6px" mb="12px">
                  Das ist eine Box
                </Box>
              </Link>
            </NextLink>
        </Box>
      </Container>
    </div>
  )
}
