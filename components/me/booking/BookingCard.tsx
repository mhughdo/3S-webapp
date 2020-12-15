import { Box, GridItem, Grid, Text, Link, Tag } from '@chakra-ui/react'

const BookingCard = ({ data }) => (
  <Box
    className='card-booking'
    borderRadius='8px'
    boxShadow='0 2px 20px 0 rgba(0,0,0,.05)'
    backgroundColor='#fff'
    px={6}
    pt={6}
    pb={9}
    mb={4}>
    <Box mb={5}>
      <Tag variant='solid' backgroundColor='#7e8d9a' color='#fff'>
        Incomplete
      </Tag>
    </Box>
    <Box display='flex'>
      <Box flex='1 30%'>
        <Link href={`/place/${data.id}`} style={{ textDecoration: 'none' }}>
          <Text sx={{ ':hover': { color: '#f65e39', transition: 'all .3s' } }} fontSize='24px' pr='20%'>
            {data.place_name}
          </Text>
        </Link>
        <Box color='#666' mt={3}>
          {data.place_type}
        </Box>
      </Box>
      <Box flex='1 1 45%' pl={10} borderLeft='1px solid #efefef' borderRight='1px solid #efefef'>
        <Grid templateColumns='repeat(3, 1fr)' rowGap={5} gap={1} pb={3}>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Mã đặt chỗ
              </Text>
              <Text>{data.id}</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Số khách
              </Text>
              <Text>{data.num_of_guest}</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Ngày đến
              </Text>
              <Text>{data.checkin.split('T')[0]}</Text>
            </Box>
          </GridItem>
          <GridItem />
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Tổng tiền
              </Text>
              <Text>{data.price}₫</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Ngày đi
              </Text>
              <Text>{data.checkout.split('T')[0]}</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  </Box>
)

export default BookingCard
