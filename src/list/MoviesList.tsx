import {useState} from 'react'
import {MovieCard} from './MovieCard'
import {SearchBar} from './SearchBar'
import './MoviesList.css'
import {useMoviesList} from './useMoviesList'
import {MovieListItem} from './models'
import {ERROR_MESSAGE} from '../app/envVariables'
import {useDebounce} from '../app/useDebounce'
import {useSearchMovies} from './useSearchMovies'

export const MoviesList = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(event.target.value)
  }

  const debouncedSearchText = useDebounce(searchKeyWord, 1000)

  const {data, isLoading, isError} = useMoviesList()
  const {
    data: searchData,
    isLoading: isSearching,
    isError: isSearchError,
  } = useSearchMovies(debouncedSearchText)

  let renderItem = null
  if (isLoading) {
    renderItem = <div className="centerBoth">Loading</div>
  } else if (searchKeyWord && isSearching) {
    renderItem = <div className="centerBoth">Searching</div>
  } else if (isError) {
    renderItem = <div className="centerBoth">{ERROR_MESSAGE}</div>
  } else if (searchKeyWord && isSearchError) {
    renderItem = (
      <div className="centerBoth">
        No movies that match this, try another one !
      </div>
    )
  } else if (
    (data && data.pages.length > 0) ||
    (searchKeyWord && searchData && searchData.pages.length > 0)
  ) {
    const details: MovieListItem[] = []

    const list: any =
      searchKeyWord && searchData ? searchData : data ? data : []

    list.pages.forEach((page: any) => {
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
