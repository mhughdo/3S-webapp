import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const PlaceRoute = () => (
  <Box>
    <Breadcrumb padding='1.5rem 0' spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Trang chủ</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Việt Nam</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Box>
)

export default PlaceRoute
