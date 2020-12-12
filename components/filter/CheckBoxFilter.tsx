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
  Checkbox,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'

type CheckboxValue = {
  name: string
  value: string
}

const CheckBox = ({
  title,
  data,
  name,
  onLoadData,
}: {
  title: string
  data: Array<CheckboxValue>
  name: string
  onLoadData: Function
}) => {
  const [valueList, setValueList] = useState([])
  const [checkedQuantity, setCheckedQuantity] = useState(0)
  const initValue = () => {
    const temp = []
    data.forEach((item) => {
      temp.push({ ...item, isChecked: false })
    })
    setValueList(temp)
  }
  const onLoadData_ = () => {
    const temp = valueList.filter((item) => item.isChecked === true)
    setCheckedQuantity(temp.length)
    onLoadData({ [name]: valueList })
  }
  const onChange = (key: string) => {
    const index = valueList.findIndex((obj) => obj.value === key)
    const { isChecked } = valueList[index]
    valueList[index].isChecked = !isChecked
    setValueList(valueList)
  }
  return (
    <Popover onClose={onLoadData_}>
      <PopoverTrigger>
        <Button
          size='sm'
          mx={1}
          color={checkedQuantity > 0 ? 'white' : 'black'}
          backgroundColor={checkedQuantity > 0 ? '#f65e39' : 'gray'}
          onClick={initValue}>
          {title}
          {checkedQuantity > 0 ? ` - ${checkedQuantity}` : ''}
        </Button>
      </PopoverTrigger>
      <PopoverContent p={3}>
        <PopoverArrow />
        <PopoverBody>
          <Stack direction='column'>
            {valueList.map((item) => (
              <Checkbox size='md' value={item.value} onChange={(event) => onChange(event.target.value)}>
                {item.name}
              </Checkbox>
            ))}
          </Stack>
        </PopoverBody>
        <PopoverFooter>
          <Button pt={1} backgroundColor='#f65e39' size='sm' color='white' onClick={onLoadData_}>
            Áp dụng
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default CheckBox
