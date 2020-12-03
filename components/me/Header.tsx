/* eslint-disable prettier/prettier */
import Logo from '@assets/logo2.png';
import { Box, Container, Image, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link'

const Header = () => {
  const activeLink = useRouter().pathname

  const ActiveBar = {
    booking: '/me/bookings',
    editAccount: ['/me/edit-account/profile', '/me/edit-account/change-password', '/me/edit-account/link-account'],
    wishList: '/me/wish-list'
  }

  return (
    <Box bg='#fff'>
      <Container maxW='100%' px={40}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          h='80px'
          py={12}
        >
          <Box flex='1'>
            <Link href='/'>
              <Image src={Logo} width='60px' height='60px' />
            </Link>
          </Box>
          <Stack flex='1' direction='row-reverse' spacing={6}>
            <Box>
              <Text fontSize='sm' fontWeight='bold' color='#999' textTransform='uppercase'>Tài khoản của tôi</Text>
              <Text fontSize='md' fontWeight='bolder' color='#333'>Vũ Đức</Text>
            </Box>
            <Box>
              <Text fontSize='sm' fontWeight='bold' color='#999' textTransform='uppercase'>Hôm nay</Text>
              <Text fontSize='md' fontWeight='bolder' color='#333'>25/11/2020</Text>
            </Box>
          </Stack>
        </Box>
      </Container>
      <Box>
        <Container maxW='100%' px={40}>
          <Stack direction='row' color='#a3acb9' fontWeight='medium' spacing={7}>
            <Link
              href='/me/bookings'
            >
              <Text sx={{
                borderBottom: activeLink === ActiveBar.booking ? '4px solid #F65E39' : '',
                color: activeLink === ActiveBar.booking ? '#222' : '',
                py: '3',
                fontWeight: 'medium',
                ':hover': {
                  color: '#222',
                  cursor: 'pointer',
                },
              }}>Đặt chỗ của tôi</Text>
            </Link>
            <Link
              href='/me/edit-account/profile'
            >
              <Text sx={{
                borderBottom: ActiveBar.editAccount.includes(activeLink) ? '4px solid #F65E39' : '',
                color: ActiveBar.editAccount.includes(activeLink) ? '#222' : '',
                py: '3',
                fontWeight: 'medium',
                ':hover': {
                  color: '#222',
                  cursor: 'pointer',
                },
              }}>Cài đặt tài khoản</Text>
            </Link>
            <Link
              href='/me/wish-list'
            >
              <Text sx={{
                borderBottom: activeLink === ActiveBar.wishList ? '4px solid #F65E39' : '',
                color: activeLink === ActiveBar.wishList ? '#222' : '',
                py: '3',
                fontWeight: 'medium',
                ':hover': {
                  color: '#222',
                  cursor: 'pointer',
                },
              }}>Yêu thích</Text>
            </Link>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container />
      </Box>
    </Box>
  )
};

export default Header;
