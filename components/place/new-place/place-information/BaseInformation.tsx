/* eslint-disable @typescript-eslint/ban-types */
import { Box, Select, FormControl, FormLabel, Input, Text, Flex, Spacer } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import InfoBox from '../InfoBox'

const BaseInformation = ({
  completeTab,
  syncPlaceName,
  syncPlaceType,
}: {
  completeTab: Function
  syncPlaceName: Function
  syncPlaceType: Function
}) => {
  const [placeName, setPlaceName] = useState('')
  const [placeType, setPlaceType] = useState('')

  useEffect(() => {
    if (placeName === '' || placeType === '') {
      completeTab(false)
    } else {
      syncPlaceName(placeName)
      syncPlaceType(placeType)
      completeTab(true)
    }
  }, [placeName, placeType, completeTab, syncPlaceName, syncPlaceType])

  return (
    <Flex mb={10}>
      <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
        <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
          <Text fontSize='xl' fontWeight='bold'>
            Phân loại chỗ nghỉ
          </Text>
          <Text color='gray.500' fontSize='md'>
            Trước hết, hãy cho chúng tôi biết, chỗ nghỉ của bạn thuộc loại hình nào.
          </Text>
        </Box>
        <FormControl id='place_type' isRequired mb={5}>
          <FormLabel>Chỗ nghỉ của bạn là:</FormLabel>
          <Select
            placeholder='Chọn loại chỗ nghỉ'
            onChange={(event) => setPlaceType(event.target.value)}
            value={placeType}>
            <option value='homestay'>Homestay</option>
            <option value='villa'>Villa</option>
            <option value='apartment'>Căn hộ</option>
            <option value='penhouse'>Penhouse</option>
            <option value='hostel'>Hotel</option>
            <option value='motel'>Motel</option>
          </Select>
        </FormControl>
        <InfoBox
          title='Homestay'
          content=' Không gian lưu trú nơi các vị khách được sinh hoạt trong những ngôi nhà dân theo phong cách sống bản địa.'
        />
        <FormControl id='place_name' isRequired mb={5}>
          <FormLabel>Tên chỗ nghỉ</FormLabel>
          <Input
            placeholder='Tên chỗ nghỉ'
            value={placeName}
            onChange={(event) => {
              setPlaceName(event.target.value)
            }}
          />
        </FormControl>
      </Box>
      <Spacer />
      <Box w='35%'>
        <InfoBox
          title='Tại sao cần phân loại chỗ nghỉ?'
          content='Tại 3S, chúng tôi phân chỗ nghỉ thành 29 loại, việc này giúp cho khách hàng lựa chọn nơi ở dễ dàng hơn. Đồng thời Luxstay cũng có điều kiện hỗ trợ bạn tốt hơn.'
        />
      </Box>
    </Flex>
  )
}

export default BaseInformation
