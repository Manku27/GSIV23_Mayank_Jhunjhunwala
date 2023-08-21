import {AiOutlineSearch} from 'react-icons/ai'
import './SearchBar.css'

interface Props {
  searchKeyWord: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar = ({searchKeyWord, handleChange}: Props) => {
  return (
    <div className="search-bar-container">
      <input
        value={searchKeyWord}
        type="search"
        onChange={handleChange}
        className="search-input"
      />
      <AiOutlineSearch className="search-icon" />
    </div>
  )
}
