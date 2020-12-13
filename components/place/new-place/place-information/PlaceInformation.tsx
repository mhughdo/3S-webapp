/* eslint-disable @typescript-eslint/ban-types */
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { useState } from 'react'
import BaseInformation from './BaseInformation'
import Position from './Position'
import Room from './Room'
import Facility from './Facility'
import Rule from './Rule'
import Overview from './Overview'

const PlaceInformation = ({ showNextStep }: { showNextStep: Function }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const [isShowPosition, setIsShowPosition] = useState(false)
  const [isShowRoom, setIsShowRoom] = useState(false)
  const [isShowFacility, setIsShowFacility] = useState(false)
  const [isShowRule, setIsShowRule] = useState(false)
  const [isShowOverview, setIsShowOverview] = useState(false)
  return (
    <Tabs isFitted isManual variant='soft-rounded' colorScheme='orange' mt={8}>
      <TabList mb='1em'>
        <Tab onClick={scrollToTop}>Thông tin cơ bản</Tab>
        <Tab onClick={scrollToTop} isDisabled={!isShowPosition}>
          Địa điểm
        </Tab>
        <Tab onClick={scrollToTop} isDisabled={!(isShowPosition && isShowRoom)}>
          Phòng
        </Tab>
        <Tab onClick={scrollToTop} isDisabled={!(isShowPosition && isShowRoom && isShowFacility)}>
          Tiện nghi
        </Tab>
        <Tab onClick={scrollToTop} isDisabled={!(isShowPosition && isShowRoom && isShowFacility && isShowRule)}>
          Nội quy chỗ nghỉ
        </Tab>
        <Tab
          onClick={scrollToTop}
          isDisabled={!(isShowPosition && isShowRoom && isShowFacility && isShowRule && isShowOverview)}>
          Giới thiệu
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BaseInformation showNextTab={setIsShowPosition} />
        </TabPanel>
        <TabPanel>
          <Position showNextTab={setIsShowRoom} />
        </TabPanel>
        <TabPanel>
          <Room showNextTab={setIsShowFacility} />
        </TabPanel>
        <TabPanel>
          <Facility showNextTab={setIsShowRule} />
        </TabPanel>
        <TabPanel>
          <Rule showNextTab={setIsShowOverview} />
        </TabPanel>
        <TabPanel>
          <Overview showNextTab={showNextStep} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default PlaceInformation
