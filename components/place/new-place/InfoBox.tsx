import { Box, Text } from '@chakra-ui/react'

const InfoBox = ({ title, content }: { title: string; content: string }) => (
  <Box borderLeftColor='#f65e39' borderLeftWidth={2} backgroundColor='#FEEBC8' px={4} py={3} my={5}>
    <Text color='#ff902a' fontSize='sm' fontWeight='bold' mb={2}>
      {title}
    </Text>
    <Text color='#ff902a' fontSize='xs'>
      {content}
    </Text>
  </Box>
)

export default InfoBox
