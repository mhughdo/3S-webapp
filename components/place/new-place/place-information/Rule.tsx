/* eslint-disable @typescript-eslint/ban-types */
import { Box, FormControl, FormLabel, Textarea, Text, Flex, RadioGroup, Stack, Radio } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Rule = ({ completeTab, syncRule }: { completeTab: Function; syncRule: Function }) => {
  const [smoking, setSmoking] = useState('unallowed')
  const [pet, setPet] = useState('allowed')
  const [party, setParty] = useState('allowed')
  const [cooking, setCooking] = useState('allowed')
  const [specialRule, setSpecialRule] = useState('')

  useEffect(() => {
    syncRule({
      smoking,
      pet,
      party,
      cooking,
      special_rules: specialRule,
    })
    completeTab(true)
  }, [completeTab, cooking, party, pet, smoking, specialRule, syncRule])

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
            defaultValue='unallowed'
            onChange={(value: string) => {
              setSmoking(value)
            }}>
            <Stack direction='row'>
              <Radio value='allowed' colorScheme='orange' w='50%'>
                Cho phép
              </Radio>
              <Radio value='unallowed' colorScheme='orange'>
                Không cho phép
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id='pet' isRequired mb={5}>
          <FormLabel>Nuôi động vật</FormLabel>
          <RadioGroup
            defaultValue='allowed'
            onChange={(value: string) => {
              setPet(value)
            }}>
            <Stack direction='row'>
              <Radio value='allowed' colorScheme='orange' w='50%'>
                Cho phép
              </Radio>
              <Radio value='unallowed' colorScheme='orange'>
                Không cho phép
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id='party' isRequired mb={5}>
          <FormLabel>Tổ chức tiệc</FormLabel>
          <RadioGroup
            defaultValue='allowed'
            onChange={(value: string) => {
              setParty(value)
            }}>
            <Stack direction='row'>
              <Radio value='allowed' colorScheme='orange' w='50%'>
                Cho phép
              </Radio>
              <Radio value='unallowed' colorScheme='orange'>
                Không cho phép
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl id='cooking' isRequired mb={5}>
          <FormLabel>Nấu ăn</FormLabel>
          <RadioGroup
            defaultValue='allowed'
            onChange={(value: string) => {
              setCooking(value)
            }}>
            <Stack direction='row'>
              <Radio value='allowed' colorScheme='orange' w='50%'>
                Cho phép
              </Radio>
              <Radio value='unallowed' colorScheme='orange'>
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
