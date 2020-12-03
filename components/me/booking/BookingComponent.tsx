import {
  Box,
  Container,
  Popover,
  PopoverTrigger,
  Stack,
  Text,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  List,
  ListItem,
  chakra,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { FaHome } from 'react-icons/fa'
import { SingleDatePicker } from 'react-dates'
import moment from 'node_modules/moment/ts3.1-typings/moment'
import BookingCard from './BookingCard'

type FormData = {
  startDate: moment.Moment
  endDate: moment.Moment
}

const BookingComponent = () => {
  const IconArrow = chakra(IoIosArrowDown)

  const [formData, setFormData] = useState<FormData>({
    startDate: null,
    endDate: null,
  })

  const [focusedStartDate, setFocusedStartDate] = useState(null)
  const [focusedEndDate, setFocusedEndDate] = useState(null)

  return (
    <Box background='#f8f8f8' py={6}>
      <Container maxW='100%' px={40}>
        <Box>
          <Stack direction='row' spacing={3}>
            <Box
              flexBasis='16%'
              borderRadius='8px'
              boxShadow='1px 1px 1px 0 rgba(0,0,0,.05)'
              backgroundColor='#fff !important'
              px={6}
              pt={7}
              pb={4}>
              <Popover autoFocus={false} placement='bottom-start'>
                {({ isOpen }) => (
                  <>
                    <PopoverTrigger>
                      <Box cursor='pointer' display='flex' alignItems='center' justifyContent='space-between'>
                        <Text fontWeight='bold'>Tất cả đặt chỗ</Text>
                        <IconArrow
                          color='#555'
                          fontSize='md'
                          transition='transform .3s'
                          transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                        />
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent w='fit-content'>
                      <PopoverArrow />
                      <PopoverBody px={0}>
                        <List spacing={1}>
                          <ListItem sx={{ px: 5, py: 2, _hover: { cursor: 'pointer', backgroundColor: '#f5f7fa' } }}>
                            Tất cả đặt chỗ
                          </ListItem>
                          <ListItem sx={{ px: 5, py: 2, _hover: { cursor: 'pointer', backgroundColor: '#f5f7fa' } }}>
                            Chờ thanh toán
                          </ListItem>
                          <ListItem sx={{ px: 5, py: 2, _hover: { cursor: 'pointer', backgroundColor: '#f5f7fa' } }}>
                            Thành công
                          </ListItem>
                          <ListItem sx={{ px: 5, py: 2, _hover: { cursor: 'pointer', backgroundColor: '#f5f7fa' } }}>
                            Không thành công
                          </ListItem>
                          <ListItem sx={{ px: 5, py: 2, _hover: { cursor: 'pointer', backgroundColor: '#f5f7fa' } }}>
                            Đã hủy
                          </ListItem>
                        </List>
                      </PopoverBody>
                    </PopoverContent>
                  </>
                )}
              </Popover>
              <Box display='flex' alignItems='center' mt={3}>
                <Text fontSize='sm' color='#28CA6E'>
                  Tong so
                </Text>
              </Box>
            </Box>
            <Box
              flexBasis='32%'
              borderRadius='8px'
              boxShadow='1px 1px 1px 0 rgba(0,0,0,.05)'
              backgroundColor='#fff !important'
              px={6}
              pt={3}
              pb={4}>
              <Box display='flex'>
                <Box flexBasis='50%' maxW='50%'>
                  <SingleDatePicker
                    date={formData.startDate}
                    id='3S_start_month'
                    onDateChange={(startDate) => {
                      setFormData({ ...formData, startDate })
                    }}
                    focused={focusedStartDate}
                    onFocusChange={({ focused }) => setFocusedStartDate(focused)}
                    numberOfMonths={1}
                    placeholder='Chọn ngày'
                    displayFormat='DD/MM/YYYY'
                    hideKeyboardShortcutsPanel
                    showDefaultInputIcon={false}
                    readOnly
                    showClearDate
                    noBorder
                  />
                  <Text color='#222' fontWeight='bold' px={3}>
                    Từ
                  </Text>
                </Box>
                <Box flexBasis='50%' maxW='50%'>
                  <SingleDatePicker
                    date={formData.endDate}
                    id='3S_start_month'
                    onDateChange={(endDate) => {
                      setFormData({ ...formData, endDate })
                    }}
                    focused={focusedEndDate}
                    onFocusChange={({ focused }) => setFocusedEndDate(focused)}
                    numberOfMonths={1}
                    placeholder='Chọn ngày'
                    displayFormat='DD/MM/YYYY'
                    hideKeyboardShortcutsPanel
                    showDefaultInputIcon={false}
                    readOnly
                    showClearDate
                    noBorder
                  />
                  <Text fontWeight='bold' color='#222' px={3}>
                    Đến
                  </Text>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box my={6} minH='800px'>
          <Box className='header' mb={5} borderBottom='3px solid #fff'>
            <Box
              py={3}
              borderBottom='3px solid #f65e39'
              display='flex'
              className='tab-homestay'
              alignItems='center'
              maxW='fit-content'>
              <FaHome fontSize='24px' />
              <Text fontWeight='bold' ml={3} color='#f65e39'>
                Homestay
              </Text>
            </Box>
          </Box>
          <Box className='content'>
            <Box mt={6}>
              <BookingCard />
              <BookingCard />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default BookingComponent
