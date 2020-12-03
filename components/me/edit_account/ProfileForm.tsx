/* eslint-disable react/no-children-prop */
import {
  Avatar,
  Box,
  Button,
  Input,
  Text,
  InputLeftAddon,
  InputGroup,
  RadioGroup,
  Stack,
  Radio,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import { AiOutlineCalendar } from 'react-icons/ai'

const ProfileForm = () => {
  const [birthday, setBirthday] = useState(null)
  const [focusedBirthday, setFocusedBirthday] = useState(null)
  return (
    <Box flexBasis='66.67%' pl={8}>
      <Box animation='fadeIn .4s ease-in-out'>
        <Box display='flex' alignItems='center'>
          <Avatar size='xl' name='Duc Vu' src='https://bit.ly/dan-abramov' />
          <Button ml={4} color='#fff' backgroundColor='#f65e39'>
            Đổi ảnh đại diện
          </Button>
        </Box>
        <Box mt={6}>
          <Text mb={2} color='#666' fontWeight='bold'>
            Tên
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
            Email
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
            Số điện thoại
          </Text>
          <InputGroup>
            <InputLeftAddon
              children='+84'
              backgroundColor='rgba(0,0,0,.07)!important'
              borderRadius='5px !important'
              boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
            />
            <Input
              backgroundColor='rgba(0,0,0,.07)!important'
              borderRadius='5px !important'
              boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
              type='phone'
            />
          </InputGroup>
          <Box mt={6}>
            <Text mb={2} color='#666' fontWeight='bold'>
              Địa chỉ
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
              Ngày sinh
            </Text>
            <SingleDatePicker
              customInputIcon={<AiOutlineCalendar fontSize={20} />}
              date={birthday}
              id='user_birthday'
              onDateChange={(value) => {
                setBirthday(value)
              }}
              focused={focusedBirthday}
              onFocusChange={({ focused }) => setFocusedBirthday(focused)}
              numberOfMonths={1}
              placeholder=''
              displayFormat='DD/MM/YYYY'
              hideKeyboardShortcutsPanel
              showDefaultInputIcon={false}
              readOnly
            />
          </Box>
          <Box mt={6}>
            <Text mb={2} color='#666' fontWeight='bold'>
              Giới tính
            </Text>
            <RadioGroup>
              <Stack direction='row' spacing={3}>
                <Radio
                  cursor='pointer'
                  boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
                  size='lg'
                  colorScheme='orange'
                  value='1'>
                  Nam
                </Radio>
                <Radio
                  cursor='pointer'
                  boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
                  size='lg'
                  colorScheme='orange'
                  value='2'>
                  Nữ
                </Radio>
                <Radio
                  cursor='pointer'
                  boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
                  size='lg'
                  colorScheme='orange'
                  value='3'>
                  Khác
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box mt={6}>
            <Text mb={2} color='#666' fontWeight='bold'>
              Giới thiệu bản thân
            </Text>
            <Textarea
              backgroundColor='rgba(0,0,0,.07)!important'
              borderRadius='5px !important'
              boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
              variant='filled'
              minH='120px'
              resize='none'
            />
          </Box>
          <Box mt={6}>
            <Button color='#fff' backgroundColor='#f65e39'>
              Cập nhật
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileForm
