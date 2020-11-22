import Footer from '@components/Footer'
import Header from '@components/Header'
import { Grid, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Grid templateRows='auto 1fr auto' maxWidth='100%' minH='100vh'>
      <Header />
      <Box>Body</Box>
      <Footer />
    </Grid>
  )
}
