import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {API_URL, MOVIES_API_KEY} from '../app/envVariables'
import {QueryKey} from '../app/queryKeys'
import {MovieDetails} from './models'

export const useMovieDetails = (movieId?: string) => {
  return useQuery<MovieDetails, any>(
    [QueryKey.MovieDetails, movieId],
    async () => {
      const {data} = await axios({
        url: `${API_URL}/movie/${movieId}?language=en-US`,
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
