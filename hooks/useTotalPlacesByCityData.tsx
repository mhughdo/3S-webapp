/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable camelcase */

import { QueryResult, useQuery } from 'react-query'
import axios from '@utils/axios'

function useTotalPlacesByCityData({ city }: { city: string | string[] }): QueryResult<any, any> {
  return useQuery(
    ['countPlacesByCity', city],
    async () => {
      const { data } = await axios({
        url: `/v1/place/city/${city}/count`,
        method: 'get',
      })

      return data
    },
    { retry: false, enabled: city }
  )
}

export default useTotalPlacesByCityData
