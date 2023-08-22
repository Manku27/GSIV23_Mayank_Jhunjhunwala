import {useInfiniteQuery} from '@tanstack/react-query'
import axios from 'axios'
import {API_URL, MOVIES_API_KEY} from '../app/envVariables'
import {QueryKey} from '../app/queryKeys'

export const useMoviesList = () => {
  const today = new Date()
  const min_date = today.toISOString().split('T')[0]
  let max_date: string | Date = today
  max_date.setFullYear(max_date.getFullYear() + 1)
  max_date = max_date.toISOString().split('T')[0]

  return useInfiniteQuery(
    [QueryKey.MoviesList],
    async ({pageParam = 1}) => {
      const res = await axios({
        url:
          `${API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=release_date.asc&with_release_type=2|3&release_date.gte=${min_date}&release_date.lte=${max_date}&page=` +
          pageParam,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${MOVIES_API_KEY}`,
        },
      })
      return res.data
    },
    {
      getPreviousPageParam: (firstPage) => firstPage.page - 1 ?? undefined,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    }
  )
}
