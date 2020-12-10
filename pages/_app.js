import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

/* Customize Chakra Theming */
const theme = extendTheme({
  colors: {
    primary: "#FF0241"
  },
  fonts: {
    body: "'Barlow', sans-serif",
    heading: "'Barlow', sans-serif",
    mono: "Menlo, monospace",
  },  
  fontWeights: {
    normal: 500,
    medium: 500,
    bold: 900,
  },
})

function App({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}

export default App
