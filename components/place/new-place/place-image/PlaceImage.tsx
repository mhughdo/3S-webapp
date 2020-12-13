/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useRef } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Text, Flex, Spacer } from '@chakra-ui/react'
import InfoBox from '../InfoBox'

const PlaceImage = () => {
  const file = useRef(null)
  return (
    <Box mt={10}>
      <Flex>
        <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
          <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
            <Text fontSize='xl' fontWeight='bold'>
              Hình ảnh chỗ nghỉ
            </Text>
            <Text color='gray.500' fontSize='md'>
              Một vài tấm ảnh đẹp sẽ giúp khách hàng có nhiều thiện cảm hơn về chỗ nghỉ của bạn.
            </Text>
          </Box>
          <FormControl id='cover_image' isRequired mb={5}>
            <FormLabel>Ảnh bìa:</FormLabel>
            <Input
              type='file'
              display='none'
              ref={file}
              onChange={(event) => {
                console.log(URL.createObjectURL(event.target.files[0]))
              }}
            />
            <Button onClick={() => file.current.click()}>Upload Image</Button>
          </FormControl>
          <FormControl id='overview_image' isRequired mb={5}>
            <FormLabel>Ảnh chỗ nghỉ:</FormLabel>
            <Input type='file' display='none' ref={file} />
            <Button onClick={() => file.current.click()}>Upload Image</Button>
          </FormControl>
        </Box>
        <Spacer />
        <Box w='35%'>
          <InfoBox
            title='Một vài gợi ý giúp ảnh chỗ nghỉ ghi điểm trong mắt khách hàng'
            content='Ảnh bìa là yếu tố gây ấn tượng đầu tiên của chỗ nghỉ với khách hàng. Ảnh bìa chỗ nghỉ nên là tấm ảnh có góc rộng, chụp được tổng quan chỗ nghỉ, màu sắc ảnh sáng và sắc nét.
            Hãy đảm bảo rằng 5 ảnh đầu tiên của chỗ nghỉ đều là ảnh ngang, đủ ánh sáng và thể hiện rõ nhất các ưu điểm tại chỗ nghỉ của bạn.'
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default PlaceImage
