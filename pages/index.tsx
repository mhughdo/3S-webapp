import Footer from '@components/Footer'
import HomeComponent from '@components/home/Home'
import { Grid } from '@chakra-ui/react'
import Header from '../components/Header'

export default function Home() {
  return (
    <Grid templateRows='auto 1fr auto' maxWidth='100%' minH='100vh'>
      <Header />
      <HomeComponent />
      <Footer />
    </Grid>
  )
}
