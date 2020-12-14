import { Box, chakra, Heading, Link, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'
import { DisplayPolicy } from '@utils/displayPolicy'

const PolicyAndRule = ({ policy, rule }) => {
  const NavLabel = chakra(Element)
  return (
    <NavLabel className='policy-and-rules' name='policies' mt={20}>
      <Box className='title'>
        <Heading as='h3' fontSize='3xl' fontWeight='bolder'>
          Nội quy và chính sách về chỗ ở
        </Heading>
      </Box>
      <Box>
        <Box className='policy'>
          <Heading as='h4' fontSize='xl' mt={6} mb={3}>
            Chính sách hủy phòng
          </Heading>
          <Text>{DisplayPolicy(policy?.cancel_policy)}</Text>
        </Box>
        <Box className='rules'>
          <Heading as='h4' fontSize='xl' mt={12} mb={3}>
            Lưu ý đặc biệt
          </Heading>
          <Text>{rule?.special_rules}</Text>
        </Box>
      </Box>
    </NavLabel>
  )
}

export default PolicyAndRule
