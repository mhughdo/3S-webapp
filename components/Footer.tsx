import { Box, Text, Container, Grid } from '@chakra-ui/react'
import Logo from '@assets/logo2.png'
import Image from 'next/image'
import QRCODE from '@assets/qr-code.png'
import Phone from '../assets/svg/phone.svg'
import Message from '../assets/svg/message.svg'
import AppStore from '../assets/svg/apple-store.svg'
import GooglePlay from '../assets/svg/google-play.svg'
import HuaweiStore from '../assets/svg/huawei.svg'
import Copyright from './Copyright'

const FooterComponent = () => (
  <Box alignSelf='end' py={12}>
    <Box py={12}>
      <Container maxW='calc(1296px + 5.6rem)' px={10}>
        <Grid templateColumns='repeat(4, 1fr)'>
          <Box mt={4}>
            <Box d='flex' alignItems='center' mb={5}>
              <Image src={Logo} height={60} width={60} />
              <Text fontSize='xl' fontWeight='500' ml={4}>
                3S PLACE
              </Text>
            </Box>
            <Box d='flex' alignItems='center'>
              <Message />
              <Box ml={8}>
                <Text fontSize='md' fontWeight='500'>
                  Messenger
                </Text>
                <Text fontSize='sm'>http://m.me/3s-place</Text>
              </Box>
            </Box>
            <Box d='flex' alignItems='center' mt={4}>
              <Phone />
              <Box ml={8}>
                <Text fontSize='md' fontWeight='500'>
                  Call center
                </Text>
                <Text fontSize='sm'>0123456789</Text>
              </Box>
            </Box>
          </Box>
          <Box mt={4}>
            <Box>
              <Text fontSize='md' mb={5} fontWeight='700'>
                KHÔNG GIAN ƯA THÍCH
              </Text>
              <Text fontSize='md' mt={2}>
                Căn hộ
              </Text>
              <Text fontSize='md' mt={2}>
                Biệt thự
              </Text>
              <Text fontSize='md' mt={2}>
                Nhà riêng
              </Text>
              <Text fontSize='md' mt={2}>
                Studio
              </Text>
            </Box>
          </Box>
          <Box mt={4}>
            <Box>
              <Text fontSize='md' mb={5} fontWeight='700'>
                VỀ CHÚNG TÔI
              </Text>
              <Text fontSize='md' mt={2}>
                Blog
              </Text>
              <Text fontSize='md' mt={2}>
                Điều khoản hoạt động
              </Text>
              <Text fontSize='md' mt={2}>
                +84 962605699
              </Text>
              <Text fontSize='md' mt={2}>
                info@hughdo.dev
              </Text>
              <Text fontSize='md' mt={2}>
                Thông tin dành cho chủ nhà
              </Text>
              <Text fontSize='md' mt={2}>
                Cơ hội nghề nghiệp
              </Text>
            </Box>
          </Box>
          <Box mt={4}>
            <Box>
              <Text fontSize='md' mb={5} fontWeight='700'>
                TẢI ỨNG DỤNG 3S PLACE
              </Text>
              <Box d='flex'>
                <Box>
                  <Box p={4} border='1px solid rgba(0,0,0,.09)' mr={6}>
                    <Image src={QRCODE} height={70} width={70} />
                  </Box>
                </Box>
                <Box>
                  <Box mb={4}>
                    <AppStore />
                  </Box>
                  <Box mb={4}>
                    <GooglePlay />
                  </Box>
                  <Box mb={4}>
                    <HuaweiStore />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
    <Copyright />
  </Box>
)

export default FooterComponent
