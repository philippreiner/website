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
      <Container maxWidth="54em" maxW="xl">
        <Box pt={["32px","48px","72px","86px"]}>
          <Image
            borderRadius="12px"
            boxSize={["72px","128px","144px"]}
            src="static/philipp-reiner.jpg"
            alt="Philipp Reiner"
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
      
      </Container>
      <Container maxWidth="58em" maxW="xl">
          <Grid  pt="24px" templateColumns={["1fr",null,"1fr 1fr"]} gap="24px">
            <GridItem colSpan={[1,null,2]}  boxShadow="lg" minHeight={[null,"200px","400px"]} color="white" p="24px" bg="linear-gradient(to right, #b92b27, #1565c0)" borderRadius="4px">
              Content
            </GridItem>
            <GridItem boxShadow="lg"  minHeight={[null,"200px","300px"]} color="white" p="24px" borderRadius="4px">
              Content
            </GridItem>
            <GridItem boxShadow="lg" minHeight={[null,"200px","300px"]} color="white" p="24px" bg="linear-gradient(to right, #0f2027, #203a43, #2c5364)" borderRadius="4px">
              Content
            </GridItem>
          </Grid>
        </Container>
        <Box pt="24px">
          
             <NextLink href="/posts/first-post" passHref>
               <Link>
                <Box bg="gray.50" p="10px" borderRadius="6px" mb="12px">
                  Das ist eine Box
                </Box>
                </Link>
            </NextLink>
       
        </Box>

    </div>
  )
}
