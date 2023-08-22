import {useInfiniteQuery} from '@tanstack/react-query'
import axios from 'axios'
import {API_URL, MOVIES_API_KEY} from '../app/envVariables'
import {QueryKey} from '../app/queryKeys'

export const useSearchMovies = (searchKeyword: string) => {
  return useInfiniteQuery(
    [QueryKey.SearchedList, searchKeyword],
    async ({pageParam = 1}) => {
      const res = await axios({
        url: `${API_URL}/search/movie?query=${searchKeyword}&include_adult=false&language=en-US&page=${pageParam}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${MOVIES_API_KEY}`,
        },
      })
      return res.data
    },
    // {
    //   getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
    //   getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
    // },
    {enabled: !!searchKeyword}
  )
}
