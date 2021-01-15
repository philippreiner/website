import Image from "next/image";
import { Box, AspectRatio, Text } from "@chakra-ui/react";
import Style from "./vid.module.css"

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

function Video(props) {
  return 
    <video width="256" height="256" loop muted>
      <source src={props.src} type="video/mp4" />
    </video>
}

function Img(props) {
  return
  <Image className={Style.image} src={props.src} width="256" height="256"/>

}

export default function Vid({ children, vsrc, isrc }) {
    return (
    <Box>
        <div onClick="">Hallo</div>
        
    </Box>
  );
}