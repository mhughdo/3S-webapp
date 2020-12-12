/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  Flex,
  Box,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

const SliderFilter = ({
  title,
  min,
  max,
  step,
  titleOfMin,
  titleOfMax,
  nameOfMin,
  nameOfMax,
  onLoadData,
}: {
  title: string
  min: number
  max: number
  step: number
  titleOfMin: string
  titleOfMax: string
  nameOfMin: string
  nameOfMax: string
  onLoadData: Function
}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [value, setValue] = useState([min, max])
  const onLoadData_ = () => {
    onLoadData({ [nameOfMin]: value[0], [nameOfMax]: value[1] })
  }
  const onChange = (_value) => {
    setValue(_value)
    if (_value[0] === min && _value[1] === max) {
      setIsChecked(false)
    } else {
      setIsChecked(true)
    }
  }
  return (
    <Popover onClose={onLoadData_}>
      <PopoverTrigger>
        <Button size='sm' mx={1} backgroundColor={isChecked ? '#f65e39' : 'gray'} color={isChecked ? 'white' : 'black'}>
          {isChecked ? `${value[0]} - ${value[1]} VND` : `${title}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent p={3}>
        <PopoverArrow />
        <PopoverBody>
          <Range
            defaultValue={[min, max]}
            min={min}
            max={max}
            step={step}
            onChange={(_value) => {
              onChange(_value)
            }}
          />
          <Flex py={3}>
            <Box>
              <Text>{titleOfMin}</Text>
              <Text>{value[0]}</Text>
            </Box>
            <Spacer />
            <Box>
              <Text>{titleOfMax}</Text>
              <Text>{value[1]}</Text>
            </Box>
          </Flex>
        </PopoverBody>
        <PopoverFooter>
          <Button backgroundColor='#f65e39' size='sm' color='white' onClick={onLoadData_}>
            Áp dụng
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default SliderFilter
