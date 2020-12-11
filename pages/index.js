import Head from 'next/head'
import NextLink from 'next/link'

import { Box,Text, Grid, GridItem, Link, Stack, Container, Image, Heading} from "@chakra-ui/react"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Philipp Reiner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="53em" maxW="xl">
        <Box pt={["32px","48px","72px","86px"]} >
          <Image
            borderRadius="12px"
            boxSize={["72px","128px","160px"]}
            src="static/philipp-reiner.jpg"
            alt="Philipp Reiner"
          />
          <Box pt="24px">
            <Heading fontWeight="500" as="h1" size="lg">
            <Text as="span" color="primary">Philipp Reiner</Text> ist Experte für neue, innovative Geschäftsmodelle. Ich kombiniere Strategie, User Experience und Software um die digitale Zukunft zu gestalten.
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

      </Container>
      <Container 
 
      mt={[4,8]}
      p={[4,4,12]} 
      pt={[4,4,8]}
      borderRadius={[0,0,"8px"]} 
      maxWidth="57em" 
      maxW="xl" 
      background="gray.50"
      >
      <Heading as="h2" pb="4" fontWeight="500" color="gray.500"  size="md">
        Artikel
      </Heading>
      <NextLink href="/posts/first-post" passHref>
               <Link>
                  Das ist eine Box
                </Link>
            </NextLink>
      </Container>
    </div>
  )
}
