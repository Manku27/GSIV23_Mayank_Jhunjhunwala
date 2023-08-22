import {AiFillHome, AiTwotoneStar} from 'react-icons/ai'
import {Link, useParams} from 'react-router-dom'
import {IMAGE_BASE_TEMP} from '../app/envVariables'
import {getDirectorsFromCastAndCrew} from './methods/getDirectorsFromCastAndCrew'
import {getListOfActors} from './methods/getListOfActors'
import {mockCredits} from './mockCredits'
import {detailsMock} from './mockDetails'
import './MovieDetails.css'

interface URLParams {
  id?: string
}

export const MovieDetails = () => {
  const {id} = useParams<URLParams>()

  const releaseYear = detailsMock.release_date
    ? detailsMock.release_date.split('-')[0]
    : ''

  const actors = getListOfActors(mockCredits)

  return (
    <div className="movie-details-container">
      <div className="border-box header">
        <h2>Movie Details</h2>
        <Link to={`/`}>
          <AiFillHome fill="yellow" size={30} />
        </Link>
      </div>
      <div className="movie-content">
        <img
          src={`${IMAGE_BASE_TEMP}${detailsMock.poster_path}`}
          alt={detailsMock.title}
          className="movie-poster"
        />
        <div className="movie-details">
          <div className="movie-title">
            <div className="title">{detailsMock.title}</div>
            <div className="rating">
              <AiTwotoneStar fill="#ffc107" />
              {detailsMock.vote_average}
            </div>
          </div>
          <div className="details">
            <span>{releaseYear}</span>
            <span> | </span>
            <span>{detailsMock.runtime} mins</span>
            <span> | </span>
            <span>{getDirectorsFromCastAndCrew(mockCredits)}</span>
          </div>
          <div className="cast">
            <span>Cast : </span>
            <span>{actors[0].name}</span>
            <span>, </span>
            <span>{actors[1].name}</span>
            <span>, </span>
            <span>...</span>
          </div>
          <div className="description">
            <span>Description : </span>
            {detailsMock.overview}
          </div>
        </div>
      </div>
    </div>
  )
}
