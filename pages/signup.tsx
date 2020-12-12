/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable react/no-children-prop */
import Header from '@components/Header'
import { useState } from 'react'
import { EmailIcon } from '@chakra-ui/icons'
import Copyright from '@components/Copyright'
import {
  InputLeftAddon,
  Alert,
  AlertIcon,
  Grid,
  useToast,
  InputGroup,
  InputRightElement,
  Box,
  Container,
  Text,
  GridItem,
  Input,
  Button,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import MediaBox from '@components/signin/MediaBox'
import Coins from '@assets/signin/coins.png'
import TopSales from '@assets/signin/top-sales.png'
import Wallet from '@assets/signin/wallet.png'
import BackPack from '@assets/signin/backpack.png'
import NextLink from 'next/link'
import axios from 'axios'

type FormData = {
  name: string
  email: string
  phone: string
  password: string
  password_confirmation: string
  passwordNotMatch: string
}

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword(!showPassword)
  const [showPasswordCofirmation, setShowPasswordCofirmation] = useState(false)
  const handleShowPasswordConfirmation = () => setShowPasswordCofirmation(!showPasswordCofirmation)
  const { register, handleSubmit, errors, getValues, setError, clearErrors } = useForm<FormData>()
  const [loading, setLoading] = useState<boolean>(false)
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false)
  const toast = useToast()

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      setLoading(true)
      await axios({
        baseURL: 'https://sans.hughdo.dev/api/',
        url: '/v1/auth/signup',
        method: 'POST',
        data: { ...formData, phone: formData.phone.startsWith('0') ? formData.phone : `0${formData.phone}` },
      })
      setSignUpSuccess(true)
      setLoading(false)
    } catch (error) {
      console.log(error?.response?.data?.error)
      setLoading(false)
      return toast({
        title: 'Lỗi',
        description: 'Đã có lỗi xảy ra khi đăng ký, xin vui lòng thử lại!',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Grid templateRows='auto 1fr auto' maxWidth='100%' minH='100vh'>
      <Header />
      <Box>
        <Box background='linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)' color='white' py={12}>
          <Container px={10} maxW='calc(1296px + 5.6rem)'>
            <Box px={2} maxW='60%'>
              <Box as='h1' fontSize='2xl' fontWeight='bold' mb={3}>
                Đăng ký thành viên 3S - Tích điểm thưởng và nhận ưu đãi
              </Box>
              <Text fontSize='lg' fontWeight='semibold'>
                Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền lợi.
              </Text>
            </Box>
          </Container>
        </Box>
        <Container px={10} maxW='calc(1296px + 5.6rem)' mb={14}>
          <Grid templateColumns='repeat(3, 1fr)' gap={3}>
            <GridItem colSpan={2}>
              <Grid templateColumns='1fr 1fr' templateRows='1fr 1fr' gap={2}>
                <GridItem>
                  <MediaBox
                    imageUrl={Coins}
                    title='Tích điểm nhanh chóng'
                    description='Tích điểm đối với mỗi lượt đặt chỗ thành công. Quy đổi thành 3S Credit để du lịch nhiều hơn nữa.'
                  />
                </GridItem>
                <GridItem>
                  <MediaBox
                    imageUrl={TopSales}
                    title='Tiện ích thông minh'
                    description='Check-in và kiểm tra hóa đơn thanh toán kể cả khi không có kết nối mạng. Hoàn tiền nhanh gọn. Đổi lịch dễ dàng.'
                  />
                </GridItem>
                <GridItem>
                  <MediaBox
                    imageUrl={Wallet}
                    title='Thanh toán đơn giản'
                    description='Phương thức thanh toán tiện lợi, an toàn. Tích hợp chức năng lưu thẻ để đặt phòng lần sau.'
                  />
                </GridItem>
                <GridItem>
                  <MediaBox
                    imageUrl={BackPack}
                    title='Ưu đãi mỗi ngày'
                    description='Nhận thông báo ưu đãi từ 3S khi có kế hoạch du lịch để lựa chọn và đặt ngay cho mình một chỗ ở phù hợp, tiện nghi với giá tốt nhất.'
                  />
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem>
              <Box p={8} background='white' boxShadow='xl' mt='-6.875rem' borderRadius='lg'>
                <Box as='h3' fontSize='2xl' fontWeight='black' mb={8}>
                  Đăng ký thành viên
                </Box>
                {signUpSuccess ? (
                  <Alert status='success'>
                    <AlertIcon width='48px' height='48px' />
                    Đăng ký thành công, một mail kích hoạt tài khoản đã được gửi tới email của bạn, ấn vào link trong
                    email để kích hoạt tài khoản!
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl id='name' isRequired isInvalid={Boolean(errors.name?.message)}>
                      <FormLabel>Tên đầy đủ</FormLabel>
                      <InputGroup size='lg'>
                        <Input
                          pr='4.5rem'
                          name='name'
                          required
                          ref={register({
                            maxLength: {
                              value: 50,
                              message: 'Tên của bạn đã vượt quá 50 ký tự',
                            },
                          })}
                          borderRadius='3rem'
                          _placeholder={{ fontSize: 'md' }}
                          _focus={{ borderColor: 'orange.500', boxShadow: '0 0 5px 0 rgba(246,94,57,.5)' }}
                        />
                      </InputGroup>
                      <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl id='email' isRequired isInvalid={Boolean(errors?.email)} mt={4}>
                      <FormLabel>Địa chỉ email</FormLabel>
                      <InputGroup size='lg'>
                        <Input
                          type='email'
                          name='email'
                          required
                          borderRadius='3rem'
                          ref={register({
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Email không hợp lệ',
                            },
                          })}
                          _placeholder={{ fontSize: 'md' }}
                          _focus={{ borderColor: 'orange.500', boxShadow: '0 0 5px 0 rgba(246,94,57,.5)' }}
                        />
                        <InputRightElement
                          width='4.5rem'
                          pointerEvents='none'
                          children={<EmailIcon h='1.5rem' w='1.5rem' color='gray.300' />}
                        />
                      </InputGroup>
                      <FormHelperText>Chúng tôi sẽ không bao giờ chia sẻ email của bạn.</FormHelperText>
                      <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl id='phone-number' isRequired isInvalid={Boolean(errors?.phone?.message)} mt={4}>
                      <FormLabel>Số điện thoại</FormLabel>
                      <InputGroup>
                        <InputLeftAddon borderRadius='3rem' children='+84' />
                        <Input
                          type='phone'
                          name='phone'
                          required
                          ref={register({
                            pattern: {
                              value: /^\d{9,11}$/,
                              message: 'Số điện thoại không hợp lệ',
                            },
                          })}
                          borderRadius='3rem'
                          _focus={{ borderColor: 'orange.500', boxShadow: '0 0 5px 0 rgba(246,94,57,.5)' }}
                        />
                      </InputGroup>
                      <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl id='password' isRequired mt={4} isInvalid={Boolean(errors.password?.message)}>
                      <FormLabel>
                        Mật khẩu{' '}
                        <Box as='span' color='gray.600'>
                          (Tối thiểu 6 ký tự)
                        </Box>
                      </FormLabel>
                      <InputGroup size='lg'>
                        <Input
                          pr='4.5rem'
                          name='password'
                          required
                          type={showPassword ? 'text' : 'password'}
                          borderRadius='3rem'
                          ref={register({
                            minLength: {
                              value: 6,
                              message: 'Mật khẩu tối thiểu 6 ký tự',
                            },
                          })}
                          _placeholder={{ fontSize: 'md' }}
                          _focus={{ borderColor: 'orange.500', boxShadow: '0 0 5px 0 rgba(246,94,57,.5)' }}
                        />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                            {showPassword ? 'Ẩn' : 'Hiện'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      id='password-confirmation'
                      isRequired
                      mt={4}
                      isInvalid={Boolean(errors.password_confirmation?.message || errors?.passwordNotMatch?.message)}>
                      <FormLabel>Nhập lại mật khẩu</FormLabel>
                      <InputGroup size='lg'>
                        <Input
                          pr='4.5rem'
                          name='password_confirmation'
                          required
                          type={showPasswordCofirmation ? 'text' : 'password'}
                          ref={register({
                            minLength: {
                              value: 6,
                              message: 'Mật khẩu tối thiểu 6 ký tự',
                            },
                          })}
                          onChange={() => {
                            const password = getValues('password')
                            const passwordConfirmation = getValues('password_confirmation')
                            clearErrors('passwordNotMatch')

                            if (password !== passwordConfirmation) {
                              setError('passwordNotMatch', {
                                type: 'manual',
                                message: 'Mật khẩu và nhập lại mật khẩu không trùng khớp!',
                              })
                            }
                          }}
                          borderRadius='3rem'
                          _placeholder={{ fontSize: 'md' }}
                          _focus={{ borderColor: 'orange.500', boxShadow: '0 0 5px 0 rgba(246,94,57,.5)' }}
                        />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleShowPasswordConfirmation}>
                            {showPasswordCofirmation ? 'Ẩn' : 'Hiện'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormErrorMessage>{errors.password_confirmation?.message}</FormErrorMessage>
                      <FormErrorMessage>{errors.passwordNotMatch?.message}</FormErrorMessage>
                    </FormControl>
                    <Button
                      colorScheme='orange'
                      size='md'
                      type='submit'
                      mt={8}
                      w='100%'
                      borderRadius='3em'
                      boxShadow='0 4px 12px 0 rgba(246,116,57,.4)'
                      backgroundImage='linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)'
                      backgroundSize='200% auto'
                      height='3.5rem'
                      disabled={loading}
                      _disabled={{ opacity: 0.5 }}
                      _hover={{
                        backgroundPosition: '100%',
                      }}>
                      Đăng ký
                    </Button>
                    <Box mt={8} textAlign='center' fontWeight='bold'>
                      <Box mt={8}>
                        Bạn đã có tài khoản 3S?{' '}
                        <NextLink href='signin'>
                          <Link
                            href='signin'
                            color='orange.600'
                            textDecoration='none'
                            _hover={{ textDecoration: 'none', color: 'black' }}>
                            Đăng nhập
                          </Link>
                        </NextLink>
                      </Box>
                    </Box>
                  </form>
                )}
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Copyright />
    </Grid>
  )
}
