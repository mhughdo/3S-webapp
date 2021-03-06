import { Box } from '@chakra-ui/react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import RoomList from '@components/room-list/RoomList'
import Filter from '@components/filter/Filter'

const CityDetail = () => (
  <Box>
    <Header />
    <Box px={38} py={4}>
      <Filter />
      <RoomList />
    </Box>
    <Footer />
  </Box>
)

export default CityDetail
