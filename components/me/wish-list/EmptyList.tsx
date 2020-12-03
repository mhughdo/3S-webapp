import { Box, Text } from '@chakra-ui/react'
import { FaRegListAlt } from 'react-icons/fa'

const EmptyList = () => (
  <Box my={6} display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
    <FaRegListAlt fontSize={110} color='#999' />
    <Text color='#999' fontSize='md' mt={3}>
      Không có kết quả phù hợp.
    </Text>
  </Box>
)

export default EmptyList
