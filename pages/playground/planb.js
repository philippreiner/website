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
      <Container maxWidth="74em" maxW="xl">
      <Image
            boxSize={["72px","120px"]}
            src="/static/planb.png"
            alt="PlanB."
          />
      </Container>

            <Container maxWidth="54em" maxW="xl">
        <Box pt={["32px","48px","72px","96px"]} pb={["12px","48px"]}>


              <Heading textAlign={["left","center"]} fontWeight="900" as="h1" fontSize={["3xl","3xl","6xl"]}>
                Digitale Produkte und die Zukunft der Arbeit
              </Heading>
              <Text fontSize={[null,"24px"]} pt="12px" textAlign={["left","center"]} color="gray.500">
                  PlanB ist mehr als nur Software. Als Ihr Innovationspartner entwickeln wir digitale Produkte,  und ermöglichen die Zukunft der Zusammenarbeit.
              </Text>
          </Box>

      </Container>
      <Container maxWidth="74em" maxW="xl">
          <Grid  pt="24px" templateColumns={["1fr",null,"1fr 1fr"]} gap="24px">
            <GridItem colSpan={[1,null,2]} boxShadow="lg" minHeight={["300px","500px","85vh"]} color="white" p="24px" bg="linear-gradient( rgba(0, 151, 206, 1), #000000)" borderRadius="4px">
            <Heading textAlign={["left","center"]} fontWeight="900" as="h2" fontSize={["2xl","3xl","4xl"]}>
                Über die Firma
              </Heading>
            </GridItem>
            <GridItem boxShadow="lg" bgImage="url('static/office.jpg')" minHeight={["300px","200px","300px"]} color="white" p="24px" borderRadius="4px">
            <Heading textAlign={["left","center"]} fontWeight="900" as="h2" fontSize={["2xl","3xl","4xl"]}>
                Case-Study 1
              </Heading>
            </GridItem>
            <GridItem boxShadow="lg" minHeight={["300px","200px","300px"]} color="white" p="24px" bg="linear-gradient(to right, #0f2027, #203a43, #2c5364)" borderRadius="4px">
            <Heading textAlign={["left","center"]} fontWeight="900" as="h2" fontSize={["2xl","3xl","4xl"]}>
                Case Study 2
              </Heading>
            </GridItem>
            <GridItem colSpan={[1,null,2]} boxShadow="lg" minHeight={["300px","500px","85vh"]} color="white" p="24px" bg="linear-gradient( rgba(206, 0, 49, 1), #000000)" borderRadius="4px">
            <Heading textAlign={["left","center"]} fontWeight="900" as="h2" fontSize={["2xl","3xl","4xl"]}>
                Case-Studies
              </Heading>
            </GridItem>
            <GridItem colSpan={[1,null,2]} boxShadow="lg" minHeight={["300px","500px","85vh"]} color="white" p="24px" bg="linear-gradient( rgba(255, 81, 0, 1), #000000)" borderRadius="4px">
            <Heading textAlign={["left","center"]} fontWeight="900" as="h2" fontSize={["2xl","3xl","4xl"]}>
                Karriere
              </Heading>
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
