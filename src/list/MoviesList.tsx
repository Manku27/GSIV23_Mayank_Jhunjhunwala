import {useState} from 'react'
import {MovieCard} from './MovieCard'
import {SearchBar} from './SearchBar'
import './MoviesList.css'
import {useMoviesList} from './useMoviesList'
import {MovieListItem} from './models'
import {ERROR_MESSAGE} from '../app/envVariables'

export const MoviesList = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(event.target.value)
  }

  const {data, isLoading, isError} = useMoviesList()

  let renderItem = null
  if (isLoading) {
    renderItem = <div className="centerBoth">Loading</div>
  } else if (isError) {
    renderItem = <div className="centerBoth">{ERROR_MESSAGE}</div>
  } else if (data && data.pages.length > 0) {
    const details: MovieListItem[] = []
    data.pages.forEach((page) => {
      page.results?.forEach((detail: MovieListItem) => {
        details.push(detail)
      })

      renderItem = (
        <>
          {details.map((item) => {
            return <MovieCard item={item} key={item.id} />
          })}
        </>
      )
    })
  }

  return (
    <>
      <SearchBar handleChange={handleChange} searchKeyWord={searchKeyWord} />
      <div className="container">{renderItem}</div>
    </>
  )
}
