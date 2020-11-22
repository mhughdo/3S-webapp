import { Box, Badge, Image, AspectRatio, Link, Center } from '@chakra-ui/react'

type Props = {
  title: string
  description: string
  imageUrl: string
  comingSoon?: boolean
}

const ServiceBox = ({ title, description, imageUrl, comingSoon }: Props) => (
  <Box maxW='240px' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md'>
    <Link href='/homestay' textDecoration='none !important' _hover={{ color: 'orange.500' }}>
      <AspectRatio maxW='240px' ratio={16 / 9}>
        <Image src={imageUrl} alt={description} />
      </AspectRatio>

      <Box py={3} px={4}>
        <Box d='flex'>
          <Box fontWeight='semibold' as='h4' lineHeight='tight' isTruncated mr={1}>
            {title}
          </Box>
          {comingSoon && (
            <Center>
              <Badge fontSize='0.2rem' borderRadius='full' p='1' px='2' colorScheme='teal'>
                Coming Soon
              </Badge>
            </Center>
          )}
        </Box>

        <Box as='h5' fontSize='sm' color='gray.400' isTruncated>
          {description}
        </Box>
      </Box>
    </Link>
  </Box>
)

export default ServiceBox
