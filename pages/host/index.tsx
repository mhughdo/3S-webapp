import Header from '@components/HostHeader'
import Footer from '@components/Footer'
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Places from '@components/host/Places'
import Bookings from '@components/host/Bookings'
import 'antd/dist/antd.css'

const Host = () => (
  <Box>
    <Header />
    <Tabs size='md' variant='enclosed' colorScheme='orange' m='20px auto' w='80%'>
      <TabList>
        <Tab>Bảng tin</Tab>
        <Tab>Chỗ nghỉ</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Bookings />
        </TabPanel>
        <TabPanel>
          <Places />
        </TabPanel>
      </TabPanels>
    </Tabs>
    <Footer />
  </Box>
)

export default Host
