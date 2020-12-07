import { Box, Link, Image, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

const RoomItem = () => {
  const data = {
    imageUrl:
      'https://media.gettyimages.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?s=2048x2048',
    imageAlt: 'Rear view of modern home with pool',
    square: 100,
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    price: '300000VND',
    rating: 4,
  }

  return (
    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' w='19%' mx='0.3rem' my='0.4rem'>
      <Link>
        <Image src={data.imageUrl} alt={data.imageAlt} />
      </Link>
      <Box p='4'>
        <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
          <Text>square: {data.square}</Text>
          <Text>
            {data.beds} beds &bull; {data.baths} baths
          </Text>
        </Box>
        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
          <Link href='#breakout-link' breakout>
            {data.title}
          </Link>
        </Box>

        <Box>
          {data.price}
          <Box as='span' color='gray.600' fontSize='sm'>
            / day
          </Box>
        </Box>

        <Box d='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < data.rating ? 'teal.500' : 'gray.300'} />
            ))}
        </Box>
      </Box>
    </Box>
  )
}

export default RoomItem
