/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable camelcase */

import { PaginatedQueryResult, usePaginatedQuery } from 'react-query'
import axios from '@utils/axios'

function usePlacesByCityData({
  city,
  page,
}: {
  city: string | string[]
  page: number
}): PaginatedQueryResult<any, any> {
  return usePaginatedQuery(
    ['placesByCity', city, page],
    async () => {
      const { data } = await axios({
        url: `/v1/place/city/${city}/page/${page + 1}`,
        method: 'GET',
      })
      return data
    },
    { retry: false, enabled: city }
  )
}

export default usePlacesByCityData
