import { Box, Image, Text, Stack } from '@chakra-ui/react'
import Place1 from '@assets/places/1.jpg'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Promo = () => (
  <Box mt={3} width='100%'>
    <Box>
      <Box
        sx={{
          ':before': {
            content: '""',
            display: 'block',
            width: '100%',
          },
        }}
        position='relative'
        zIndex='0'>
        <Image width='100%' height={230} top={0} left={0} objectFit='cover' borderRadius='3px' src={Place1} />
        <Box position='absolute' left={2.5} top={3.5}>
          <span
            style={{
              padding: '.25rem 0.5rem',
              fontSize: '.75rem',
              background: '#f65e39',
              color: '#fff',
              borderRadius: '1.5rem',
              letterSpacing: '.5px',
              lineHeight: '1.375rem',
            }}>
            -10% today
          </span>
        </Box>
        <Box position='absolute' right={2.5} top={3.5} cursor='pointer'>
          <FaHeart style={{ color: '#f65e39', fontSize: '20px' }} />
        </Box>
      </Box>
      <Box mt={3} fontSize={18} color='#222'>
        <Box
          sx={{
            ':hover': {
              color: '#f65e39',
            },
          }}
          cursor='pointer'
          transition='all .3s'
          fontWeight='bolder'>
          <Text>AnimeHomeStay#5 - Phan Boi Chau / Self Check-in</Text>
        </Box>
        <Stack mt={2} direction='row' spacing={3} fontSize={14}>
          <Text fontWeight='bolder'>315,000₫/đêm</Text>
          <Text as='s' color='#999'>
            350,000₫
          </Text>
        </Stack>
        <Box fontSize={16} mt={3}>
          Hoàn Kiếm, Hà Nội, Vietnam
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Promo
