/* eslint-disable @typescript-eslint/ban-types */
import { Button } from '@chakra-ui/react'
import { useState } from 'react'

const ButtonFilter = ({ title, onLoadData, name }: { title: string; onLoadData: Function; name: string }) => {
  const [isChecked, setIsChecked] = useState(false)
  const onClick = () => {
    setIsChecked(!isChecked)
    onLoadData({ [name]: isChecked })
  }
  return (
    <Button
      size='sm'
      mx={1}
      backgroundColor={isChecked ? '#f65e39' : 'gray'}
      color={isChecked ? 'white' : 'black'}
      onClick={onClick}>
      {title}
    </Button>
  )
}

export default ButtonFilter
