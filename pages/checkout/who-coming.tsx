/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-children-prop */
import Header from '@components/who-coming/Header'
import { getSession } from 'next-auth/client'
import {
  Text,
  FormHelperText,
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
  FormControl,
  FormLabel,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import Copyright from '@components/Copyright'
import Image from 'next/image'
import { FcCalendar } from 'react-icons/fc'
import { MdAccountCircle } from 'react-icons/md'

import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { NextPage } from 'next'
import ErrorPage from '@components/ErrorPage'
import { useState } from 'react'
import axios from '@utils/axios'
import { AxiosResponse } from 'axios/index'
import { isValidDate } from 'utils/validation'
import differenceInDays from 'date-fns/differenceInDays'
import { toDateString, dayOfWeek, calculateRoomPrice, formatPrice } from 'utils'
import format from 'date-fns/format'
import isEqual from 'date-fns/isEqual'
import Marker from '../../assets/svg/marker.svg'

const HR = chakra('hr')
const CalendarIcon = chakra(FcCalendar)
const PersonIcon = chakra(MdAccountCircle)

const WhoComing: NextPage<{ isLoggedIn: boolean; session: any; placeData?: any; isError?: boolean }> = ({
  isLoggedIn,
  session,
  placeData,
  isError,
}) => {
  const router = useRouter()
  const [coupon, setCoupon] = useState('')
  const toast = useToast()
  const [discountPercent, setDiscountPercent] = useState(0)
  const [couponLoading, setCouponLoading] = useState(false)
  const [bookingLoading, setBookingLoading] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const { query } = router

  const { guests, checkin, checkout, id }: { guests?: number; checkin?: string; checkout?: string; id?: string } = query
  const checkIn = new Date(checkin)
  const checkOut = new Date(checkout)

  if (
    !id ||
    !guests ||
    !checkin ||
    !checkout ||
    isError ||
    Number.isNaN(guests) ||
    guests > 4 ||
    isEqual(checkIn, checkOut) ||
    !isValidDate(checkIn) ||
    !isValidDate(checkOut) ||
    checkIn > checkOut ||
    checkIn < new Date()
  ) {
    return <ErrorPage />
  }

  const days = differenceInDays(checkOut, checkIn)
  const roomPrice = calculateRoomPrice(checkIn, checkOut, placeData)
  const discountPrice = discountPercent
    ? Math.round(((roomPrice + Number(placeData.schedule_price_attributes.cleaning_price)) * discountPercent) / 100)
    : 0
  const totalPrice = roomPrice + Number(placeData.schedule_price_attributes.cleaning_price) - discountPrice

  const handleBooking = async () => {
    try {
      setBookingLoading(true)
      await axios({
        method: 'POST',
        url: '/v1/booking/new',
        data: {
          start_date: format(checkIn, 'yyyy-MM-dd'),
          end_date: format(checkOut, 'yyyy-MM-dd'),
          num_of_people: guests,
          place_id: placeData.id,
        },
      })
      setBookingLoading(false)
      setBookingSuccess(true)
    } catch (error) {
      console.log(error)
      setBookingLoading(false)
      return toast({
        title: 'Lỗi',
        description:
          'Đã có lỗi xảy ra khi đặt phòng, vui lòng kiểm tra lại thông tin về phòng, ngày và số lượng người!',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const applyDiscount = async () => {
    if (!coupon) {
      return toast({
        title: 'Lỗi',
        description: 'Mã khuyến mại không được để trống',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
    try {
      setCouponLoading(true)
      const { data } = await axios({
        method: 'POST',
        url: '/v1/coupon/apply',
        data: {
          code_name: coupon,
        },
      })

      setCouponLoading(false)
      if (data?.discount) {
        setDiscountPercent(data.discount)
        return toast({
          title: 'Áp dụng mã khuyến mại thành công',
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        })
      }

      return toast({
        title: 'Lỗi',
        description: 'Mã khuyến mại không hợp lệ!',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error)
      setCouponLoading(false)
      return toast({
        title: 'Lỗi',
        description: 'Đã có lỗi xảy ra khi áp dụng mã khuyến mại hoặc mã khuyến mại không hợp lệ!',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  // if (!guests || !checkin || !checkout || !id) {
  //   return <ErrorPage />
  // }

  return (
    <Grid templateRows='80px 1fr auto' maxWidth='100%' minH='100vh'>
      <Header isSucceeded={bookingSuccess} />
      <Box background='#f4f4f4'>
        <Box my={12}>
          <Container maxW='calc(1296px + 5.6rem)' px={10}>
            <Grid templateColumns='repeat(6, 1fr)' gap={4}>
              <GridItem colSpan={3}>
                {!isLoggedIn && (
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
                          Bạn chưa đăng nhập
                        </Box>
                        <Box as='p' mb={7} color='gray.600'>
                          Hãy đăng nhập vào 3S ngay để đặt phòng.
                        </Box>
                        <NextLink href='/signin'>
                          <Link href='/signin' _hover={{ textDecoration: 'none' }}>
                            <Button colorScheme='orange'>Đăng nhập ngay</Button>
                          </Link>
                        </NextLink>
                      </Box>
                    </Box>
                  </Box>
                )}
                {bookingSuccess ? (
                  <Box mb={7}>
                    <Box mb={7}>
                      <Alert
                        status='success'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='300px'>
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                          Yêu cầu của bạn đã được gửi tới Chủ nhà thành công!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                          Cảm ơn bạn đã đặt phòng tại 3S, ngay khi có phản hổi từ phía Chủ nhà, 3S Place sẽ lập tức
                          thông báo đến bạn.
                        </AlertDescription>
                        <Box my={4}>
                          <NextLink href='/me/bookings'>
                            <Link href='/me/bookings' _hover={{ textDecoration: 'none' }}>
                              <Button colorScheme='orange'>Quản lý đặt chỗ</Button>
                            </Link>
                          </NextLink>
                        </Box>
                      </Alert>
                    </Box>
                  </Box>
                ) : (
                  <>
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
                          {guests} khách
                        </Box>
                      </Box>
                      <Box mt={8} mb={4}>
                        <Text fontWeight='bold' mb={2}>
                          {days} đêm tại {placeData.name}
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
                                {toDateString(checkIn)}
                              </Text>
                              <Text fontWeight='semi-bold'>{dayOfWeek[checkIn.getDay()]}</Text>
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
                                {toDateString(checkOut)}
                              </Text>
                              <Text fontWeight='semi-bold' fontSize='sm'>
                                {dayOfWeek[checkOut.getDay()]}
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
                          Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra tại chỗ ở trong thời gian lưu
                          trú.
                        </Text>
                      </Box>
                      <Box mt={8} mb={4}>
                        <Text fontWeight='bold' mb={2}>
                          Nội quy chỗ ở
                        </Text>
                        <Text mb={2} fontSize='sm'>
                          Yêu cầu chứng minh thư, căn cước công dân, hộ chiếu hoặc đặt cọc tại chỗ nghỉ. Hạn chế làm ồn
                          sau 10 giờ tối. Không đi giày,dép trong nhà. Không hút thuốc ở khu vực chung
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
                        <FormControl id='name' isRequired>
                          <FormLabel>Tên Khách hàng</FormLabel>
                          <Input disabled variant='filled' mt={4} background='gray.200' value={session?.user?.name} />
                          <FormHelperText>Họ tên trên CMND/ Thẻ căn cước</FormHelperText>
                        </FormControl>
                      </Box>
                      <Box mt={8} mb={4} d='flex'>
                        <Box px={1} flexBasis='50%' maxW='50%'>
                          <FormControl id='phone' isRequired>
                            <FormLabel>Số điện thoại</FormLabel>
                            <InputGroup>
                              <InputLeftAddon children='+84' />
                              <Input
                                disabled
                                type='phone'
                                borderLeftRadius='0'
                                placeholder='Số điện thoại'
                                value={session?.full_info?.phone}
                              />
                            </InputGroup>
                          </FormControl>
                        </Box>
                        <Box px={1} flexBasis='50%' maxW='50%'>
                          <FormControl id='email' isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                              disabled
                              type='email'
                              borderLeftRadius='0'
                              placeholder='Email'
                              value={session?.user?.email}
                            />
                          </FormControl>
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
                          </Select>
                        </Box>
                      </Box>
                      <Box mt={10}>
                        <Box as='h3' fontSize='3xl' fontWeight='bold'>
                          Mã khuyến mại
                        </Box>
                        <Input
                          placeholder='Nhập mã khuyến mại'
                          variant='filled'
                          background='gray.200'
                          value={coupon}
                          disabled={Boolean(discountPercent)}
                          onChange={(event) => setCoupon(event.target.value)}
                          _focus={{ borderColor: 'orange.500', boxShadow: '0 0 5px 0 rgba(246,94,57,.5)' }}
                        />
                        {discountPercent ? (
                          <Button
                            mt={4}
                            backgroundImage='linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)'
                            backgroundSize='500% auto'
                            color='white'
                            onClick={() => {
                              setDiscountPercent(0)
                              setCoupon('')
                            }}
                            _hover={{
                              backgroundPosition: '100%',
                              color: 'white',
                            }}>
                            Loại bỏ
                          </Button>
                        ) : (
                          <Button
                            mt={4}
                            backgroundImage='linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)'
                            backgroundSize='500% auto'
                            color='white'
                            disabled={!coupon || couponLoading}
                            onClick={applyDiscount}
                            _hover={{
                              backgroundPosition: '100%',
                              color: 'white',
                            }}>
                            Áp dụng
                          </Button>
                        )}
                      </Box>
                      <Button
                        backgroundImage='linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)'
                        backgroundSize='500% auto'
                        transition='all .3s'
                        color='white'
                        mt={6}
                        disabled={!isLoggedIn || bookingLoading}
                        _hover={{
                          backgroundPosition: '100%',
                          color: 'white',
                        }}
                        onClick={handleBooking}>
                        Đặt phòng
                      </Button>
                    </Box>
                  </>
                )}
              </GridItem>
              <GridItem colStart={5} colEnd={7} fontSize='sm'>
                <Text fontSize='3xl' fontWeight='bold' mb={8}>
                  Chi tiết đặt phòng
                </Text>
                <Box background='white' boxShadow='md' position='sticky' top='100px' borderRadius='md' p={6}>
                  <Box borderBottom='1px solid #e6e6e6' pb={6}>
                    <Link href='/place/1' d='flex'>
                      <Box pr='10%' minW='65%'>
                        <Box as='h4' fontWeight='black' mb={4}>
                          {placeData.name}
                        </Box>
                        <Box d='flex'>
                          <Marker />
                          <Box ml={2} as='span'>
                            {placeData.address}
                          </Box>
                        </Box>
                      </Box>
                      <Box w='128px' sx={{ img: { borderRadius: 'md' } }}>
                        <Image src={placeData.image} width='128px' height='80px' />
                      </Box>
                    </Link>
                  </Box>
                  <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                    <Box pt={6}>
                      <Box d='flex' alignItems='center'>
                        <CalendarIcon d='inline-block' mr={1} width='24px' height='24px' />
                        <Box as='span' fontWeight='bold'>
                          {days} đêm{' '}
                        </Box>{' '}
                        · {toDateString(checkIn)} - {toDateString(checkOut)}
                      </Box>
                      <Box d='flex' alignItems='center'>
                        <PersonIcon d='inline-block' mr={1} color='orange.500' width='24px' height='24px' />
                        <Box fontWeight='bold'>{guests} người lớn</Box>
                      </Box>
                    </Box>
                    <Box d='flex' flexDirection='column'>
                      <Box d='flex' justifyContent='space-between'>
                        <Text>Giá thuê {days} đêm</Text>
                        <Text fontSize='md'>{formatPrice(roomPrice)}₫</Text>
                      </Box>
                      <Box d='flex' justifyContent='space-between' pt={3}>
                        <Text>Phí dọn dẹp</Text>
                        <Text fontSize='md'>{formatPrice(placeData.schedule_price_attributes.cleaning_price)}₫</Text>
                      </Box>
                      {!!discountPrice && (
                        <Box d='flex' justifyContent='space-between' pt={3}>
                          <Text>Mã khuyến mại</Text>
                          <Text fontSize='md'>-{formatPrice(discountPrice)}₫</Text>
                        </Box>
                      )}
                    </Box>
                    <Box pb={3}>
                      <Box d='flex' justifyContent='space-between'>
                        <Text fontWeight='bold'>Tổng tiền</Text>
                        <Text fontSize='md' fontWeight='black'>
                          {formatPrice(totalPrice)}₫
                        </Text>
                      </Box>
                    </Box>
                  </VStack>
                  <Box borderTop='1px solid #e6e6e6' pt={4}>
                    <Text fontWeight='bold'>Chính sách hủy phòng</Text>
                    <Text>
                      <b>Nghiêm ngặt</b> : Hoàn lại 50% giá trị đặt phòng khi khách hàng huỷ phòng trong vòng 48h sau
                      khi đặt phòng thành công và trước 14 ngày so với thời gian check-in. Sau đó, hủy phòng trước 14
                      ngày so với thời gian check-in, được hoàn lại 50% tổng số tiền đã trả (trừ phí dịch vụ).
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
}

WhoComing.getInitialProps = async (ctx): Promise<any> => {
  const session = await getSession(ctx)
  try {
    const { query } = ctx
    const { id } = query
    if (!id) {
      return { isLoggedIn: Boolean(session?.user?.name), session, isError: true }
    }

    const {
      data: { data },
    }: { data: AxiosResponse<any> } = await axios({
      url: `/v1/place/${id}`,
    })

    return { isLoggedIn: Boolean(session?.user?.name), session, isError: false, placeData: data }
  } catch (error) {
    return { isLoggedIn: Boolean(session?.user?.name), session, isError: true }
  }
}

export default WhoComing
