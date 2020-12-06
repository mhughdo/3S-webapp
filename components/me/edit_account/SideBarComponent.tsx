import { Box, List, ListItem } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const SideBarComponent = () => {
  const activeLink = useRouter().pathname
  return (
    <Box flexBasis='33.33%'>
      <List
        sx={{
          li: {
            py: '4',
            color: '#666',
          },
          'li:not(:last-child)': {
            borderBottom: '1px solid #e6e6e6',
          },
          'li:hover': {
            cursor: 'pointer',
          },
        }}
        borderRadius='lg'
        boxShadow='1px 1px 1px 0 rgba(0,0,0,.05)'
        px={6}
        backgroundColor='#fff'>
        <ListItem
          style={{
            color: activeLink === '/me/edit-account/profile' ? '#333 !important' : '',
            fontWeight: activeLink === '/me/edit-account/profile' ? 'bold' : 'normal',
          }}>
          <Link href='/me/edit-account/profile'>Thông tin tài khoản</Link>
        </ListItem>
        <ListItem
          style={{
            color: activeLink === '/me/edit-account/change-password' ? '#333 !important' : '',
            fontWeight: activeLink === '/me/edit-account/change-password' ? 'bold' : 'normal',
          }}>
          <Link href='/me/edit-account/change-password'>Thay đổi mật khẩu</Link>
        </ListItem>
        <ListItem
          style={{
            color: activeLink === '/me/edit-account/link-account' ? '#333 !important' : '',
            fontWeight: activeLink === '/me/edit-account/link-account' ? 'bold' : 'normal',
          }}>
          <Link href='/me/edit-account/link-account'>Liên kết tài khoản</Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default SideBarComponent
