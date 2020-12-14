/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-types */
import { Box, Text, Flex, Checkbox } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Facility = ({
  completeTab,
  syncFacilities,
  data,
}: {
  completeTab: Function
  syncFacilities: Function
  data: any
}) => {
  const initData = (id: number) => {
    const index = data.findIndex((item) => item.facility_id === id)
    if (index !== -1) {
      return true
    }
    return false
  }

  const [hasTV, setHasTV] = useState(initData(2))
  const [hasWifi, setHasWifi] = useState(initData(1))
  const [hasConditioner, setHasConditioner] = useState(initData(3))
  const [hasWashingMachine, setHasWashingMachine] = useState(initData(4))
  const [hasBalcony, setHasBalcony] = useState(initData(7))
  const [hasMicrowave, setHasMicrowave] = useState(initData(5))
  const [hasFridge, setHasFridge] = useState(initData(6))
  const [hasSofa, setHasSofa] = useState(initData(8))

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
    syncFacilities([])
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
              }}
              isChecked={hasWifi}>
              Wifi
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasTV(event.target.checked)
              }}
              isChecked={hasTV}>
              TV
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasConditioner(event.target.checked)
              }}
              isChecked={hasConditioner}>
              Điều hoà
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasWashingMachine(event.target.checked)
              }}
              isChecked={hasWashingMachine}>
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
              }}
              isChecked={hasMicrowave}>
              Lò vi sóng
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasFridge(event.target.checked)
              }}
              isChecked={hasFridge}>
              Tủ lạnh
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasBalcony(event.target.checked)
              }}
              isChecked={hasBalcony}>
              Ban công
            </Checkbox>
            <Checkbox
              size='md'
              colorScheme='orange'
              mb={3}
              onChange={(event) => {
                setHasSofa(event.target.checked)
              }}
              isChecked={hasSofa}>
              Ghế sofa
            </Checkbox>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Facility
