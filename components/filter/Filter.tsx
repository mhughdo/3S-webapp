import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import CheckboxFilter from '@components/filter/CheckBoxFilter'
import ButtonFilter from '@components/filter/ButtonFilter'
import SliderFilter from '@components/filter/SliderFilter'

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [roomType, setRoomType] = useState([])
  const [isCanceledRoom, setIsCanceledRoom] = useState(false)
  const [isDiscount, setIsDiscount] = useState(false)
  const onLoadData = ({
    minPrice_ = minPrice,
    maxPrice_ = maxPrice,
    roomType_ = roomType,
    isCanceledRoom_ = isCanceledRoom,
    isDiscount_ = isDiscount,
  }: {
    minPrice_?: number
    maxPrice_?: number
    roomType_?: any
    isCanceledRoom_?: boolean
    isDiscount_?: boolean
  }) => {
    if (minPrice_) setMinPrice(minPrice_)
    if (maxPrice_) setMaxPrice(maxPrice_)
    if (roomType_) setRoomType(roomType_)
    if (isCanceledRoom_) setIsCanceledRoom(isCanceledRoom_)
    if (isDiscount_) setIsDiscount(isDiscount_)
    // api here
  }
  const roomTypeData = [
    {
      name: 'Home Stay',
      value: 'homestay',
    },
    {
      name: 'Khách sạn',
      value: 'hotel',
    },
  ]
  return (
    <Flex px={7} mb={5}>
      <CheckboxFilter title='Loại phòng' name='roomType_' data={roomTypeData} onLoadData={onLoadData} />
      <ButtonFilter title='Giá ưu đãi' name='isDiscount_' onLoadData={onLoadData} />
      <ButtonFilter title='Huỷ phòng linh hoạt' name='isCanceledRoom_' onLoadData={onLoadData} />
      <SliderFilter
        nameOfMin='minPrice_'
        nameOfMax='maxPrice_'
        onLoadData={onLoadData}
        title='Giá chỗ ở'
        titleOfMin='Giá thấp nhất'
        titleOfMax='Giá cao nhất'
        min={0}
        max={1000000}
        step={100000}
      />
    </Flex>
  )
}

export default Filter
