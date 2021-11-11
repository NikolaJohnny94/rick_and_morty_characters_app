import { CharacterCard } from './CharacterCard'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons'
import CharactersContext from '../context/characters/charactersContext'
import styles from '../../styles/Characters.module.css'

export const Characters = () => {
  const [count, setCount] = useState(1)
  const charactersContext = useContext(CharactersContext)
  const { characters, pages, next, prev, getCharactersByName } =
    charactersContext

  const nextPage = () => {
    if (next !== null) {
      setCount(count + 1)
      getCharactersByName(
        next.split('&name=')[1],
        next.split('&name=')[0].slice(48)
      )
    }
  }
  const prevPage = () => {
    if (prev !== null) {
      setCount(count - 1)
      getCharactersByName(
        prev.split('&name=')[1],
        prev.split('&name=')[0].slice(48)
      )
    }
  }

  const firstPage = () => {
    if (prev !== null) {
      setCount(1)
      getCharactersByName(prev.split('&name=')[1], 1)
    }
  }

  const lastPage = () => {
    if (next !== null) {
      setCount(pages)
      getCharactersByName(next.split('&name=')[1], pages)
    }
  }

  return (
    <div className='row'>
      {characters.map((char) => (
        <CharacterCard key={char.id} char={char}></CharacterCard>
      ))}
      {pages !== null && (
        <>
          <p className='text-center'>
            {' '}
            Page: {count} / {pages}
          </p>
          <div className={`mb-5 ${styles.button_container}`}>
            <button
              className={`btn btn-danger me-2 ${styles.first_last_button}`}
              onClick={firstPage}
              disabled={prev === null}
              title='First page'
            >
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </button>
            <button
              className={`btn btn-danger me-2 ${styles.prev_next_buttons}`}
              onClick={prevPage}
              disabled={prev === null}
              title='Previous page'
            >
              Prev
            </button>
            <button
              className={`btn btn-danger me-2 ${styles.prev_next_buttons}`}
              onClick={nextPage}
              disabled={next === null}
              title='Next page'
            >
              Next
            </button>
            <button
              className={`btn btn-danger ${styles.first_last_button}`}
              onClick={lastPage}
              disabled={next === null}
              title='Last page'
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
