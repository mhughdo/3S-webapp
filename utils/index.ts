import isWeekend from 'date-fns/isWeekend'
import addDays from 'date-fns/addDays'
import isEqual from 'date-fns/isEqual'

function formatPrice(price: number) {
  return new Intl.NumberFormat().format(price)
}

const toDateString = (date: Date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

const calculateRoomPrice = (checkIn: Date, checkOut: Date, placeData: any): number => {
  let date = checkIn
  let price = 0
  while (!isEqual(date, checkOut)) {
    if (isWeekend(date)) {
      price += placeData.schedule_price_attributes.weekend_price
    } else {
      price += placeData.schedule_price_attributes.normal_day_price
    }
    date = addDays(date, 1)
  }
  return price
}
const dayOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']

export { formatPrice, dayOfWeek, calculateRoomPrice, toDateString }
