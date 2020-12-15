/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Box, Heading, Wrap, WrapItem, Text, chakra } from '@chakra-ui/react'
import {ElementType} from 'react'
import { Element } from 'react-scroll'
import MicrowaveIcon from '../../../assets/svg/microwave.svg'
import WashingIcon from '../../../assets/svg/washingmachine.svg'
import Sofa from '../../../assets/svg/sofa.svg'
import Fridge from '../../../assets/svg/fridge.svg'
import Balcony from '../../../assets/svg/balcony.svg'

const Amenities = ({ listAmenties }) => {
  const NavLabel = chakra(Element)

  const MicroIcon = chakra(MicrowaveIcon as ElementType<any>)
  const WashingIconCustom = chakra(WashingIcon as ElementType<any>)
  const SofaIconCustom = chakra(Sofa as ElementType<any>)
  const FridgeIconCustom = chakra(Fridge as ElementType<any>)
  const BalconyIconCustom = chakra(Balcony as ElementType<any>)

  const amenties = {
    'Fridge/ Freezer': 'Tủ lạnh',
    'Sofa': 'Sofa',
    'Washing machine': 'Máy giặt',
    'Balcony': 'Ban công',
    'Microwave': 'Lò vi sóng',
  }

  const amentyIcons = {
    'Fridge/ Freezer': <FridgeIconCustom width='24px' height='24px'/>,
    'Sofa': <SofaIconCustom width='24px' height='24px'/>,
    'Washing machine': <WashingIconCustom width='24px' height='24px'/>,
    'Balcony': <BalconyIconCustom width='24px' height='24px'/>,
    'Microwave': <MicroIcon width='24px' height='24px'/>,
  }

  return (
    <NavLabel className='place-details-amenities' name='amenities' mt={20}>
      <Box className='title'>
        <Heading as='h3' fontSize='3xl' fontWeight='bolder' lineHeight='shorter'>
          Tiện nghi chỗ ở
        </Heading>
        <Text mt={5}>Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú</Text>
      </Box>
      <Box className='facilities'>
        <Heading mt={6} fontSize='xl'>
          Tiện ích
        </Heading>
        <Wrap align='center' color='#555' width='100%'>
          {listAmenties?.length &&
            listAmenties?.map((a: string) => (
              <WrapItem alignItems='center' lineHeight='taller' mt={3} width='31.333%'>
                {amentyIcons[`${a}`]}
                <span style={{ marginLeft: '.875rem' }}>{amenties[`${a}`]}</span>
              </WrapItem>
            ))}
        </Wrap>
      </Box>
    </NavLabel>
  )
}

export default Amenities
