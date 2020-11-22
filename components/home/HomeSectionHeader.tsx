import { Box, Text } from '@chakra-ui/react'

type Props = {
  name: string
  description: string
}

const HomeSectionHeader = ({ name, description }: Props) => (
  <Box>
    <Box as='h2' fontSize='2xl' fontWeight='bold'>
      {name}
    </Box>
    <Text mt={1} mb={2} color='gray.700'>
      {description}
    </Text>
  </Box>
)

export default HomeSectionHeader
