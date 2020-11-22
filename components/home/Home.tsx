import { Box, Container, Grid, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Banner from '@assets/banner.jpg'
import Homestay from '@assets/services/homestay.jpg'
import Oto from '@assets/services/oto.jpg'
import Ticket from '@assets/services/ticket.jpg'
import Plane from '@assets/services/plane.png'
import Slider from 'react-slick'
import Hanoi from '@assets/top-destinations/hanoi.png'
import HCM from '@assets/top-destinations/hcm.png'
import Hoian from '@assets/top-destinations/hoian.png'
import QuangNinh from '@assets/top-destinations/quangninh.png'
import Nhatrang from '@assets/top-destinations/nhatrang.png'
import Danang from '@assets/top-destinations/danang.png'
import Dalat from '@assets/top-destinations/dalat.png'
import Vungtau from '@assets/top-destinations/vungtau.png'
import Pro1 from '@assets/promotion/1.png'
import Pro2 from '@assets/promotion/2.jpg'
import Pro3 from '@assets/promotion/3.jpg'
import Place1 from '@assets/places/1.jpg'
import Place2 from '@assets/places/2.jpg'
import Place3 from '@assets/places/3.jpg'
import Place4 from '@assets/places/4.jpg'
import Place5 from '@assets/places/5.png'
import TopDestinationBox from './TopDestinationBox'
import ServiceBox from './ServiceBox'
import HomeSectionHeader from './HomeSectionHeader'
import PlaceBox from './PlaceBox'

const Home = () => (
  <Container maxW='calc(1296px + 5.6rem)' px={10}>
    <Box mt={12}>
      <Box>
        <Box sx={{ img: { borderRadius: 'xl' } }}>
          <Image src={Banner} width={1921} height={431} />
        </Box>
        <Box mt={8}>
          <Text fontSize='3xl' fontWeight='bold'>
            Chào mừng đến với 3S!
          </Text>
          <Text>Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên 3S</Text>
          <Text>
            {' '}
            <Link href='/login'>Đăng nhập</Link> hoặc <Link href='/signup'>Đăng ký</Link> để trải nghiệm !
          </Text>
        </Box>
        <Box css={{}}>
          <Grid templateColumns='repeat(4, 250px)' mt={12}>
            <ServiceBox title='Homestay' description='Căn hộ dịch vụ & Biệt thự' imageUrl={Homestay} />
            <ServiceBox title='Vé tham quan' description='Mua vé thật dễ dàng' imageUrl={Ticket} comingSoon />
            <ServiceBox title='Thuê xe ô tô' description='Giá chỉ từ 1,299,000đ' imageUrl={Oto} comingSoon />
            <ServiceBox title='Đưa đón sân bay' description='Xe sang chỉ từ 199.000đ' imageUrl={Plane} comingSoon />
          </Grid>
        </Box>
        <Box
          mt={12}
          sx={{
            '.slick-next, .slick-prev': {
              width: '56px',
              height: '56px',
              boxShadow: '0 0 7px -4px #000',
              zIndex: 1,
              borderRadius: '56px',
              background: 'white',
              transition: 'all .3s ease-in-out',
              ':hover': {
                outline: 'none',
                boxShadow: '0 0 5px 0 rgba(246,94,57,.5)',
                ':before': {
                  color: 'orange.500',
                },
              },
            },
            '.slick-prev': {
              left: '-22px',
              ':before': {
                color: 'black',
                content: '"\\003c"',
                position: 'absolute',
                top: '28%',
                left: '34%',
              },
            },
            '.slick-next': {
              right: '-27px',
              ':before': {
                color: 'black',
                content: '"\\003e"',
                position: 'absolute',
                top: '28%',
                left: '42%',
              },
            },
            '.slick-slide': {
              paddingRight: '2',
            },
          }}>
          <HomeSectionHeader
            name='Địa điểm nổi bật'
            description='Cùng 3S bắt đầu chuyến hành trình chinh phục thế giới của bạn'
          />
          <Slider infinite speed={500} slidesToShow={5} slidesToScroll={5}>
            <TopDestinationBox name='Hà Nội' placeCount={3207} imageUrl={Hanoi} />
            <TopDestinationBox name='TP.Hồ Chí Minh' placeCount={3246} imageUrl={HCM} />
            <TopDestinationBox name='Vũng Tàu' placeCount={846} imageUrl={Vungtau} />
            <TopDestinationBox name='Đà Lạt' placeCount={2119} imageUrl={Dalat} />
            <TopDestinationBox name='Đà Nẵng' placeCount={1661} imageUrl={Danang} />
            <TopDestinationBox name='Nha Trang' placeCount={980} imageUrl={Nhatrang} />
            <TopDestinationBox name='Quảng Ninh' placeCount={392} imageUrl={QuangNinh} />
            <TopDestinationBox name='Hội An' placeCount={456} imageUrl={Hoian} />
          </Slider>
        </Box>
        <Box mt={12}>
          <HomeSectionHeader name='Ưu đãi độc quyền' description='Chỉ có tại 3S, hấp dẫn và hữu hạn, book ngay!' />

          <Grid templateColumns='repeat(3, 1fr)' gap={4}>
            <Box
              sx={{
                img: {
                  borderRadius: 'lg',
                },
              }}>
              <Image src={Pro1} height='402' width='917' />
            </Box>
            <Box
              sx={{
                img: {
                  borderRadius: 'lg',
                },
              }}>
              <Image src={Pro2} height='402' width='917' />
            </Box>
            <Box
              sx={{
                img: {
                  borderRadius: 'lg',
                },
              }}>
              <Image src={Pro3} height='402' width='917' />
            </Box>
          </Grid>
        </Box>
        <Box
          mt={12}
          sx={{
            '.slick-next, .slick-prev': {
              width: '56px',
              height: '56px',
              boxShadow: '0 0 7px -4px #000',
              zIndex: 1,
              borderRadius: '56px',
              background: 'white',
              transition: 'all .3s ease-in-out',
              ':hover': {
                outline: 'none',
                boxShadow: '0 0 5px 0 rgba(246,94,57,.5)',
                ':before': {
                  color: 'orange.500',
                },
              },
            },
            '.slick-prev': {
              left: '-26px',
              top: '36%',
              ':before': {
                color: 'black',
                content: '"\\003c"',
                position: 'absolute',
                top: '28%',
                left: '34%',
              },
            },
            '.slick-next': {
              right: '-26px',
              top: '36%',
              ':before': {
                color: 'black',
                content: '"\\003e"',
                position: 'absolute',
                top: '28%',
                left: '42%',
              },
            },
            '.slick-slide': {
              paddingRight: '2',
            },
          }}>
          <HomeSectionHeader
            name='Vòng vòng phố thị Hà Nội'
            description='Top chỗ ở sạch đep, giá tốt tại Hà Nội cho chuyến du lịch và công tác của bạn.'
          />

          <Slider infinite speed={500} slidesToShow={4} slidesToScroll={4}>
            <PlaceBox name='AimeeHomestay#2 - Phan Bội Châu/ Self check-in' price={315000} imageUrl={Place1} />
            <PlaceBox name='AimeeHomestay#5 - Phan Bội Châu /Self Check-in' price={350000} imageUrl={Place2} />
            <PlaceBox name='ADODDA - Vinhome Greenbay' price={568000} imageUrl={Place3} />
            <PlaceBox name='Hà Nội Home 1 - Nice house for you' price={490000} imageUrl={Place4} />
            <PlaceBox name='Phòng Gốm - Vie De Maison' price={350000} imageUrl={Place5} />
          </Slider>
        </Box>
      </Box>
    </Box>
  </Container>
)

export default Home
