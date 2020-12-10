import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'
// eslint-disable-next-line import/no-named-as-default-member
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import theme from '../theme/styles'
import '../theme/date-picker-custom.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import '../theme/font.css'
import 'leaflet/dist/leaflet.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/styles/pagination.css'

const queryCache = new QueryCache()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Provider session={pageProps.session}>
          <CSSReset />
          <Component {...pageProps} />
        </Provider>
      </ReactQueryCacheProvider>
    </ChakraProvider>
  )
}

export default MyApp
