/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
import { Container, Grid, useToast, Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import usePlacesByCityData from '@hooks/usePlacesByCityData'
import ReactPaginate from 'react-paginate'
import RoomItem from './RoomItem'

type PriceType = {
  normal_day_price: number
  weekend_price: number
}

type RoomItemType = {
  id: number
  name: string
  place_type: string
  schedule_price_attributes: PriceType
  image: string
  ratings: []
}[]

const RoomList = () => {
  const toast = useToast()

  const router = useRouter()

  const { id } = router.query

  const convertIdToCity = (id: string | string[]) => {
    switch (id) {
      case 'hanoi':
        return 'Hà Nội'
      case 'hcm':
        return 'Hồ Chí Minh'
      case 'vungtau':
        return 'Vũng Tàu'
      case 'dalat':
        return 'Đà Lạt'
      case 'danang':
        return 'Đà Nẵng'
      case 'nhatrang':
        return 'Nha Trang'
      case 'quangninh':
        return 'Quang Ninh'
      case 'hoian':
        return 'Hội Anh'
      default:
        return ''
    }
  }

  const {
    isLoading,
    isError,
    data: { data } = {} as any,
  }: { isLoading: boolean; isError: boolean; data: { data: RoomItemType } } = usePlacesByCityData({
    city: id,
  })

  if (isError) {
    toast({
      title: 'Đã có lỗi xảy ra',
      description: 'Lỗi khi tải dữ liệu, vui lòng kiểm tra lại đường truyền mạng!',
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
    })
  }

  const onPageChange = () => 0

  return (
    <Container maxW='100%' px='0' mt={32}>
      <Text fontWeight='bolder' fontSize={28} as='h2' mt={3} mb={8}>
        {data?.length} địa điểm tại {convertIdToCity(id)}
      </Text>
      <Grid templateColumns='repeat(5, 1fr)' rowGap={5} columnGap={3}>
        {data?.length &&
          data.map((place) => (
            <RoomItem
              key={place.id}
              placeId={place.id}
              name={place.name}
              placeType={place.place_type}
              price={place.schedule_price_attributes?.normal_day_price}
              ratings={place.ratings}
              image={place.image}
            />
          ))}
        {isLoading && Array.from({ length: 10 }).map((_: any, index: number) => <RoomItem key={index} isLoading />)}
      </Grid>
      <ReactPaginate
        previousLabel='<'
        nextLabel='>'
        breakLabel='...'
        breakClassName='break-me'
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName='paginate-wrap'
        subContainerClassName='paginate-inner'
        pageClassName='paginate-li'
        pageLinkClassName='paginate-a'
        activeClassName='paginate-active'
        nextLinkClassName='paginate-next-a'
        previousLinkClassName='paginate-prev-a'
        breakLinkClassName='paginate-break-a'
      />
    </Container>
  )
}

export default RoomList
