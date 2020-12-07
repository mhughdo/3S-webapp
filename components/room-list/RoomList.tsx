import { Container, Box } from '@chakra-ui/react'
import ReactPaginate from 'react-paginate'
import RoomItem from './RoomItem'

const RoomList = () => {
  const onPageChange = () => 0
  return (
    <Container maxW='100%' px='0'>
      <Box w='100%' d='flex' px={7} flexWrap='wrap'>
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
      </Box>
      <ReactPaginate
        previousLabel='<'
        nextLabel='>'
        breakLabel='...'
        breakClassName='break-me'
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName='paginate-wrap'
        subContainerClassName='paginate-inner'
        pageClassName='paginate-li'
        pageLinkClassName='paginate-a'
        activeClassName='paginate-active'
        nextLinkClassName='paginate-next-a'
        previousLinkClassName='paginate-prev-a'
        breakLinkClassName='paginate-break-a'
      />
    </Container>
  )
}

export default RoomList
