import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {API_URL, MOVIES_API_KEY} from '../app/envVariables'
import {QueryKey} from '../app/queryKeys'
import {Credits} from './models'

export const useMovieCredits = (movieId?: string) => {
  return useQuery<Credits, any>(
    [QueryKey.Credits, movieId],
    async () => {
      const {data} = await axios({
        url: `${API_URL}/movie/${movieId}/credits?language=en-US`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${MOVIES_API_KEY}`,
        },
      })
      return data
    },
    {
      enabled: !!movieId,
    }
  )
}
