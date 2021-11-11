import { useContext, useEffect } from 'react'
import { CharacterEpisodes } from '../characters/CharacterEpisodes'
import { BackButton } from '../BackButton'
import CharactersContext from '../context/characters/charactersContext'
import styles from '../../styles/CharacterPage.module.css'

export const CharacterPage = ({ match }) => {
  const charactersContext = useContext(CharactersContext)
  const { getCharactersById, character, episodes, origin, location } =
    charactersContext

  useEffect(() => {
    getCharactersById(match.params.id)
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={`mb-4 ${styles.char_h1} text-center`}>{character.name}</h1>
      <img
        className={styles.img}
        src={character.image}
        alt={character.name}
        title={character.name}
      />
      <div className={`mt-3 text-center ${styles.char_info_container}`}>
        <p>
          <strong>Status</strong>: {character.status}
        </p>
        <p>
          <strong>Species</strong>: {character.species}
        </p>
        <p>
          <strong>Gender</strong>: {character.gender}
        </p>
        <p>
          <strong>Origin</strong>:{' '}
          {origin.name !== 'unknown' ? <span>{origin.name}</span> : 'Unknown'}
        </p>
        <p>
          <strong>Location</strong>:{' '}
          {location.name !== 'unknown' ? (
            <span>{location.name}</span>
          ) : (
            'Unknown'
          )}
        </p>
      </div>
      <CharacterEpisodes episodes={episodes} />
      <BackButton />
    </div>
  )
}
