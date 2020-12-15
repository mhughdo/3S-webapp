/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import { AiOutlineCalendar } from 'react-icons/ai'
import { useSession } from 'next-auth/client'
import axios from '@utils/axios'
import moment from 'moment'
import { Upload, message } from 'antd'

const ProfileForm = () => {
  const [session, loading] = useSession()
  const [birthday, setBirthday] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('male')
  const [focusedBirthday, setFocusedBirthday] = useState(null)
  const [fileList, setFileList] = useState<Array<any>>([])
  const [avatar, setAvatar] = useState('')

  const toast = useToast()
  const initData = async (id: number) => {
    try {
      const { data } = await axios({
        url: `/v1/user/user/${id}`,
        method: 'get',
      })
      if (data.birthday) {
        const date = data.birthday.split('T')
        setBirthday(moment(date, 'YYYY-MM-DD'))
      }
      setName(data.name ? data.name : '')
      setEmail(data.email ? data.email : '')
      setPhone(data.phone ? data.phone : '')
      setAddress(data.address ? data.address : '')
      setGender(data.gender ? data.gender : '')
      setAvatar(data.avatar ? data.avatar : '/')
    } catch (error) {
      toast({
        title: 'Có sự cố xảy ra',
        description: 'Vui lòng kiểm tra lại đường truyền mạng',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }
  useEffect(() => {
    if (!loading) {
      const { full_info } = session
      initData(full_info.id) as any
    }
  }, [loading, session])

  const updateProfile = async () => {
    try {
      const data = await axios({
        url: `v1/user/update`,
        method: 'patch',
        data: {
          name,
          email,
          phone,
          address,
          gender,
          birthday: moment(birthday).format('DD-MM-YYYY'),
          avatar,
        },
      })
      if (data.status === 200) {
        toast({
          title: 'Thành công',
          description: 'Bạn đã cập nhật thành công thông tin cá nhân',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
      }
    } catch (error) {
      toast({
        title: 'Có sự cố xảy ra',
        description: 'Vui lòng kiểm tra lại đường truyền mạng',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('wrong_format')
    }
    const isLt3M = file.size / 1024 / 1024 < 3
    if (!isLt3M) {
      message.error('wrong_size')
    }
    return false
  }

  const uploadFile = async (signedRequest, file) => {
    try {
      await axios.put(signedRequest, file.originFileObj, {
        headers: {
          'Content-Type': file.type,
        },
      })
    } catch (error) {
      message.error('error')
    }
  }

  const onImageChange = (info) => {
    const fileListTemp = [...info.fileList]
    fileListTemp.forEach(async (file) => {
      const { data } = await axios.get(
        process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/sign-s3' : '/api/sign-s3',
        {
          params: {
            'file-name': file.name,
            'file-type': file.type,
          },
        }
      )
      const { signedRequest, url: avatarURL } = data
      await uploadFile(signedRequest, file)
      setAvatar(avatarURL)
    })
  }

  return (
    <Box flexBasis='66.67%' pl={8}>
      <Box animation='fadeIn .4s ease-in-out'>
        <Box display='flex' alignItems='center'>
          <Avatar size='xl' name={name} src={avatar} />
          <Upload
            name='avatar'
            // action={uploadURL}
            accept='.png, .jpg, .jpeg'
            multiple={false}
            fileList={fileList}
            onChange={onImageChange}
            beforeUpload={beforeUpload}
            withCredentials>
            <Button ml={4} color='#fff' backgroundColor='#f65e39'>
              Đổi ảnh đại diện
            </Button>
          </Upload>
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
            <Button color='#fff' backgroundColor='#f65e39' onClick={updateProfile}>
              Cập nhật
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileForm
