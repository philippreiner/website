import Head from 'next/head'
import NextLink from 'next/link'

import { Box,Text, Center, Grid, GridItem, Link, Stack, Container, Image, Heading} from "@chakra-ui/react"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Philipp Reiner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="54em" maxW="xl">
      <Image
            boxSize={["72px","120px"]}
            src="static/planb.png"
            alt="PlanB."
          />
        <Box pt={["32px","48px","72px","86px"]}>
          <Box>
            <Center>
              <Heading fontWeight="900" as="h1" size="3xl">
              Digitale Produkte und die Zukunft der Arbeit
              </Heading>
              <Text as="h3" color="gray.500">
                Das ist nur ein Subtitel 
              </Text>
            </Center>
          </Box>
          </Box>

      </Container>
      <Container maxWidth="58em" maxW="xl">
          <Grid  pt="24px" templateColumns={["1fr",null,"1fr 1fr"]} gap="24px">
            <GridItem colSpan={[1,null,2]} boxShadow="lg" minHeight={[null,"200px","400px"]} color="white" p="24px" bg="linear-gradient(to right, #b92b27, #1565c0)" borderRadius="4px">
              Content
            </GridItem>
            <GridItem boxShadow="lg" minHeight={[null,"200px","300px"]} color="white" p="24px" bg="linear-gradient(to right, #0f2027, #203a43, #2c5364)" borderRadius="4px">
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
