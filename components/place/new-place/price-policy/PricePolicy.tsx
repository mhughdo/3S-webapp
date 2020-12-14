/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import {
  Box,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import InfoBox from '../InfoBox'

const PricePolicy = ({ completeStep, syncData, data }: { completeStep: Function; syncData: Function; data: any }) => {
  const [cancelRule, setCancelRule] = useState(data.policy_attributes.cancel_policy)
  const [normalDayPrice, setNormalDayPrice] = useState(data.schedule_price_attributes.normal_day_price)
  const [weekendPrice, setWeekendPrice] = useState(data.schedule_price_attributes.weekend_price)
  const [cleaningPrice, setCleaningPrice] = useState(data.schedule_price_attributes.cleaning_price)
  const [maxPeople, setMaxPeople] = useState(data.policy_attributes.max_num_of_people)

  useEffect(() => {
    completeStep(true)
    syncData({
      policy_attributes: {
        currency: 'vnd',
        cancel_policy: cancelRule,
        max_num_of_people: maxPeople
      },
      schedule_price_attributes: {
        normal_day_price: normalDayPrice,
        weekend_price: weekendPrice,
        cleaning_price: cleaningPrice
      }
    })
  }, [cancelRule, cleaningPrice, completeStep, maxPeople, normalDayPrice, syncData, weekendPrice])

  return (
    <Box mt={10} pb={10}>
      <Flex mb={5}>
        <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
          <Box>
            <Text fontSize='xl' fontWeight='bold'>
              Thiết lập giá và chính sách
            </Text>
            <Text color='gray.500' fontSize='md'>
              Doanh thu của chủ nhà phụ thuộc trực tiếp vào việc thiết lập giá cùng các quy định về số khách, số đêm và
              chính sách hủy phòng.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex mb={5}>
        <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
          <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
            <Text fontSize='xl' fontWeight='bold'>
              Chính sách huỷ phòng
            </Text>
          </Box>
          <RadioGroup defaultValue='normal' onChange={(value) => setCancelRule(value.toString())} value={cancelRule}>
            <Stack spacing={2} direction='column'>
              <Radio colorScheme='orange' value='normal'>
                Trung bình
              </Radio>
              <Box mb={5}>
                <Text fontWeight='bold' fontSize='sm'>
                  Trung bình
                </Text>
                <Text color='gray.500' fontSize='sm'>
                  Miễn phí huỷ phòng cho khách trong vòng 48h sau khi đặt phòng thành công và trước 5 ngày so với thời
                  gian check-in.
                </Text>
              </Box>
              <Radio colorScheme='orange' value='flexible'>
                Linh hoạt
              </Radio>
              <Box mb={5}>
                <Text fontWeight='bold' fontSize='sm'>
                  Linh hoạt
                </Text>
                <Text color='gray.500' fontSize='sm'>
                  Miễn phí huỷ phòng cho khách trong vòng 48h sau khi đặt phòng thành công và trước 1 ngày so với thời
                  gian check-in.
                </Text>
              </Box>
              <Radio colorScheme='orange' value='strict'>
                Nghiêm ngặt
              </Radio>
              <Box mb={5}>
                <Text fontWeight='bold' fontSize='sm'>
                  Nghiêm ngặt
                </Text>
                <Text color='gray.500' fontSize='sm'>
                  Khách hàng được hoàn lại 50% số tiền đã trả khi huỷ phòng trong vòng 48h sau khi đặt phòng thành công
                  và trước 14 ngày so với thời gian check-in. Trong trường hợp đó, chủ nhà nhận về 50% giá trị đặt phòng
                  (trừ phí cho 3S)
                </Text>
              </Box>
            </Stack>
          </RadioGroup>
        </Box>
        <Spacer />
        <Box w='35%'>
          <InfoBox
            title='Những điều cần lưu ý khi cài đặt chính sách hủy phòng?'
            content='Tùy vào từng loại chỗ nghỉ cũng như giá trị một đêm tại chỗ nghỉ, chủ nhà sẽ có thể chọn những chính sách hủy phòng phù hợp. Tuy nhiên theo khảo sát từ Luxstay, hơn 86% khách hàng ưu tiên đặt các chỗ nghỉ có chế độ hủy phòng linh hoạt (Flexible) hơn. Do đó, chúng tôi khuyên bạn nên cài đặt chế độ này cho chỗ nghỉ của mình.'
          />
        </Box>
      </Flex>
      <Flex mb={5}>
        <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
          <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
            <Text fontSize='xl' fontWeight='bold'>
              Số người
            </Text>
          </Box>
          <FormControl id='max_num_of_people' isRequired mb={5} mr={5}>
            <FormLabel>Số lượng người tối đa: </FormLabel>
            <NumberInput step={1} defaultValue={1} min={1} max={100} onChange={(value) => setMaxPeople(parseInt(value))} value={maxPeople}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Box>

        <Spacer />
        <Box w='35%'>
          <InfoBox
            title='Thiết lập số khách như thế nào là hợp lý?'
            content='Số lượng khách nên được tính toán phù hợp với số lượng phòng ngủ để đảm bảo ít nhất 1 khách/1 phòng ngủ (Đối với lượng khách tiêu chuẩn).
          Khi giới hạn số khách (người lớn, trẻ em, trẻ sơ sinh), chủ nhà phải chắc chắn rằng mỗi nhóm khách không được vượt quá Số khách tối đa.'
          />
        </Box>
      </Flex>

      <Flex mb={5}>
        <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
          <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
            <Text fontSize='xl' fontWeight='bold'>
              Chính sách giá
            </Text>
          </Box>
          <FormControl id='normal_day_price' isRequired mb={5} mr={5}>
            <FormLabel>Giá ngày thường: </FormLabel>
            <NumberInput step={50000} defaultValue={200000} min={0} max={10000000} onChange={(value) => setNormalDayPrice(parseInt(value))} value={normalDayPrice}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl id='weekend_price' isRequired mb={5} mr={5}>
            <FormLabel>Giá ngày cuối tuần: </FormLabel>
            <NumberInput step={50000} defaultValue={200000} min={0} max={10000000} onChange={(value) => setWeekendPrice(parseInt(value))} value={weekendPrice}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl id='cleaning_price' isRequired mb={5} mr={5}>
            <FormLabel>Phí dọn dẹp: </FormLabel>
            <NumberInput step={10000} defaultValue={50000} min={0} max={10000000} onChange={(value) => setCleaningPrice(parseInt(value))} value={cleaningPrice}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Box>

        <Spacer />
        <Box w='35%'>
          <InfoBox
            title='Đặt giá cơ bản sao cho đúng?'
            content=' Giá cơ bản là mức giá hiển thị tại chỗ nghỉ trong kết quả tìm kiếm, chiếm đến 70% quyết định click vào chỗ nghỉ của khách hàng'
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default PricePolicy
