import Head from "next/head";
import NextLink from "next/link";
import Vid from "@playground/potterwall/vid";
import Style from "@playground/potterwall/vid.module.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import {
  Flex,
  Box,
  Spacer,
  Link,
  Grid,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

export default function Potterwall() {
  const handle = useFullScreenHandle();

  return (
    <div>
      <Head>
        <title>Concept Potterwall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex p="4">
        <Box>
          <Text onClick={handle.enter} fontWeight="900">
            PLANBEES
          </Text>
        </Box>
        <Spacer />
        <Popover>
          <PopoverTrigger>
            <Link>What is this?</Link>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              Dies ist ein Konzept um viele Personen lebendig darzustellen.
              Harry P. für den Eingangsbereich bei der PlanB.
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>

      <FullScreen handle={handle}>
        <Grid
          className={Style.wall}
          templateColumns="repeat(15, 1fr)"
          templateRows="repeat(9, 1fr)"
          gap={0}
        >
          {[...Array(17).keys()].map((key) => (
            <Vid
              vsrc="/playground/potterwall/video1.mp4"
              isrc="/playground/potterwall/avatar.jpg"
            ></Vid>
          ))}
          <video width="256" height="256" autoplay="1" loop muted>
            <source src="/playground/potterwall/video1.mp4"/>
          </video>
          {[...Array(98).keys()].map((key) => (
            <Vid
              vsrc="/playground/potterwall/video1.mp4"
              isrc="/playground/potterwall/avatar.jpg"
            ></Vid>
          ))}
        </Grid>
      </FullScreen>
    </div>
  );
}
