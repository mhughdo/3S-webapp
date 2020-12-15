/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { QueryResult, useQuery } from 'react-query'
import axios from '@utils/axios'

function addBookmarkPlace({ placeId }): QueryResult<any, any> {
  return useQuery(
    ['addBookmarkPlace', placeId],
    async () => {
      const { data } = await axios({
        url: '/v1/bookmark/new',
        method: 'POST',
        params: {
          place_id: placeId,
        },
      })

      return data
    },
    { retry: false, enabled: placeId }
  )
}

export default addBookmarkPlace
