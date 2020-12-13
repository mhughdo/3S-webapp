/* eslint-disable @typescript-eslint/ban-types */
import { Box, FormControl, FormLabel, Textarea, Text, Flex, RadioGroup, Stack, Radio } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Rule = ({ showNextTab }: { showNextTab: Function }) => {
  const [smoking, setSmoking] = useState(0)
  const [pet, setPet] = useState(1)
  const [party, setParty] = useState(1)
  const [cooking, setCooking] = useState(1)
  const [specialRule, setSpecialRule] = useState('')

  useEffect(() => {
    showNextTab(true)
  }, [showNextTab])

  return (
    <Flex>
      <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
        <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
          <Text fontSize='xl' fontWeight='bold'>
            Thiết lập nội quy chỗ nghỉ
          </Text>
        </Box>
        <FormControl id='smoking' isRequired mb={5}>
          <FormLabel>Hút thuốc</FormLabel>
          <RadioGroup
            defaultValue='0'
            onChange={(value) => {
              setSmoking(parseInt(value))
            }}>
            <Stack direction='row'>
              <Radio value='1' colorScheme='orange' w='50%'>
                Cho phép
              </Radio>
              <Radio value='0' colorScheme='orange'>
                Không cho phép
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id='pet' isRequired mb={5}>
          <FormLabel>Nuôi động vật</FormLabel>
          <RadioGroup
            defaultValue='1'
            onChange={(value) => {
              setPet(parseInt(value))
            }}>
            <Stack direction='row'>
              <Radio value='1' colorScheme='orange' w='50%'>
                Cho phép
              </Radio>
              <Radio value='2' colorScheme='orange'>
                Không cho phép
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl
          id='party'
          isRequired
          mb={5}
          onChange={(value) => {
            setParty(parseInt(value))
          }}>
          <FormLabel>Tổ chức tiệc</FormLabel>
          <RadioGroup defaultValue='1'>
            <Stack direction='row'>
              <Radio value='1' colorScheme='orange' w='50%'>
                Cho phép
              </Radio>
              <Radio value='2' colorScheme='orange'>
                Không cho phép
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id='cooking' isRequired mb={5}>
          <FormLabel>Nấu ăn</FormLabel>
          <RadioGroup
            defaultValue='1'
            onChange={(value) => {
              setCooking(parseInt(value))
            }}>
            <Stack direction='row'>
              <Radio value='1' colorScheme='orange' w='50%'>
                Cho phép
              </Radio>
              <Radio value='2' colorScheme='orange'>
                Không cho phép
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id='special-rule' mb={5}>
          <FormLabel>Nội quy đặc biệt</FormLabel>
          <Textarea
            placeholder='Nội quy đặc biệt'
            onChange={(event) => {
              setSpecialRule(event.target.value)
            }}
          />
        </FormControl>
      </Box>
    </Flex>
  )
}

export default Rule
