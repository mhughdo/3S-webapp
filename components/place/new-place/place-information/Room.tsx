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

const Room = ({ showNextTab }: { showNextTab: Function }) => {
  const [square, setSquare] = useState(15)
  const [numOfBedRoom, setNumOfBedRoom] = useState(1)
  const [numOfBed, setNumOfBed] = useState(1)
  const [numOfBathRoom, setNumOfBathRoom] = useState(1)
  const [numOfKitchen, setNumOfKitchen] = useState(1)

  useEffect(() => {
    showNextTab(true)
  }, [showNextTab])

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
          <NumberInput step={10} defaultValue={15} min={10} max={500} onChange={(value) => setSquare(parseInt(value))}>
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
              onChange={(value) => setNumOfBedRoom(parseInt(value))}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl id='num-of-bed' isRequired mb={5}>
            <FormLabel>Số lượng giường ngủ: </FormLabel>
            <NumberInput step={1} defaultValue={1} min={1} max={100} onChange={(value) => setNumOfBed(parseInt(value))}>
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
              onChange={(value) => setNumOfBathRoom(parseInt(value))}>
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
              onChange={(value) => setNumOfKitchen(parseInt(value))}>
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
