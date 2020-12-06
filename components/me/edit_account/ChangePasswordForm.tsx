import { Box, Text, Input, Button } from '@chakra-ui/react'

const ChangePasswordForm = () => (
  <Box flexBasis='66.67%' pl={8}>
    <Box animation='fadeIn .4s ease-in-out'>
      <Box>
        <Text mb={2} color='#666' fontWeight='bold'>
          Mật khẩu hiện tại
        </Text>
        <Input
          backgroundColor='rgba(0,0,0,.07)!important'
          borderRadius='5px !important'
          boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
          variant='filled'
        />
      </Box>
      <Box mt={6}>
        <Text mb={2} color='#666' fontWeight='bold'>
          Mật khẩu mới
        </Text>
        <Input
          backgroundColor='rgba(0,0,0,.07)!important'
          borderRadius='5px !important'
          boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
          variant='filled'
        />
      </Box>
      <Box mt={6}>
        <Text mb={2} color='#666' fontWeight='bold'>
          Xác nhận mật khẩu mới
        </Text>
        <Input
          backgroundColor='rgba(0,0,0,.07)!important'
          borderRadius='5px !important'
          boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
          variant='filled'
        />
      </Box>
      <Box mt={6}>
        <Button color='#fff' backgroundColor='#f65e39'>
          Cập nhật
        </Button>
      </Box>
    </Box>
  </Box>
)

export default ChangePasswordForm
