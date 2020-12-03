import { Box } from '@chakra-ui/react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const NextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props
  return (
    <Box
      position='absolute'
      top='50%'
      right='100px'
      background='rgba(0,0,0,.7)'
      onClick={onClick}
      width='56px'
      height='56px'
      borderRadius='56px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      color='#fff'
      cursor='pointer'>
      <AiOutlineArrowRight />
    </Box>
  )
}

export default NextArrow
