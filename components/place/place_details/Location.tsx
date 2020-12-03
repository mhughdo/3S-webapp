import { Box, chakra, Heading } from '@chakra-ui/react'
import { Element } from 'react-scroll'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../../Map'), { ssr: false })

const Location = () => {
  const NavLabel = chakra(Element)
  return (
    <NavLabel className='place-details-location' name='location' mt={20}>
      <Box className='title' mb={8}>
        <Heading as='h3' fontSize='3xl' fontWeight='bolder' lineHeight='shorter' mb={6}>
          Vị trí
        </Heading>
        <span>Xem vị trí địa điểm trên bản đồ</span>
      </Box>
      <Box className='location' height='400px' width='100%' mb={20}>
        <Map />
      </Box>
    </NavLabel>
  )
}

export default Location
