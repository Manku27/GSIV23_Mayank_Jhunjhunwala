import {AiFillHome, AiTwotoneStar} from 'react-icons/ai'
import {Link, useParams} from 'react-router-dom'
import {IMAGE_BASE_TEMP} from '../app/envVariables'
import {getDirectorsFromCastAndCrew} from './methods/getDirectorsFromCastAndCrew'
import {getListOfActors} from './methods/getListOfActors'
import './MovieDetails.css'
import {useMovieCredits} from './useMovieCredits'

import {useMovieDetails} from './useMovieDetails'

interface URLParams {
  id?: string
}

export const MovieDetails = () => {
  const {id} = useParams<URLParams>()

  const {data: details, isLoading, isError} = useMovieDetails(id)

  const {data: credits} = useMovieCredits(id)

  const releaseYear =
    details && details.release_date ? details.release_date.split('-')[0] : ''

  const actors = credits ? getListOfActors(credits) : []

  return (
    <div className="movie-details-container">
      <div className="border-box header">
        <h2>Movie Details</h2>
        <Link to={`/`}>
          <AiFillHome fill="yellow" size={30} />
        </Link>
      </div>
      {isLoading ? (
        <div className="centerBoth">Loading</div>
      ) : isError ? (
        <div className="centerBoth">
          Sorry! Could not load movie at the moment
        </div>
      ) : details ? (
        <div className="movie-content">
          <img
            src={`${IMAGE_BASE_TEMP}${details.poster_path}`}
            alt={details.title}
            className="movie-poster"
          />
          <div className="movie-details">
            <div className="movie-title">
              <div className="title">{details.title}</div>
              <div className="rating">
                <AiTwotoneStar fill="#ffc107" />
                {details.vote_average}
              </div>
            </div>
            <div className="details">
              <span>{releaseYear}</span>
              <span> | </span>
              <span>{details.runtime} mins</span>
              <span> | </span>
              <span>{credits ? getDirectorsFromCastAndCrew(credits) : ''}</span>
            </div>
            <div className="cast">
              <span>Cast : </span>
              <span>{actors[0]?.name || ''}</span>
              <span>, </span>
              <span>{actors[1]?.name || ''}</span>
              <span>, </span>
              <span>...</span>
            </div>
            <div className="description">
              <span>Description : </span>
              {details.overview}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
