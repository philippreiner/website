import Head from "next/head";

import { Stack, Link } from "@chakra-ui/react";

export default function Links() {
  return (
    <Stack direction={["column", "row"]} spacing="12px">
      <Link color="blue.500" href="mailto:hey@philippreiner.info">
        hey@philippreiner.info
      </Link>
      <Link
        isExternal
        color="blue.500"
        href="https://www.linkedin.com/in/philippreiner/"
      >
        LinkedIn
      </Link>
      <Link isExternal color="blue.500" href="https://www.twitter.com/reiner">
        Twitter
      </Link>
      <Link isExternal color="blue.500" href="https://www.planb.net">
        Arbeit
      </Link>
    </Stack>
  );
}
