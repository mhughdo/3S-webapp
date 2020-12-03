import { Box, chakra, Heading, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'

const Price = () => {
  const NavLabel = chakra(Element)

  return (
    <NavLabel className='place-details-price' name='room rate' mt={20}>
      <Box className='title'>
        <Heading as='h3' fontSize='3xl' fontWeight='bolder' lineHeight='shorter'>
          Giá phòng
        </Heading>
        <Text marginTop='10px'>Giá có thể tăng vào cuối tuần hoặc ngày lễ</Text>
      </Box>
      <Box className='price-content' margin='30px 0 50px 0'>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          padding='12px 18px'
          backgroundColor='#f6f6f6'
          color='#333'>
          <Text>Thứ hai - Thứ sáu</Text>
          <Text fontWeight='bold'>491,200₫</Text>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between' padding='12px 18px' color='#333'>
          <Text>Thứ bảy - Chủ Nhật</Text>
          <Text fontWeight='bold'>500,200₫</Text>
        </Box>
      </Box>
    </NavLabel>
  )
}

export default Price
