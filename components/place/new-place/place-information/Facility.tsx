/* eslint-disable @typescript-eslint/ban-types */
import { Box, Text, Flex, Checkbox } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Facility = ({ completeTab, syncFacilities }: { completeTab: Function; syncFacilities: Function }) => {
  const [hasTV, setHasTV] = useState(false)
  const [hasWifi, setHasWifi] = useState(false)
  const [hasConditioner, setHasConditioner] = useState(false)
  const [hasWashingMachine, setHasWashingMachine] = useState(false)
  const [hasBalcony, setHasBalcony] = useState(false)
  const [hasMicrowave, setHasMicrowave] = useState(false)
  const [hasFridge, setHasFridge] = useState(false)
  const [hasSofa, setHasSofa] = useState(false)

  useEffect(() => {
    const facilities = []
    if (hasWifi) facilities.push({ facility_id: 1 })
    if (hasTV) facilities.push({ facility_id: 2 })
    if (hasConditioner) facilities.push({ facility_id: 3 })
    if (hasWashingMachine) facilities.push({ facility_id: 4 })
    if (hasMicrowave) facilities.push({ facility_id: 5 })
    if (hasFridge) facilities.push({ facility_id: 6 })
    if (hasBalcony) facilities.push({ facility_id: 7 })
    if (hasSofa) facilities.push({ facility_id: 8 })
    syncFacilities(facilities)
    completeTab(true)
  }, [
    completeTab,
    hasBalcony,
    hasConditioner,
    hasFridge,
    hasMicrowave,
    hasSofa,
    hasTV,
    hasWashingMachine,
    hasWifi,
    syncFacilities,
  ])

  return (
    <Flex>
      <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
        <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
          <Text fontSize='xl' fontWeight='bold'>
            Tiện nghi
          </Text>
          <Text color='gray.500' fontSize='md'>
            Rất nhiều khách hàng đã tìm kiếm chỗ nghỉ dựa trên các tiêu chí về tiện nghi.
          </Text>
        </Box>
        <Flex>
          <Flex direction='column' w='50%'>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasWifi(event.target.checked)
              }}>
              Wifi
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasTV(event.target.checked)
              }}>
              TV
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasConditioner(event.target.checked)
              }}>
              Điều hoà
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasWashingMachine(event.target.checked)
              }}>
              Máy giặt
            </Checkbox>
          </Flex>
          <Flex direction='column'>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasMicrowave(event.target.checked)
              }}>
              Lò vi sóng
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasFridge(event.target.checked)
              }}>
              Tủ lạnh
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasBalcony(event.target.checked)
              }}>
              Ban công
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasSofa(event.target.checked)
              }}>
              Ghế sofa
            </Checkbox>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Facility
