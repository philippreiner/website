import Image from "next/image";
import { Box, AspectRatio, Text } from "@chakra-ui/react";
import Style from "./vid.module.css"

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Vid({ children, vsrc, isrc }) {

  return (
    <Box>
      <Image className={Style.image} src={isrc} width="256" height="256"/>
    </Box>
  );
}
/*
      <video width="256" height="256" loop muted>
        <source s1rc={vsrc} type="video/mp4" />
      </video>
      */