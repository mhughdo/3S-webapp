/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Avatar, Box, chakra, Divider, Heading, Skeleton, Text, useToast } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { Element } from 'react-scroll'
import axios from '@utils/axios'
import { useQuery } from 'react-query'
import ReviewForm from './ReviewForm'

type RatingType = {
  score: number
  comment: string
  user_name: string
  user_avatar: string
}[]

const Reviews = ({ id }) => {
  const NavLabel = chakra(Element)

  const toast = useToast()

  const {
    isLoading,
    isError,
    data: { data: reviews } = [] as any,
  }: { isError: boolean; isLoading: boolean; data: { data: RatingType } } = useQuery(
    ['placeReviews', id],
    async () => {
      const { data } = await axios({
        url: `/v1/place/${id}/ratings`,
        method: 'GET',
      })

      return data
    },
    { enabled: id, retry: false }
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

  return (
    <NavLabel className='place-details-reviews' name='reviews' mt={20}>
      <Box className='reviews-title'>
        <Heading as='h3' fontSize='3xl' fontWeight='bolder' lineHeight='shorter'>
          Đánh giá
        </Heading>
      </Box>
      {reviews?.length &&
        reviews?.map((r) => (
          <Box className='single-review' my={8}>
            <Box display='flex' flexDirection='row'>
              <Avatar name='Dan Abrahmov' src={r.user_avatar} />
              <Box ml={2} display='flex' pt={1}>
                <Box>
                  <Heading as='h5' fontWeight='bolder' lineHeight='shorter' fontSize='md'>
                    {!isLoading ? r.user_name : <Skeleton mt={1} height='12px' width='120px' />}
                  </Heading>
                </Box>
                <Box display='flex' marginLeft={3} color='#FFB500' pt={0.25}>
                  {[...Array(r.score)].map(() => (
                    <AiFillStar fontSize={24} />
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className='reviews-content' mt={5}>
              <Text color='#555'>{!isLoading ? r.comment : <Skeleton mt={1} height='12px' width='240px' />}</Text>
            </Box>
          </Box>
        ))}
      <Divider />
      <ReviewForm id={id} />
    </NavLabel>
  )
}

export default Reviews
