/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable camelcase */
import {
  Box,
  Stack,
  Text,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { SingleDatePicker, DateRangePicker } from 'react-dates'
import moment from 'moment'
import { useQuery } from 'react-query'
import axios from '@utils/axios'
import { AmountFormat } from '@utils/amountFormat'

type FormDataType = {
  startDate: moment.Moment
  endDate: moment.Moment
  numOfGuest: number
}

type BookedDate = {
  start_date: string
  end_date: string
}[]

const BookingForm = ({ id, price }) => {
  const router = useRouter()
  const [formData, setFormData] = useState<FormDataType>({
    startDate: null,
    endDate: null,
    numOfGuest: 1,
  })

  const [focusedInput, setFocusedInput] = useState(null)

  const {
    isLoading,
    isError,
    data: { data: bookedDates } = {} as any,
  }: { isError: boolean; isLoading: boolean; data: { data: BookedDate } } = useQuery(
    ['getBookingByPlace', id],
    async () => {
      const { data } = await axios({
        url: `/v1/booking/place/${id}`,
        method: 'GET',
      })

      return data
    },
    { enabled: id, retry: false }
  )

  const formatVal = (val: number): string => `${val} khách`
  const parseVal = (val: string): number => parseInt(val.replace(/^\[a-z]/, ''))

  const handleSubmit = () => {
    console.log(formData)
    router.push({
      pathname: '/checkout/who-coming/',
      query: {
        guests: formData.numOfGuest,
        checkin: formData.startDate.format('YYYY-MM-DD'),
        checkout: formData.endDate.format('YYYY-MM-DD'),
        id,
      },
    })
  }

  return (
    <Box position='sticky' borderRadius='3px' top='100px'>
      <Box border='1px solid #e9e9e9' borderRadius='4px'>
        <Box px={13} pt={6}>
          <Box className='pricing'>
            <Stack direction='row' align='baseline'>
              <Text fontWeight='bolder' fontSize='3xl'>
                {AmountFormat(price?.normal_day_price)}₫
              </Text>
              <Text fontSize='sm'>/đêm</Text>
            </Stack>
          </Box>
          <Box
            mt={6}
            display='flex'
            flexDirection='row'
            width='100%'
            alignItems='center'
            justifyContent='center'
            border='1px solid #ebebeb'
            borderRadius='5px'>
            <DateRangePicker
              startDate={formData.startDate}
              startDateId='start-date-id'
              endDate={formData.endDate}
              endDateId='end-date-id'
              onDatesChange={({ startDate, endDate }) =>
                bookedDates.filter(
                  (item) =>
                    moment(item.start_date).isBetween(startDate, endDate, 'day') &&
                    moment(item.end_date).isBetween(startDate, endDate, 'day')
                ).length > 0
                  ? setFormData({ ...formData, startDate, endDate: null })
                  : setFormData({ ...formData, startDate, endDate })
              }
              isDayBlocked={(day) =>
                bookedDates.filter((item) => day.isBetween(item.start_date, item.end_date, 'day', '[]')).length > 0
              }
              focusedInput={focusedInput}
              onFocusChange={(input) => setFocusedInput(input)}
              numberOfMonths={1}
              startDatePlaceholderText='dd/mm/yyyy'
              endDatePlaceholderText='dd/mm/yyyy'
              displayFormat='DD/MM/YYYY'
              hideKeyboardShortcutsPanel
              showDefaultInputIcon={false}
              readOnly
              noBorder
            />
          </Box>
          <Box mt={2}>
            <NumberInput
              onChange={(value) =>
                setFormData({
                  ...formData,
                  numOfGuest: parseVal(value),
                })
              }
              value={formatVal(formData.numOfGuest)}
              width='100%'
              defaultValue={1}
              min={1}
              max={20}>
              <NumberInputField disabled padding='1.25rem' outline='none' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box
            onClick={handleSubmit}
            as='button'
            color='#fff'
            width='100%'
            height='3rem'
            borderRadius='.375rem'
            mt={3}
            mb={6}
            fontWeight='bold'
            backgroundImage='linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)'
            backgroundSize='200% auto'
            boxShadow='0 4px 12px 0 rgba(246,116,57,.4)'
            transition='all .3s'>
            Đặt Ngay
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BookingForm
