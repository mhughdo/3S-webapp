import { Box, GridItem, Grid, Button, Text, Link, Tag } from '@chakra-ui/react'

const BookingCard = () => (
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
        <Link href='#' style={{ textDecoration: 'none' }}>
          <Text sx={{ ':hover': { color: '#f65e39', transition: 'all .3s' } }} fontSize='24px' pr='20%'>
            TeHouse-Private Bunk Bed Room
          </Text>
        </Link>
        <Box color='#666' mt={3}>
          Phòng riêng
        </Box>
      </Box>
      <Box flex='1 1 45%' pl={10} borderLeft='1px solid #efefef' borderRight='1px solid #efefef'>
        <Grid templateColumns='repeat(3, 1fr)' rowGap={5} gap={1} pb={3}>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Mã đặt chỗ
              </Text>
              <Text>1</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Số khách
              </Text>
              <Text>1</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Ngày đến
              </Text>
              <Text>20-11-2020</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Số đêm
              </Text>
              <Text>1</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Tổng tiền
              </Text>
              <Text>448,000₫</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize='sm' color='#999' mb={2}>
                Ngày đi
              </Text>
              <Text>21-11-2020</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box flex='1 1 24%' display='flex' justifyContent='center' px={10}>
        <Button mt={4} backgroundColor='#28ca6e' color='#fff' px={20} py={5}>
          Đặt lại chỗ ở
        </Button>
      </Box>
    </Box>
  </Box>
)

export default BookingCard
