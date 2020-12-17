import { Stack, Link, Tooltip } from "@chakra-ui/react";

export default function Links() {
  return (
    <Stack direction={["column", "row"]} spacing="12px">
      <Link color="blue.500" href="mailto:hey@philippreiner.info">
      <Tooltip label="Schreib mir!" aria-label="Schreib mir!">
          hey@philippreiner.info
        </Tooltip>
      </Link>
      <Link
        isExternal
        color="blue.500"
        href="https://www.linkedin.com/in/philippreiner/"
      >
        <Tooltip label="Folgt mir für Updates" aria-label="Folgt mir für Updates">
          LinkedIn
        </Tooltip>
      </Link>
      <Link isExternal color="blue.500" href="https://www.twitter.com/reiner">
      <Tooltip label="Spannende Artikel" aria-label="Spannende Artikel">
          Twitter
        </Tooltip>
      </Link>
      <Link isExternal color="blue.500" href="https://www.planb.net">
      <Tooltip label="#epicshit" aria-label="#epicshit">
          Arbeit
        </Tooltip>
      </Link>
    </Stack>
  );
}
