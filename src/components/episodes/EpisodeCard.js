import { Link } from 'react-router-dom'
import styles from '../../styles/EpisodeCard.module.css'

export const EpisodeCard = ({ episode }) => {
  return (
    <Link
      className={`col-2 card text-center text-light bg-success m-auto mt-3 ${styles.episode_card}`}
      to={episode.replace(
        'https://rickandmortyapi.com/api/episode/',
        '/episodes/'
      )}
    >
      Episode {episode.slice(40)}
    </Link>
  )
}
