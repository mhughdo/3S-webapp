import { Box, Container, Link, Input } from '@chakra-ui/react'
import Logo from '@/assets/logo2.png'
import Image from 'next/image'
import SearchIcon from '../assets/svg/search.svg'

const HeaderComponent = () => (
  <Container
    maxW='100%'
    h='80px'
    borderBottom='1px solid #f2f2f2'
    position='fixed'
    zIndex='10'
    top='0'
    d='flex'
    alignItems='center'>
    <Box w='100%' px={28} height='100%'>
      <Box alignItems='center' d='flex' pt={3} maxH='100%'>
        <Box d='flex' flexBasis='50%' alignItems='center' maxWidth='50%' px={2}>
          <Link>
            <Image src={Logo} width={60} height={60} />
          </Link>
          <Box pl={9} d='flex'>
            <Box boxShadow='1px 1px 4px rgba(0,0,0,.2)' w='300px' borderRadius='6px'>
              <Box d='flex' alignItems='center' py={2} px={4} h='27px' boxSizing='content-box'>
                <Box>
                  <SearchIcon />
                </Box>
                <Box ml={2} w='100%'>
                  <Input
                    height='100%'
                    width='100%'
                    color='black'
                    background='transparent'
                    border='none'
                    px={2}
                    placeholder='Tìm kiếm'
                    _placeholder={{ color: 'black' }}
                    _focus={{ outline: 'none' }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box d='flex' justifyContent='flex-end' maxWidth='50%' flexBasis='50%' px={2}>
          <Box ml={4} d='inline-block'>
            <Link
              href='/host'
              fontSize='0.9rem'
              fontWeight='700'
              textDecoration='none !important'
              _hover={{ color: 'orange.500' }}>
              Host
            </Link>
          </Box>
          <Box ml={4} d='inline-block'>
            <Link
              href='/host'
              fontSize='0.9rem'
              fontWeight='700'
              textDecoration='none !important'
              _hover={{ color: 'orange.500' }}>
              Đăng ký
            </Link>
          </Box>
          <Box ml={4} d='inline-block'>
            <Link
              href='/host'
              fontSize='0.9rem'
              fontWeight='700'
              textDecoration='none !important'
              _hover={{ color: 'orange.500' }}>
              Đăng nhập
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  </Container>
)

export default HeaderComponent
