import Header from '@components/me/Header'
import { Box, Container } from '@chakra-ui/react'
import IntroComponent from '@components/me/edit_account/IntroComponent'
import SideBarComponent from '@components/me/edit_account/SideBarComponent'

const Profile = () => (
  <Box>
    <Header />
    <Box backgroundColor='#f8f8f8' py={6} minH='1200px'>
      <Container maxW='100%' px={40}>
        <IntroComponent />
        <Box mt={6} display='flex'>
          <SideBarComponent />
          <Box flexBasis='66.67%' pl={8}>
            Coming soon ...
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
)

export default Profile
