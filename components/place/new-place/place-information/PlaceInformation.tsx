/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/ban-types */
import { Tabs, TabList, Tab, TabPanels, TabPanel, Tag, Box } from '@chakra-ui/react'
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

const PlaceInformation = ({
  completeStep,
  syncData,
  data,
}: {
  completeStep: Function
  syncData: Function
  data: any
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const [isCompleteBaseInfo, setIsCompleteBaseInfo] = useState(false)
  const [isCompletePosition, setIsCompletePosition] = useState(false)
  const [isCompleteRoom, setIsCompleteRoom] = useState(false)
  const [isCompleteFacility, setIsCompleteFacility] = useState(false)
  const [isCompleteRule, setIsCompleteRule] = useState(false)
  const [isCompleteOverview, setIsCompleteOverview] = useState(false)

  const [name, setPlaceName] = useState(data.name)
  const [details, setDetails] = useState(data.details)
  const [placeType, setPlaceType] = useState(data.place_type)
  const [city, setCity] = useState(data.city)
  const [address, setAddress] = useState(data.address)
  const [room, setRoom] = useState(data.room_attributes as RoomType)
  const [facilities, setFacilities] = useState(data.place_facilities_attributes as FacilitiesType)
  const [rule, setRule] = useState(data.rule_attributes as RuleType)

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

  const Done = () => (
    <div
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: '#11ea11',
        borderRadius: '50%',
        marginLeft: '5px',
      }}
    />
  )

  const Require = () => (
    <div
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
        borderRadius: '50%',
        marginLeft: '5px',
      }}
    />
  )

  return (
    <Tabs isFitted isManual colorScheme='orange' mt={8} pb={10}>
      <TabList mb='1em'>
        <Tab onClick={scrollToTop}>Thông tin cơ bản {!isCompleteBaseInfo ? <Require /> : <Done />}</Tab>
        <Tab onClick={scrollToTop} isDisabled={!isCompleteBaseInfo}>
          Địa điểm {!isCompletePosition ? <Require /> : <Done />}
        </Tab>
        <Tab onClick={scrollToTop} isDisabled={!(isCompleteBaseInfo && isCompletePosition)}>
          Phòng {!isCompleteRoom ? <Require /> : <Done />}
        </Tab>
        <Tab onClick={scrollToTop} isDisabled={!(isCompleteBaseInfo && isCompletePosition && isCompleteRoom)}>
          Tiện nghi {!isCompleteFacility ? <Require /> : <Done />}
        </Tab>
        <Tab
          onClick={scrollToTop}
          isDisabled={!(isCompleteBaseInfo && isCompletePosition && isCompleteRoom && isCompleteFacility)}>
          Nội quy chỗ nghỉ {!isCompleteRule ? <Require /> : <Done />}
        </Tab>
        <Tab
          onClick={scrollToTop}
          isDisabled={
            !(isCompleteBaseInfo && isCompletePosition && isCompleteRoom && isCompleteFacility && isCompleteRule)
          }>
          Giới thiệu {!isCompleteOverview ? <Require /> : <Done />}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BaseInformation
            completeTab={setIsCompleteBaseInfo}
            syncPlaceName={setPlaceName}
            syncPlaceType={setPlaceType}
            data={data}
          />
        </TabPanel>
        <TabPanel>
          <Position completeTab={setIsCompletePosition} syncCity={setCity} syncAddress={setAddress} data={data} />
        </TabPanel>
        <TabPanel>
          <Room completeTab={setIsCompleteRoom} syncRoom={setRoom} data={data.room_attributes} />
        </TabPanel>
        <TabPanel>
          <Facility
            completeTab={setIsCompleteFacility}
            syncFacilities={setFacilities}
            data={data.place_facilities_attributes}
          />
        </TabPanel>
        <TabPanel>
          <Rule completeTab={setIsCompleteRule} syncRule={setRule} data={data.rule_attributes} />
        </TabPanel>
        <TabPanel>
          <Overview completeTab={setIsCompleteOverview} syncOverview={setDetails} data={data} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default PlaceInformation
