import { Box, Link } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

type Props = {
  name: string
  placeCount: number
  imageUrl: string
  url: string
}

const TopDestinationBox = ({ name, placeCount, imageUrl, url }: Props) => (
  <NextLink href={`/cities/${url}`}>
    <Box w='263px' h='310px'>
      <Link h='100%' w='95%' d='inline-block' textDecoration='none' transition='all .3s'>
        <Box position='relative' h='100%'>
          <Box position='relative'>
            <Box position='absolute' top='0' left='0' objectFit='cover' width='100%' height='100%'>
              <Box borderRadius='md' overflow='hidden'>
                <Image src={imageUrl} height='420px' width='336px' />
              </Box>
            </Box>
          </Box>
          <Box position='absolute' bottom={8} color='white' left={4}>
            <Box as='h4' fontWeight='bold' fontSize='2xl'>
              {name}
            </Box>
            <Box>
              <Box d='inline-block' fontWeight='bold'>
                {placeCount}
              </Box>{' '}
              <Box d='inline-block' color='gray.100'>
                Chỗ ở
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  </NextLink>
)

export default TopDestinationBox
