import {AiTwotoneStar} from 'react-icons/ai'
import {IMAGE_BASE_TEMP} from '../app/envVariables'
import {MovieListItem} from './models'
import './MovieCard.css'

interface Props {
  item: MovieListItem
}

export const MovieCard = ({item}: Props) => {
  return (
    <div className="movie-card" key={item.id}>
      <div className="image-container">
        <img
          src={`${IMAGE_BASE_TEMP}${item.poster_path}`}
          alt={item.title}
          className="movie-image"
        />
      </div>
      <div className="movie-details">
        <div className="title-and-rating">
          <div className="title">
            <div className="title-text">{item.title}</div>
          </div>
          <div className="rating">
            <AiTwotoneStar fill="#ffc107" />
            {item.vote_average}
          </div>
        </div>
        <div className="overview">{item.overview}</div>
      </div>
    </div>
  )
}
