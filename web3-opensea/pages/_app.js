import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = { ChainId.Rinkeby}
      chainRpc={{
        [ChainId.Rinkeby]:'https://rinkeby.infura.io/v3/c784c4f40ccd4a73b9d5423628155e44'
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
