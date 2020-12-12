import Head from 'next/head'
import NextLink from 'next/link'
import { Box } from '@chakra-ui/react'

const name = 'Philipp Reiner'
const isBrowser = typeof window !== 'undefined'
export const siteTitle = 'Philipp Reiner'

export default function Layout({ children}) {
  return (
    <Box as="main"pt={["32px", "48px", "72px", "86px"]} >
      <Head>
        <title>Philipp Reiner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {children}



      {isBrowser && <script async defer data-domain="philippreiner.info" src="https://plausible.io/js/plausible.js"/> }
    
    </Box>
  )
}