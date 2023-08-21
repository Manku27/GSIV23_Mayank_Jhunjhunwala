import {mockList} from './mock'
import {useState} from 'react'
import {MovieCard} from './MovieCard'
import {SearchBar} from './SearchBar'
import './MoviesList.css'

export const MoviesList = () => {
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyWord(event.target.value)
  }

  return (
    <>
      <SearchBar handleChange={handleChange} searchKeyWord={searchKeyWord} />
      <div className="container">
        {mockList.results.map((item) => {
          return <MovieCard item={item} key={item.id} />
        })}
      </div>
    </>
  )
}
