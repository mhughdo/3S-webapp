import { Avatar, Box, chakra, Divider, Heading, Text } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { Element } from 'react-scroll'

const Reviews = () => {
  const NavLabel = chakra(Element)
  return (
    <NavLabel className='place-details-reviews' name='reviews' mt={20}>
      <Box className='reviews-title'>
        <Heading as='h3' fontSize='3xl' fontWeight='bolder' lineHeight='shorter'>
          Đánh giá
        </Heading>
      </Box>
      <Box className='single-review' my={8}>
        <Box display='flex' flexDirection='row'>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Box ml={2} display='flex' pt={1}>
            <Box>
              <Heading as='h5' fontWeight='bolder' lineHeight='shorter' fontSize='md'>
                Do Manh Hung
              </Heading>
              <Text fontSize='sm' color='#555'>
                about 1 year
              </Text>
            </Box>
            <Box display='flex' marginLeft={3} color='#FFB500' pt={0.25}>
              <AiFillStar style={{ marginRight: '3px', fontSize: '22px' }} />
              <AiFillStar style={{ marginRight: '3px', fontSize: '22px' }} />
              <AiFillStar style={{ marginRight: '3px', fontSize: '22px' }} />
            </Box>
          </Box>
        </Box>
        <Box className='reviews-content' mt={5}>
          <Text color='#555'>
            Phòng đẹp, không gian thoáng mát Nhận phòng thật sự ngạt nhiên, quá tuyệt vời với thái độ phục vụ của nhân
            viên rất thân thiện. giá rất rẽ so với khu vực. Sẽ điểm chọn lựa của tôi nghỉ ngơi mỗi lần đến HCM
          </Text>
        </Box>
      </Box>
      <Divider />
    </NavLabel>
  )
}

export default Reviews
