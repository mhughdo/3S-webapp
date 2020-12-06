import { Box, Stack, Avatar, Text, Button } from '@chakra-ui/react'

const IntroComponent = () => (
  <Box>
    <Box display='flex' justifyContent='space-between'>
      <Stack direction='row' spacing={4}>
        <Box>
          <Avatar name='Vũ Đức' size='md' src='https://bit.ly/dan-abramov' />
        </Box>
        <Box>
          <Stack direction='row' fontWeight='bold' fontSize='xl'>
            <Text color='#f65e39 !important'>Vũ Đức</Text>
            <Text color='#666 !important'>·</Text>
            <Text color='#333'>Thông tin tài khoản</Text>
          </Stack>
          <Text color='#666'>Cá nhân hóa tài khoản bằng việc cập nhật thông tin của bạn</Text>
        </Box>
      </Stack>
      <Box>
        <Button backgroundColor='#fff' boxShadow='1px 1px 1px 0 rgba(0,0,0,.05)' borderRadius='lg' px={4} py={6}>
          <Text fontWeight='bold' color='#f65e39'>
            <span>Trở thành chủ nhà</span>
          </Text>
        </Button>
      </Box>
    </Box>
  </Box>
)

export default IntroComponent
