/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useEffect, useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import { AiOutlineCalendar } from 'react-icons/ai'
import { useSession } from 'next-auth/client'
import format from 'date-fns/format'

const ProfileForm = () => {
  const [session, loading] = useSession()
  const [birthday, setBirthday] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('male')
  const [focusedBirthday, setFocusedBirthday] = useState(null)

  useEffect(() => {
    if (!loading) {
      const { full_info } = session
      if (full_info.birthday) {
        const date = full_info.birthday.split('T')
        console.log(date[0])
        setBirthday(new Date(date[0]))
      }
      setName(full_info.name)
      setEmail(full_info.email)
      setPhone(full_info.phone)
      setAddress(full_info.address)
      setGender(full_info.gender)
    }
  }, [loading, session])

  return (
    <Box flexBasis='66.67%' pl={8}>
      <Box animation='fadeIn .4s ease-in-out'>
        <Box display='flex' alignItems='center'>
          <Avatar size='xl' name={name} src='https://bit.ly/dan-abramov' />
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
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
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
              value={address}
              onChange={(event) => setAddress(event.target.value)}
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
                console.log(format(value, 'yyyy-MM-dd'))
                setBirthday(value)
              }}
              focused={focusedBirthday}
              onFocusChange={({ focused }) => {
                console.log(focused)
                setFocusedBirthday(focused)
              }}
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
            <RadioGroup value={gender} defaultValue='male' onChange={(value) => setGender(value)}>
              <Stack direction='row' spacing={3}>
                <Radio
                  cursor='pointer'
                  boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
                  size='lg'
                  colorScheme='orange'
                  value='male'>
                  Nam
                </Radio>
                <Radio
                  cursor='pointer'
                  boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
                  size='lg'
                  colorScheme='orange'
                  value='female'>
                  Nữ
                </Radio>
                <Radio
                  cursor='pointer'
                  boxShadow='inset 0 1px 2px 0 rgba(0,0,0,.15)!important'
                  size='lg'
                  colorScheme='orange'
                  value='other'>
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
