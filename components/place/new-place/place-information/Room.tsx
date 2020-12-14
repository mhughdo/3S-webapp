/* eslint-disable @typescript-eslint/ban-types */
import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Flex,
  Spacer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Room = ({ completeTab, syncRoom, data }: { completeTab: Function; syncRoom: Function; data: any }) => {
  const [square, setSquare] = useState(data.square)
  const [numOfBedRoom, setNumOfBedRoom] = useState(data.num_of_bedroom)
  const [numOfBed, setNumOfBed] = useState(data.num_of_bed)
  const [numOfBathRoom, setNumOfBathRoom] = useState(data.num_of_bathroom)
  const [numOfKitchen, setNumOfKitchen] = useState(data.num_of_kitchen)

  useEffect(() => {
    syncRoom({
      square,
      num_of_bed: numOfBed,
      num_of_bathroom: numOfBathRoom,
      num_of_bedroom: numOfBedRoom,
      num_of_kitchen: numOfKitchen,
    })
    completeTab(true)
  }, [completeTab, numOfBathRoom, numOfBed, numOfBedRoom, numOfKitchen, square, syncRoom])

  return (
    <Flex>
      <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
        <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
          <Text fontSize='xl' fontWeight='bold'>
            Tên chỗ nghỉ của bạn
          </Text>
        </Box>
        <FormControl id='square' isRequired mb={5}>
          <FormLabel>Diện tích chỗ nghỉ của bạn là: </FormLabel>
          <NumberInput
            step={10}
            defaultValue={15}
            min={10}
            max={500}
            onChange={(value) => setSquare(parseInt(value))}
            value={square}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Flex>
          <FormControl id='num-of-bedroom' isRequired mb={5} mr={5}>
            <FormLabel>Số lượng phòng ngủ: </FormLabel>
            <NumberInput
              step={1}
              defaultValue={1}
              min={1}
              max={100}
              onChange={(value) => setNumOfBedRoom(parseInt(value))}
              value={numOfBedRoom}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl id='num-of-bed' isRequired mb={5}>
            <FormLabel>Số lượng giường ngủ: </FormLabel>
            <NumberInput
              step={1}
              defaultValue={1}
              min={1}
              max={100}
              onChange={(value) => setNumOfBed(parseInt(value))}
              value={numOfBed}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Flex>
        <Flex>
          <FormControl id='num-of-bathroom' isRequired mb={5} mr={5}>
            <FormLabel>Số lượng phòng tắm: </FormLabel>
            <NumberInput
              step={1}
              defaultValue={1}
              min={1}
              max={100}
              onChange={(value) => setNumOfBathRoom(parseInt(value))}
              value={numOfBathRoom}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl id='num-of-kitchen' isRequired mb={5}>
            <FormLabel>Số lượng phòng bếp</FormLabel>
            <NumberInput
              step={1}
              defaultValue={1}
              min={1}
              max={100}
              onChange={(value) => setNumOfKitchen(parseInt(value))}
              value={numOfKitchen}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Flex>
      </Box>
      <Spacer />
    </Flex>
  )
}

export default Room
