/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// @refresh reset
import { Box, Avatar, Heading, Textarea, Button, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useSession } from 'next-auth/client'
import axios from '@utils/axios'
import { useMutation, queryCache } from 'react-query'

const ReviewForm = ({ id, refetch }) => {
  const toast = useToast()
  const [score, setScore] = useState(0)
  const [comment, setComment] = useState('')
  const [commentLoading, setCommentLoading] = useState(false)
  const [commentSuccess, setCommentSuccess] = useState(false)
  const [disable, setDisable] = useState(true)
  const [session, loading] = useSession()

  const [mutate] = useMutation(
    async ({ score, comment }: any) => {
      const { data } = await axios.post(`/v1/place/${id}/rating/new`, { score, comment })
      return data
    },
    {
      onError: (error) => {
        console.log(error)
        toast({
          title: 'Đã có lỗi xảy ra',
          description: 'Điểm số đánh giá phải lớn hơn 0',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
      },
      onSuccess: () => {
        refetch()
        toast({
          title: 'Thành công',
          description: 'Đã thêm 1 bình luận thành công!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        })
        setCommentLoading(false)
        setCommentSuccess(true)
        setScore(0)
        setComment('')
      },
    }
  )

  useEffect(() => {
    if (score > 0) {
      setDisable(false)
    }
  }, [score])

  const handleSubmit = (event) => {
    event.preventDefault()
    setCommentLoading(true)
    mutate({
      score,
      comment,
    })
  }

  return (
    <Box className='single-review' my={8}>
      <Box display='flex' flexDirection='row'>
        <Avatar name='Dan Abrahmov' src={session?.full_info.avatar} />
        <Box ml={2} display='flex' pt={1}>
          <Box>
            <Heading as='h5' fontWeight='bolder' lineHeight='shorter' fontSize='md'>
              {session?.full_info.name}
            </Heading>
          </Box>
          <Box display='flex' marginLeft={3} color='#FFB500' pt={0.25}>
            {[1, 2, 3, 4, 5].map((value) => (
              <Box key={value} fontSize='24px' onClick={() => setScore(value)}>
                {score < value ? <AiOutlineStar /> : <AiFillStar />}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className='reviews-content' mt={5}>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Để lại bình luận về địa điểm này'
          size='md'
          resize='none'
        />
        <Button
          disabled={disable || commentLoading}
          onClick={handleSubmit}
          ml='700px'
          backgroundColor='#F66038'
          color='white'>
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default ReviewForm
