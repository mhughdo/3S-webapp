import { Box, Image } from '@chakra-ui/react'
import Silder from 'react-slick'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

const ImageSlider = () => {
  const settings = {
    className: 'center',
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <Box width='100%'>
      <Silder {...settings}>
        <Box>
          <Image
            width='100%'
            fallbackSrc='https://www.luxstay.com/loading-img.svg'
            src='https://cdn.luxstay.com/rooms/34370/large/2f78a6f10c83e81708f369287c87e4b6.png'
          />
        </Box>
        <Box>
          <Image
            width='100%'
            fallbackSrc='https://www.luxstay.com/loading-img.svg'
            src='https://cdn.luxstay.com/rooms/34370/large/2f78a6f10c83e81708f369287c87e4b6.png'
          />
        </Box>
        <Box>
          <Image
            width='100%'
            fallbackSrc='https://www.luxstay.com/loading-img.svg'
            src='https://cdn.luxstay.com/rooms/34370/large/2f78a6f10c83e81708f369287c87e4b6.png'
          />
        </Box>
        <Box>
          <Image
            width='100%'
            fallbackSrc='https://www.luxstay.com/loading-img.svg'
            src='https://cdn.luxstay.com/rooms/34370/large/2f78a6f10c83e81708f369287c87e4b6.png'
          />
        </Box>
        <Box>
          <Image
            width='100%'
            fallbackSrc='https://www.luxstay.com/loading-img.svg'
            src='https://cdn.luxstay.com/rooms/34370/large/2f78a6f10c83e81708f369287c87e4b6.png'
          />
        </Box>
        <Box>
          <Image
            width='100%'
            fallbackSrc='https://www.luxstay.com/loading-img.svg'
            src='https://cdn.luxstay.com/rooms/34370/large/2f78a6f10c83e81708f369287c87e4b6.png'
          />
        </Box>
      </Silder>
    </Box>
  )
}

export default ImageSlider
