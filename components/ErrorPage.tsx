import ErrorPageImg from '@assets/error-page.jpg'
import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const ErrorPage = () => (
  <Box background={`url(${ErrorPageImg}) no-repeat 50%`} backgroundSize='cover' background-position='100% 100%'>
    <Box d='flex' alignItems='center' justifyContent='center' h='100vh'>
      <Box textAlign='center'>
        <Box fontSize='3rem' fontWeight='bold' mt={8} mb={4}>
          Đã xảy ra lỗi, vui lòng thử lại.
        </Box>
        <Box textAlign='center'>
          <NextLink href='/'>
            <Link
              d='inline-block'
              boxShadow='0 4px 12px 0 rgba(249,132,42,.45)'
              backgroundImage='linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)'
              backgroundSize='200% auto'
              color='white'
              transition='all .3s'
              height='3rem'
              lineHeight='3rem'
              borderRadius='sm'
              px={6}
              href='/'
              _hover={{
                backgroundPosition: '100%',
                color: 'white',
              }}>
              VỀ TRANG CHỦ
            </Link>
          </NextLink>
        </Box>
      </Box>
    </Box>
  </Box>
)

export default ErrorPage
