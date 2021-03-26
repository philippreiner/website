import Head from "next/head";
import NextLink from "next/link";
import { Button, Box, Link, useColorMode, Tooltip, IconButton} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const name = "Philipp Reiner";
const isBrowser = typeof window !== "undefined";
export const siteTitle = "Philipp Reiner";

export default function Layout({ children }) {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as="main" pt={["32px", "48px", "72px", "86px"]}>
      <Head>
        <title>Philipp Reiner</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Philipp Reiner"/>
        <meta name="author" content="Philipp Reiner"/>
      </Head>

      {children}

      <Box textAlign="center" pt={[4, 8]} pb={[12, 12]}>
      <Tooltip label={colorMode === "light" ? "Licht aus" : "Licht an"}>
              <IconButton color="gray.500" aria-label="Farbmodus" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} variant="ghost" onClick={toggleColorMode} />
            </Tooltip>
        <NextLink href="/impressum" passHref>
          <Button fontWeight="normal" variant="ghost" color="gray.500">Impressum & Datenschutz</Button>
        </NextLink>
      </Box>

      {process.env.NODE_ENV === "production" && (
        <script
          async
          defer
          data-domain="philippreiner.info"
          src="https://plausible.io/js/plausible.js"
        />
      )}
    </Box>
  );
}
