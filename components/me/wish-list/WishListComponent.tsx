/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { Box, Container, Grid, Text, useToast } from '@chakra-ui/react'
import { useSession } from 'next-auth/client'
import axios from '@utils/axios'
import { useEffect, useState } from 'react'
import EmptyList from './EmptyList'
import Promo from './Promo'

const WishListComponent = () => {
  const toast = useToast()
  const [session, loading] = useSession()
  const [dataSource, setDataSource] = useState([])

  const initData = async (id: number) => {
    try {
      const { data } = await axios({
        url: `/v1/bookmark`,
        method: 'get',
      })
      setDataSource(data.data)
      console.log(id)
    } catch (error) {
      toast({
        title: 'Có sự cố xảy ra',
        description: 'Vui lòng kiểm tra lại đường truyền mạng',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }
  useEffect(() => {
    if (!loading) {
      const { full_info } = session
      initData(full_info.id) as any
    }
  }, [loading, session])

  return (
    <Box background='#f8f8f8' minH='1000px' py={6}>
      <Container maxW='100%' px={40}>
        <Box>
          <Text as='h1' mt={6} fontWeight='bold' fontSize={32}>
            Chỗ ở yêu thích : {dataSource.length}
          </Text>
          <Grid templateColumns='repeat(5, 1fr)' rowGap={4} columnGap={3}>
            {dataSource.map((item) => (
              <Promo data={item} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default WishListComponent
