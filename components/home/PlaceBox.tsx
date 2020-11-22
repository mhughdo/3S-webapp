import { Box, Link } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  name: string
  imageUrl: string
  price: number
}

const PlaceBox = ({ name, imageUrl, price }: Props) => (
  <Box w='328px' h='313px'>
    <Link href='/homestay' textDecoration='none !important' _hover={{ color: 'orange.500' }}>
      <Box maxW='95%'>
        <Image src={imageUrl} alt='place' width='1200px' height='800px' />
      </Box>

      <Box color='gray.500' fontSize='sm'>
        {' '}
        Homestay - 1 phòng ngủ
      </Box>
      <Box d='flex'>
        <Box as='h4' lineHeight='tight' isTruncated mr={1}>
          {name}
        </Box>
      </Box>

      <Box as='h5' fontSize='sm' color='black' fontWeight='bold' isTruncated>
        {`${new Intl.NumberFormat().format(price)}đ/đêm`}
      </Box>
    </Link>
  </Box>
)

export default PlaceBox
