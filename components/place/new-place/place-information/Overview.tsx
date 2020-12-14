/* eslint-disable @typescript-eslint/ban-types */
import { Box, Textarea, FormControl, FormLabel, Text, Flex, Spacer } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import InfoBox from '../InfoBox'

const Overview = ({
  completeTab,
  syncOverview,
  data,
}: {
  completeTab: Function
  syncOverview: Function
  data: any
}) => {
  const [overview, setOverview] = useState(data.details)

  useEffect(() => {
    if (overview !== '') {
      syncOverview(overview)
      completeTab(true)
    } else {
      completeTab(false)
    }
  }, [completeTab, overview, syncOverview])

  return (
    <Flex>
      <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
        <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
          <Text fontSize='xl' fontWeight='bold'>
            Thông tin chỗ nghỉ
          </Text>
          <Text color='gray.500' fontSize='md'>
            Chia sẻ với khách hàng một vài thông tin ngắn gọn và nổi bật về chỗ nghỉ này của bạn.
          </Text>
        </Box>
        <FormControl id='overview' mb={5} isRequired>
          <FormLabel>Tổng quan</FormLabel>
          <Textarea
            placeholder='Tổng quan về chỗ nghỉ của bạn'
            onChange={(event) => {
              setOverview(event.target.value)
            }}
            value={overview}
          />
        </FormControl>
      </Box>
      <Spacer />
      <Box w='35%'>
        <InfoBox
          title='Thế nào là mô tả chỗ nghỉ thu hút và đầy đủ thông tin?'
          content='Hãy cố gắng mang đến cho khách hàng những thông tin chi tiết nhất, cụ thể nhất, nổi bật nhất về chỗ ở của bạn để thôi thúc khách hàng đặt phòng.'
        />
      </Box>
    </Flex>
  )
}

export default Overview
