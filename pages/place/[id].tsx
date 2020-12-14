import HeaderComponent from '@components/Header'
import Copyright from '@components/Copyright'
import { Box } from '@chakra-ui/react'
import PlaceDetailsComponent from '@components/place/place_details/PlaceDetailsComponent'
import { useRouter } from 'next/router'

export default function PlaceDetails() {
  const router = useRouter()

  const { id } = router.query

  return (
    <Box>
      <HeaderComponent />
      <PlaceDetailsComponent placeId={id} />
      <Copyright />
    </Box>
  )
}
