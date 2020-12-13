/* eslint-disable @typescript-eslint/ban-types */
import { Box, Select, FormControl, FormLabel, Input, Text, Flex, Spacer } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import InfoBox from '../InfoBox'

const BaseInformation = ({ showNextTab }: { showNextTab: Function }) => {
  const [placeName, setPlaceName] = useState('')
  const [placeType, setPlaceType] = useState('')
  const [rentType, setRentType] = useState('')

  useEffect(() => {
    if (placeName === '' || placeType === '' || rentType === '') {
      showNextTab(false)
    } else showNextTab(true)
  }, [placeName, placeType, rentType, showNextTab])
  return (
    <Flex>
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
          <Select placeholder='Chọn loại chỗ nghỉ' onChange={(event) => setPlaceType(event.target.value)}>
            <option value={1}>Homestay</option>
            <option value={2}>Nhà riêng</option>
            <option value={3}>Biệt thư</option>
            <option value={4}>Chung cư</option>
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
            onChange={(event) => {
              setPlaceName(event.target.value)
            }}
          />
        </FormControl>
        <FormControl id='rent_type' isRequired mb={5}>
          <FormLabel>Hình thức cho thuê</FormLabel>
          <Select
            placeholder='Hình thức cho thuê'
            onChange={(event) => {
              setRentType(event.target.value)
            }}>
            <option value={1}>Nguyên căn</option>
            <option value={2}>Phòng riêng</option>
            <option value={3}>Phòng tập thể</option>
          </Select>
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
