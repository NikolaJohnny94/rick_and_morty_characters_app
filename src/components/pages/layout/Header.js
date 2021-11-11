import { Link, useLocation } from 'react-router-dom'
import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSearch } from '@fortawesome/free-solid-svg-icons'
import CharactersContext from '../../context/characters/charactersContext'
import styles from '../../../styles/Header.module.css'

export const Header = () => {
  const location = useLocation()
  const [text, setText] = useState('')

  const charactersContext = useContext(CharactersContext)
  const { getCharactersByName, clearCharacters } = charactersContext

  const data = {
    image: {
      url: 'https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png',
      alt: 'Rick & Morty Logo',
    },
    h1: 'Rick and Morty',
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      alert('Please input a value!')
    } else {
      getCharactersByName(text)
    }
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <header className={styles.header}>
      <Link to='/' title='Home'>
        <img
          className={styles.header_img}
          src={data.image.url}
          alt={data.image.alt}
        />
      </Link>
      <h1 className={styles.header_h1}>{data.h1}</h1>
      {location.pathname === '/' ? (
        <form className={styles.header_form} onSubmit={onSubmit}>
          <div className='input-group mb-3'>
            <input
              className={`form-control ${styles.header_search_input}`}
              type='text'
              aria-label='Search for characters'
              aria-describedby='submit-search-button'
              placeholder='Search Through Characters'
              value={text}
              onChange={onChange}
            />
            <button
              id='submit-search-button'
              className={`btn btn-success text-light ${styles.header_search_button}`}
              type='submit'
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button
              type='button'
              className={`btn btn-danger ${styles.header_clear_button}`}
              onClick={() => {
                clearCharacters()
                setText('')
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.header_div_alternative}></div>
      )}
    </header>
  )
}
