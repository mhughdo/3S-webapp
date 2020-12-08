import {
  Box,
  Container,
  Input,
  Link,
  Menu,
  Image as ChakraImage,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  MenuDivider,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from '@assets/logo2.png'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/client'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { SiCodesandbox } from 'react-icons/si'
import { BsEnvelope, BsHeart } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { RiShutDownLine } from 'react-icons/ri'

import SearchIcon from '../assets/svg/search.svg'

const HeaderComponent = () => {
  const [session, loading] = useSession()

  return (
    <Box height='80px'>
      <Container
        maxW='100%'
        h='80px'
        borderBottom='1px solid #f2f2f2'
        position='fixed'
        zIndex='10'
        top='0'
        d='flex'
        background='white'
        alignItems='center'>
        <Box w='100%' px={28} height='100%'>
          <Box alignItems='center' d='flex' pt={3} maxH='100%'>
            <Box d='flex' flexBasis='50%' alignItems='center' maxWidth='50%' px={2}>
              <NextLink href='/'>
                <Link>
                  <Image src={Logo} width={60} height={60} />
                </Link>
              </NextLink>

              <Box pl={9} d='flex'>
                <Box boxShadow='1px 1px 4px rgba(0,0,0,.2)' w='300px' borderRadius='6px'>
                  <Box d='flex' alignItems='center' py={2} px={4} h='27px' boxSizing='content-box'>
                    <Box>
                      <SearchIcon />
                    </Box>
                    <Box ml={2} w='100%'>
                      <Input
                        height='100%'
                        width='100%'
                        color='black'
                        background='transparent'
                        border='none'
                        px={2}
                        placeholder='Tìm kiếm'
                        _placeholder={{ color: 'black' }}
                        _focus={{ outline: 'none' }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box d='flex' justifyContent='flex-end' maxWidth='50%' flexBasis='50%' px={2}>
              <Box ml={4} d='inline-flex' alignItems='center'>
                <NextLink href='/host'>
                  <Link
                    href='/host'
                    fontSize='0.9rem'
                    fontWeight='700'
                    textDecoration='none !important'
                    _hover={{ color: 'orange.500' }}>
                    Host
                  </Link>
                </NextLink>
              </Box>

              {!loading && session ? (
                <Box ml={2}>
                  <Box d='flex' alignItems='center' p={1.5} pr={6}>
                    <Menu placement='bottom-end'>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon color='black' />}
                        _hover={{ cursor: 'pointer', color: 'orange.500' }}>
                        <Text> {session.user.name} </Text>
                      </MenuButton>
                      <MenuList>
                        <NextLink href='/me/bookings'>
                          <Link href='/me/bookings' textDecoration='none !important'>
                            <MenuItem
                              minH='48px'
                              icon={<SiCodesandbox width='24px' height='24px' />}
                              iconSpacing={2}
                              position='relative'
                              _hover={{
                                _before: {
                                  height: '100%',
                                },
                                fontWeight: 'bold',
                              }}
                              _before={{
                                content: '""',
                                position: 'absolute',
                                width: '2px',
                                height: '0px',
                                background: 'linear-gradient(270deg,#f68a39,#f65e39)',
                                top: '50%',
                                left: 0,
                                transform: 'translateY(-50%)',
                                transition: 'all .2s',
                              }}>
                              Đặt chỗ của tôi
                            </MenuItem>
                          </Link>
                        </NextLink>
                        <MenuDivider />
                        <MenuItem
                          minH='48px'
                          icon={<BsEnvelope width='24px' height='24px' />}
                          iconSpacing={2}
                          position='relative'
                          _hover={{
                            _before: {
                              height: '100%',
                            },
                            fontWeight: 'bold',
                          }}
                          _before={{
                            content: '""',
                            position: 'absolute',
                            width: '2px',
                            height: '0px',
                            background: 'linear-gradient(270deg,#f68a39,#f65e39)',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            transition: 'all .2s',
                          }}>
                          <span>Tin nhắn</span>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem
                          minH='48px'
                          icon={<FiSettings width='24px' height='24px' />}
                          iconSpacing={2}
                          position='relative'
                          _hover={{
                            _before: {
                              height: '100%',
                            },
                            fontWeight: 'bold',
                          }}
                          _before={{
                            content: '""',
                            position: 'absolute',
                            width: '2px',
                            height: '0px',
                            background: 'linear-gradient(270deg,#f68a39,#f65e39)',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            transition: 'all .2s',
                          }}>
                          <span>Cài đặt tài khoản</span>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem
                          minH='48px'
                          icon={<BsHeart width='24px' height='24px' />}
                          iconSpacing={2}
                          position='relative'
                          _hover={{
                            _before: {
                              height: '100%',
                            },
                            fontWeight: 'bold',
                          }}
                          _before={{
                            content: '""',
                            position: 'absolute',
                            width: '2px',
                            height: '0px',
                            background: 'linear-gradient(270deg,#f68a39,#f65e39)',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            transition: 'all .2s',
                          }}>
                          <span>Yêu thích</span>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem
                          minH='48px'
                          icon={<RiShutDownLine width='24px' height='24px' />}
                          iconSpacing={2}
                          position='relative'
                          _hover={{
                            _before: {
                              height: '100%',
                            },
                            fontWeight: 'bold',
                          }}
                          _before={{
                            content: '""',
                            position: 'absolute',
                            width: '2px',
                            height: '0px',
                            background: 'linear-gradient(270deg,#f68a39,#f65e39)',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            transition: 'all .2s',
                          }}
                          onClick={() => {
                            signOut()
                          }}>
                          <Box>Đăng xuất</Box>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                </Box>
              ) : (
                <>
                  <Box ml={4} d='inline-flex' alignItems='center'>
                    <NextLink href='/signup'>
                      <Link
                        href='/signup'
                        fontSize='0.9rem'
                        fontWeight='700'
                        textDecoration='none !important'
                        _hover={{ color: 'orange.500' }}>
                        Đăng ký
                      </Link>
                    </NextLink>
                  </Box>
                  <Box ml={4} d='inline-flex' alignItems='center'>
                    <NextLink href='/signin'>
                      <Link
                        href='/signin'
                        fontSize='0.9rem'
                        fontWeight='700'
                        textDecoration='none !important'
                        _hover={{ color: 'orange.500' }}>
                        Đăng nhập
                      </Link>
                    </NextLink>
                  </Box>{' '}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HeaderComponent
