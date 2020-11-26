/* eslint-disable react/no-children-prop */
import Header from '@components/who-coming/Header'
import {
  Text,
  Select,
  Box,
  Grid,
  Container,
  GridItem,
  Button,
  chakra,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  VStack,
  StackDivider,
} from '@chakra-ui/react'
import Copyright from '@components/Copyright'
import Image from 'next/image'
import { FcCalendar } from 'react-icons/fc'
import { MdAccountCircle } from 'react-icons/md'
import Marker from '../../assets/svg/marker.svg'

const HR = chakra('hr')
const CalendarIcon = chakra(FcCalendar)
const PersonIcon = chakra(MdAccountCircle)

const WhoComing = () => (
  <Grid templateRows='80px 1fr auto' maxWidth='100%' minH='100vh'>
    <Header />
    <Box background='#f4f4f4'>
      <Box my={12}>
        <Container maxW='calc(1296px + 5.6rem)' px={10}>
          <Grid templateColumns='repeat(6, 1fr)' gap={4}>
            <GridItem colSpan={3}>
              <Box mb={10}>
                <Box
                  backgroundColor='white'
                  backgroundSize='300px'
                  backgroundImage='url(https://www.luxstay.com/login-bg.png)'
                  backgroundRepeat='no-repeat'
                  border='1px solid #e9e9e9'
                  boxShadow='md'
                  borderRadius='5px'
                  backgroundPosition='100% 100%'
                  py={6}
                  px={5}>
                  <Box px={2} maxW='66.66667%'>
                    <Box as='h4' fontWeight='bold' fontSize='lg' mb={1}>
                      Đăng nhập và tận hưởng quyền lợi của Thành viên!
                    </Box>
                    <Box as='p' mb={7} color='gray.600'>
                      Đăng ký thành viên Luxstay, trải nghiệm đột phá - Đặt phòng nhanh hơn, ưu đãi nhiều hơn nữa.
                    </Box>
                    <Button colorScheme='orange'>Đăng nhập ngay</Button>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box mb={7}>
                  <Box as='h3' fontSize='3xl' fontWeight='bold'>
                    Thông tin đặt chỗ
                  </Box>
                </Box>
                <Box mb={4}>
                  <Text fontWeight='bold' mb={2}>
                    Số khách
                  </Text>
                  <Box px={5} py={3} background='white' maxW='50%' borderRadius='md'>
                    1 khách
                  </Box>
                </Box>
                <Box mt={8} mb={4}>
                  <Text fontWeight='bold' mb={2}>
                    1 đêm tại Stay&Fun No.4 - Căn hộ 60m2 trung tâm Q.1, view Nhà Thờ Đức Bà
                  </Text>
                  <Box d='flex'>
                    <Box px={1} flexBasis='50%' maxW='50%'>
                      <Box p={3} background='white' borderRadius='md'>
                        <HR
                          background='transparent'
                          height='4px'
                          my={2}
                          _before={{
                            backgroundColor: 'green.500',
                            content: '""',
                            display: 'block',
                            borderRadius: '2.5px',
                            height: '100%',
                            width: '40%',
                          }}
                        />
                        <Text color='gray.600'>Nhận phòng</Text>
                        <Text fontWeight='semi-bold' fontSize='2xl'>
                          26/11/2020
                        </Text>
                        <Text fontWeight='semi-bold'>Thứ năm</Text>
                      </Box>
                    </Box>
                    <Box px={1} flexBasis='50%' maxW='50%'>
                      <Box p={3} background='white' borderRadius='md'>
                        <HR
                          background='transparent'
                          height='4px'
                          my={2}
                          _before={{
                            backgroundColor: 'yellow.500',
                            content: '""',
                            display: 'block',
                            borderRadius: '2.5px',
                            height: '100%',
                            width: '40%',
                          }}
                        />
                        <Text color='gray.600'>Trả phòng</Text>
                        <Text fontWeight='semi-bold' fontSize='2xl'>
                          27/11/2020
                        </Text>
                        <Text fontWeight='semi-bold' fontSize='sm'>
                          Thứ sáu
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box mt={8} mb={4}>
                  <Text fontWeight='bold' mb={2}>
                    Trách nhiệm vật chất
                  </Text>
                  <Text mb={2} fontSize='sm'>
                    Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra tại chỗ ở trong thời gian lưu trú.
                  </Text>
                </Box>
                <Box mt={8} mb={4}>
                  <Text fontWeight='bold' mb={2}>
                    Nội quy chỗ ở
                  </Text>
                  <Text mb={2} fontSize='sm'>
                    Yêu cầu chứng minh thư/ căn cước công dân/ hộ chiếu hoặc đặt cọc tại chỗ nghỉ\nHạn chế làm ồn sau 10
                    giờ tối\nKhông đi giày/dép trong nhà\nKhông hút thuốc ở khu vực chung\n
                  </Text>
                </Box>
              </Box>
              <Box mt={12} mb={8}>
                <Box as='h3' fontSize='3xl' fontWeight='bold'>
                  Thông tin của bạn
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box mb={4}>
                    <Text fontWeight='bold' fontSize='md'>
                      Tên Khách hàng
                    </Text>
                  </Box>
                  <Text fontSize='sm'>Họ tên trên CMND/ Thẻ căn cước</Text>
                  <Input variant='filled' mt={4} background='gray.200' />
                </Box>
                <Box mt={8} mb={4} d='flex'>
                  <Box px={1} flexBasis='50%' maxW='50%'>
                    <Text fontWeight='bold' fontSize='md'>
                      Số điện thoại
                    </Text>
                    <Text fontSize='sm' mb={4}>
                      Nhập số điện thoại của bạn
                    </Text>
                    <InputGroup>
                      <InputLeftAddon children='+84' />
                      <Input type='phone' borderLeftRadius='0' placeholder='Số điện thoại' />
                    </InputGroup>
                  </Box>
                  <Box px={1} flexBasis='50%' maxW='50%'>
                    <Text fontWeight='bold' fontSize='md'>
                      Email
                    </Text>
                    <Text fontSize='sm' mb={4}>
                      VD: email@example.com
                    </Text>
                    <Input type='phone' borderLeftRadius='0' placeholder='Email' />
                  </Box>
                </Box>
                <Box mt={8} mb={4}>
                  <Box mb={3}>
                    <Text fontWeight='bold' fontSize='md'>
                      Quốc gia cư trú
                    </Text>
                  </Box>
                  <Text fontSize='sm'>Nội dung này sẽ được sử dụng cho vấn đề pháp lý và thuế.</Text>
                  <Box maxW='50%'>
                    <Select placeholder='Select option' defaultValue='vn'>
                      <option value='vn'>Việt Nam</option>
                      <option value='jpa'>Nhật Bản</option>
                    </Select>
                  </Box>
                </Box>
                <Button
                  backgroundImage='linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)'
                  backgroundSize='500% auto'
                  mt={6}>
                  Thanh Toán
                </Button>
              </Box>
            </GridItem>
            <GridItem colStart={5} colEnd={7} fontSize='sm'>
              <Text fontSize='3xl' fontWeight='bold' mb={8}>
                Chi tiết đặt phòng
              </Text>
              <Box background='white' boxShadow='md' position='sticky' top='100px' borderRadius='md' p={6}>
                <Box borderBottom='1px solid #e6e6e6' pb={6}>
                  <Link href='/place/1' d='flex'>
                    <Box pr='10%' maxW='65%'>
                      <Box as='h4' fontWeight='black' mb={4}>
                        Stay&Fun No.4 - Căn hộ 60m2 trung tâm Q.1, view Nhà Thờ Đức Bà
                      </Box>
                      <Box d='flex'>
                        <Marker />
                        <Box ml={2} as='span'>
                          Cầu Giấy, Hà Nội, Việt Nam
                        </Box>
                      </Box>
                    </Box>
                    <Box w='128px' sx={{ img: { borderRadius: 'md' } }}>
                      <Image
                        src='https://cdn.luxstay.com/users/91740/WOKWWyd3y5hrgWl2KxSRl1_g.png'
                        width='128px'
                        height='80px'
                      />
                    </Box>
                  </Link>
                </Box>
                <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                  <Box pt={6}>
                    <Box d='flex' alignItems='center'>
                      <CalendarIcon d='inline-block' mr={1} width='24px' height='24px' />
                      <Box as='span' fontWeight='bold'>
                        1 đêm{' '}
                      </Box>{' '}
                      · 26/11/2020 - 27/11/2020
                    </Box>
                    <Box d='flex' alignItems='center'>
                      <PersonIcon d='inline-block' mr={1} color='orange.500' width='24px' height='24px' />
                      <Box fontWeight='bold'>1 người lớn</Box>
                    </Box>
                  </Box>
                  <Box d='flex' flexDirection='column'>
                    <Box d='flex' justifyContent='space-between'>
                      <Text>Giá thuê 1 đêm</Text>
                      <Text fontSize='md'>700,000₫</Text>
                    </Box>
                    <Box d='flex' justifyContent='space-between' pt={3}>
                      <Text>Phí dọn dẹp</Text>
                      <Text fontSize='md'>150,000₫</Text>
                    </Box>
                    <Box d='flex' justifyContent='space-between' pt={3}>
                      <Text>Phí dịch vụ</Text>
                      <Text fontSize='md'>138,000₫</Text>
                    </Box>
                  </Box>
                  <Box pb={3}>
                    <Box d='flex' justifyContent='space-between'>
                      <Text fontWeight='bold'>Tổng tiền</Text>
                      <Text fontSize='md' fontWeight='black'>
                        988,000₫
                      </Text>
                    </Box>
                  </Box>
                </VStack>
                <Box borderTop='1px solid #e6e6e6' pt={4}>
                  <Text fontWeight='bold'>Chính sách hủy phòng</Text>
                  <Text>
                    <b>Nghiêm ngặt</b> : Hoàn lại 50% giá trị đặt phòng khi khách hàng huỷ phòng trong vòng 48h sau khi
                    đặt phòng thành công và trước 14 ngày so với thời gian check-in. Sau đó, hủy phòng trước 14 ngày so
                    với thời gian check-in, được hoàn lại 50% tổng số tiền đã trả (trừ phí dịch vụ).
                  </Text>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
    <Copyright />
  </Grid>
)

export default WhoComing
