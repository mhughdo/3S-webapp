import { Box, Container, Grid, Text } from '@chakra-ui/react'
import EmptyList from './EmptyList'
import Promo from './Promo'

const WishListComponent = () => (
  <Box background='#f8f8f8' minH='1000px' py={6}>
    <Container maxW='100%' px={40}>
      <Box>
        <Text as='h1' mt={6} fontWeight='bold' fontSize={32}>
          Chỗ ở yêu thích : 0
        </Text>
        <Grid templateColumns='repeat(5, 1fr)' rowGap={4} columnGap={3}>
          <Promo />
          <Promo />
          <Promo />
          <Promo />
          <Promo />
          <Promo />
        </Grid>
      </Box>
    </Container>
  </Box>
)

export default WishListComponent
