import { Box } from '@chakra-ui/react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <Box
      position='absolute'
      top='50%'
      left='100px'
      background='rgba(0,0,0,.7)'
      onClick={onClick}
      zIndex='1'
      width='56px'
      height='56px'
      borderRadius='56px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      color='#fff'
      cursor='pointer'>
      <AiOutlineArrowLeft />
    </Box>
  )
}

export default PrevArrow
