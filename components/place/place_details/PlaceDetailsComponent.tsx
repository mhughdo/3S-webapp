/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable camelcase */
import { Container, Box, Flex, chakra, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import axios from '@utils/axios'
import { useQuery } from 'react-query'
import Amenities from './Amenities'
import BookingForm from './BookingForm'
import ImageSlider from './ImageSlider'
import Location from './Location'
import PlaceIntro from './PlaceIntro'
import PlaceRoute from './PlaceRoute'
import PolicyAndRule from './PolicyAndRule'
import Price from './Price'
import Reviews from './Reviews'
import ShareAndLikeBtn from './ShareAndLikeBtn'

type PriceType = {
  normal_day_price: number
  weekend_price: number
}

type RuleType = {
  special_rules: string
  smoking: string
  pet: string
  cooking: string
  party: string
}

type OverviewType = {
  image: string
}

type PolicyType = {
  max_num_of_people: number
  cancel_policy: string
}

type RoomType = {
  square: number
  num_of_bedroom: number
  num_of_bed: number
  num_of_bathroom: number
  num_of_kitchen: number
}

type PlaceType = {
  overviews_attributes: OverviewType[]
  name: string
  id: number
  address: string
  place_type: string
  schedule_price_attributes: PriceType
  details: string
  rule_attributes: RuleType
  place_facilities_attributes: string[]
  policy_attributes: PolicyType
  room_attributes: RoomType
}

const PlaceDetailsComponent = ({ placeId }) => {
  const toast = useToast()

  const Nav = chakra('nav')
  const NavItem = chakra(Link)

  const [showStickyNavBar, setShowStickyNavBar] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    if (position >= 650) {
      setShowStickyNavBar(true)
    } else {
      setShowStickyNavBar(false)
    }
  }

  const {
    isLoading,
    isError,
    data: { data: placeData } = {} as any,
  }: { isError: boolean; isLoading: boolean; data: { data: PlaceType } } = useQuery(
    ['placeDetails', placeId],
    async () => {
      const { data } = await axios({
        url: `/v1/place/${placeId}`,
        method: 'GET',
      })

      return data
    },
    { enabled: placeId, retry: false }
  )

  if (isError) {
    toast({
      title: 'Đã có lỗi xảy ra',
      description: 'Lỗi khi tải dữ liệu, vui lòng kiểm tra lại đường truyền mạng!',
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLabels = [
    { label: 'Tổng quan', to: 'overview' },
    { label: 'Tiện nghi', to: 'amenities' },
    { label: 'Giá phòng', to: 'room rate' },
    { label: 'Đánh giá', to: 'reviews' },
    { label: 'Nội quy', to: 'policies' },
    { label: 'Vị trí', to: 'location' },
  ]

  return (
    <Box>
      <Nav
        pt='1.5rem'
        px={0}
        display={showStickyNavBar ? 'flex' : 'none'}
        position='sticky'
        backgroundColor='white'
        zIndex={10}
        top={0}
        left={0}
        borderTop='1px solid rgb(230, 230, 230)'
        borderBottom='1px solid rgb(230, 230, 230)'
        boxShadow='0 3px 5px 0 rgba(0,0,0,.07), 0 1px 0 0 rgba(0,0,0,.05)'
        fontSize='lg'
        transition='transform .2s'>
        <Container maxW='xl' centerContent flexDirection='row' display='flex' justifyContent='space-between'>
          <Box>
            {navLabels.map(({ label, to }) => (
              <NavItem
                key={to}
                activeClass='nav-item-sticky-active'
                sx={{
                  marginRight: '18px',
                  padding: '1.8125rem',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                  transition: 'all .2s',
                  ':hover': {
                    cursor: 'pointer',
                    color: '#f65e39',
                  },
                }}
                to={to}
                spy
                smooth
                duration={200}
                offset={-182}>
                {label}
              </NavItem>
            ))}
          </Box>
          <Box paddingRight='1.7rem'>
            <Box pt='1.5rem' px={0} />
          </Box>
        </Container>
      </Nav>
      <ImageSlider slide={placeData?.overviews_attributes} />
      <Box>
        <Container padding='0 2.8rem' maxW='xl' centerContent>
          <Box width='100%'>
            <Flex width='100%' flexDirection='row'>
              <Box flex='2'>
                <Box paddingRight='50px'>
                  <PlaceRoute />
                  <PlaceIntro
                    name={placeData?.name}
                    address={placeData?.address}
                    roomData={placeData?.room_attributes}
                    details={placeData?.details}
                    placeType={placeData?.place_type}
                  />
                  <Amenities listAmenties={placeData?.place_facilities_attributes} />
                  <Price price={placeData?.schedule_price_attributes} />
                  <Reviews id={placeId} />
                  <PolicyAndRule policy={placeData?.policy_attributes} rule={placeData?.rule_attributes} />
                  <Location />
                </Box>
              </Box>
              <Box flex='1'>
                <ShareAndLikeBtn id={placeId} />
                <BookingForm id={placeId} price={placeData?.schedule_price_attributes} />
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default PlaceDetailsComponent
