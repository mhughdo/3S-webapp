import { Box, Image, Text, Stack, Link } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'
import { formatPrice } from '@utils/index'

const Promo = ({ data }) => (
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
        <Image width='100%' height={230} top={0} left={0} objectFit='cover' borderRadius='3px' src={data.place_image} />
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
          <Link href={`/place/${data.place_id}`} style={{ textDecoration: 'none' }}>
            <Text>{data.place_name}</Text>
          </Link>
        </Box>
        <Stack mt={2} direction='row' spacing={3} fontSize={14}>
          <Text fontWeight='bolder'>{formatPrice(data.place_price)}₫/đêm</Text>
          <Text as='s' color='#999'>
            {formatPrice(data.place_price)}₫
          </Text>
        </Stack>
        <Box fontSize={16} mt={3}>
          {data.place_address}
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Promo
