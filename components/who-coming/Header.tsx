import { Box, Container, Link } from '@chakra-ui/react'
import Logo from '@assets/logo2.png'
import Image from 'next/image'
import RArrow from '../../assets/svg/right-arrow.svg'

const Header = () => (
  <Box>
    <Box h='80px' borderBottom='1px solid #f2f2f2' position='fixed' w='100%' top='0' zIndex='1' backgroundColor='white'>
      <Container maxW='calc(1296px + 5.6rem)' px={10} m='auto' h='100%'>
        <Box d='flex' alignItems='center' w='100%'>
          <Link href='/'>
            <Image src={Logo} height='60px' width='60px' />
          </Link>
          <Box pl={7} d='flex' alignItems='center'>
            <Box as='span' fontWeight='bold' mr={5} color='orange.500'>
              1. Thông tin đặt chỗ
            </Box>
            <Box h='10px' w='10px' mr={5}>
              <RArrow />
            </Box>
            <Box as='span' fontWeight='bold'>
              2. Xác nhận và thanh toán
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
)

export default Header
