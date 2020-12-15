/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable camelcase */
import { useState } from 'react'
import { Avatar, Box, Button, chakra, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { BiLocationPlus, BiBuildings } from 'react-icons/bi'
import { Element } from 'react-scroll'
import { useQuery } from 'react-query'
import axios from '@utils/axios'

type CouponType = {
  code_name: string
  discount: number
}[]

const PlaceIntro = ({ name, address, roomData, details, placeType }) => {
  const NavLabel = chakra(Element)
  const [truncated, setTruncated] = useState(true)

  const {
    data: { data: coupon } = [] as any,
  }: { isError: boolean; isLoading: boolean; data: { data: CouponType } } = useQuery(
    'getAllCoupon',
    async () => {
      const { data } = await axios({
        url: '/v1/coupon/all',
        method: 'GET',
      })

      return data
    },
    { retry: false }
  )

  const singleCoupon = coupon?.length && coupon[0]

  return (
    <NavLabel className='place-details-overviews' name='overview'>
      <Box>
        <Flex justifyContent='space-between'>
          <Heading as='h1' fontSize='4xl' flexBasis='77%' fontWeight='bolder'>
            {name}
          </Heading>
          <Box flexBasis='16%' alignContent='center' textAlign='end'>
            <Avatar size='lg' src='https://cdn.luxstay.com/rooms/34370/large/2f78a6f10c83e81708f369287c87e4b6.png' />
          </Box>
        </Flex>
      </Box>
      <Box mt={6} fontSize='sm'>
        <Flex justifyContent='flex-start' flexDirection='row' alignItems='center'>
          <BiLocationPlus size='1.5rem' />
          <Text fontWeight='bolder' ml={3}>
            {address}
          </Text>
        </Flex>
      </Box>
      <Box mt={3} fontSize='sm'>
        <Flex justifyContent='flex-start' flexDirection='row' alignItems='center'>
          <BiBuildings size='1.5rem' />
          <Text fontWeight='bolder' ml={3}>
            {placeType}
          </Text>
          <Text fontWeight='medium' fontSize='medium' ml={1}>
            · {roomData?.square} m<sup>2</sup>
          </Text>
        </Flex>
      </Box>
      <Box mt={4}>
        <Stack spacing='5px' direction='row'>
          <Text>Nguyên căn ·</Text>
          {roomData?.num_of_bedroom} phòng ngủ ·<Text>{roomData?.num_of_kitchen} phòng bếp ·</Text>
          {roomData?.num_of_bed} giường ·<Text>{roomData?.num_of_bathroom} phòng tắm</Text>
        </Stack>
      </Box>
      <Box className='coupon-area' mt='18px'>
        <Box pb={5}>
          <Box animation='fadeIn .4s ease-in-out'>
            <Box
              background='#f6f6f6'
              borderRadius='md'
              boxShadow='0 4px 8px 0 rgba(0,0,0,.1)'
              border='1px solid #d6d6d6'
              overflow='hidden'
              width='331px'>
              <Box py={3} px={2} fontWeight='bold' backgroundColor='#4a4a4a' color='#fff'>
                <Text>Mã khuyến mãi</Text>
              </Box>
              <Box p={3} fontSize='sm'>
                <Box className='coupon-des'>
                  Khuyến mãi <strong style={{ color: '#FF0037' }}>{singleCoupon?.discount}%</strong> -
                  <strong style={{ color: '#FF0037' }}> {singleCoupon?.code_name}</strong>
                  <br />
                  Nhận phòng: <strong>Không giới hạn</strong>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt='36px'>
        <Box>
          <Box position='relative'>
            <Box id='short-intro' lineHeight='taller'>
              <Text fontSize='md' color='#222' isTruncated={truncated} noOfLines={truncated ? 6 : null}>
                {details}
              </Text>
              <Button onClick={() => setTruncated(!truncated)} color='#f65e39' variant='link' outline={0}>
                {truncated ? 'Đọc thêm' : 'Thu gọn'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </NavLabel>
  )
}

export default PlaceIntro
