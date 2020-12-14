/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import BaseInformation from './BaseInformation'
import Position from './Position'
import Room from './Room'
import Facility from './Facility'
import Rule from './Rule'
import Overview from './Overview'

type RoomType = {
  square: number
  num_of_bedroom: number
  num_of_bed: number
  num_of_bath_room: number
  num_of_kitchen: number
}
type FacilitiesType = [
  {
    facility_id: number
  }
]
type RuleType = {
  special_rules: string
  smoking: string
  pet: string
  cooking: string
  party: string
}

const PlaceInformation = ({ completeStep, syncData }: { completeStep: Function; syncData: Function }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const [isCompleteBaseInfo, setIsCompleteBaseInfo] = useState(false)
  const [isCompletePosition, setIsCompletePosition] = useState(false)
  const [isCompleteRoom, setIsCompleteRoom] = useState(false)
  const [isCompleteFacility, setIsCompleteFacility] = useState(false)
  const [isCompleteRule, setIsCompleteRule] = useState(false)
  const [isCompleteOverview, setIsCompleteOverview] = useState(false)

  const [name, setPlaceName] = useState('')
  const [details, setDetails] = useState('')
  const [placeType, setPlaceType] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [room, setRoom] = useState({} as RoomType)
  const [facilities, setFacilities] = useState([{}] as FacilitiesType)
  const [rule, setRule] = useState({} as RuleType)

  useEffect(() => {
    if (
      isCompleteBaseInfo &&
      isCompletePosition &&
      isCompleteRoom &&
      isCompleteFacility &&
      isCompleteRule &&
      isCompleteOverview
    ) {
      completeStep(true)
      syncData({
        name,
        details,
        city,
        place_type: placeType,
        address,
        rule_attributes: rule,
        room_attributes: room,
        place_facilities_attributes: facilities,
      })
      console.log({
        name,
        details,
        city,
        place_type: placeType,
        address,
        rule_attributes: rule,
        room_attributes: room,
        place_facilities_attributes: facilities,
      })
    } else {
      completeStep(false)
    }
  }, [
    address,
    city,
    completeStep,
    details,
    facilities,
    isCompleteBaseInfo,
    isCompleteFacility,
    isCompleteOverview,
    isCompletePosition,
    isCompleteRoom,
    isCompleteRule,
    name,
    placeType,
    room,
    rule,
    syncData,
  ])

  return (
    <Tabs isFitted isManual colorScheme='orange' mt={8}>
      <TabList mb='1em'>
        <Tab onClick={scrollToTop}>Thông tin cơ bản</Tab>
        <Tab onClick={scrollToTop} isDisabled={!isCompleteBaseInfo}>
          Địa điểm
        </Tab>
        <Tab onClick={scrollToTop} isDisabled={!(isCompleteBaseInfo && isCompletePosition)}>
          Phòng
        </Tab>
        <Tab onClick={scrollToTop} isDisabled={!(isCompleteBaseInfo && isCompletePosition && isCompleteRoom)}>
          Tiện nghi
        </Tab>
        <Tab
          onClick={scrollToTop}
          isDisabled={!(isCompleteBaseInfo && isCompletePosition && isCompleteRoom && isCompleteFacility)}>
          Nội quy chỗ nghỉ
        </Tab>
        <Tab
          onClick={scrollToTop}
          isDisabled={
            !(isCompleteBaseInfo && isCompletePosition && isCompleteRoom && isCompleteFacility && isCompleteRule)
          }>
          Giới thiệu
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BaseInformation
            completeTab={setIsCompleteBaseInfo}
            syncPlaceName={setPlaceName}
            syncPlaceType={setPlaceType}
          />
        </TabPanel>
        <TabPanel>
          <Position completeTab={setIsCompletePosition} syncCity={setCity} syncAddress={setAddress} />
        </TabPanel>
        <TabPanel>
          <Room completeTab={setIsCompleteRoom} syncRoom={setRoom} />
        </TabPanel>
        <TabPanel>
          <Facility completeTab={setIsCompleteFacility} syncFacilities={setFacilities} />
        </TabPanel>
        <TabPanel>
          <Rule completeTab={setIsCompleteRule} syncRule={setRule} />
        </TabPanel>
        <TabPanel>
          <Overview completeTab={setIsCompleteOverview} syncOverview={setDetails} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default PlaceInformation
