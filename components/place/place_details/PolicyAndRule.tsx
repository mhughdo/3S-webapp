import { Box, chakra, Heading, Link, Text } from '@chakra-ui/react'
import { Element } from 'react-scroll'

const PolicyAndRule = () => {
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
          <Text>
            <b>Strict</b>: Guests will receive 50% refund if cancel within 48 hours of booking and at least 14 days
            before check-in. If guests cancel after 48 hours of booking and at least 14 days before check-in, the
            service fee is non-refundable.
            <Link color='#f65e39' ml={2}>
              Chi tiết
            </Link>
          </Text>
        </Box>
        <Box className='rules'>
          <Heading as='h4' fontSize='xl' mt={12} mb={3}>
            Lưu ý đặc biệt
          </Heading>
          <Text>- No smoking room</Text>
          <Text>- No pets</Text>
          <Text>- No drugs, gambling, alcohol, party gatherings</Text>
          <Text>- Do not store weapons, explosives</Text>
          <Text>- No smoking room</Text>
          <Text>- No pets</Text>
          <Text>- No drugs, gambling, alcohol, party gatherings</Text>
          <Text>- Do not store weapons, explosives</Text>
        </Box>
        <Box className='check-in'>
          <Heading as='h4' fontSize='xl' mt={12} mb={3}>
            Thời gian nhận phòng
          </Heading>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            padding='12px 18px'
            backgroundColor='#f6f6f6'
            color='#333'>
            <Text>Nhận phòng</Text>
            <Text fontWeight='bold'>02:00 pm - 11:00 pm</Text>
          </Box>
          <Box display='flex' flexDirection='row' justifyContent='space-between' padding='12px 18px' color='#333'>
            <Text>Trả phòng</Text>
            <Text fontWeight='bold'>11:00 am</Text>
          </Box>
        </Box>
      </Box>
    </NavLabel>
  )
}

export default PolicyAndRule
