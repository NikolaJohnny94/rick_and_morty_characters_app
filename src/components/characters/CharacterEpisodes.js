import { EpisodeCard } from '../episodes/EpisodeCard'
import styles from '../../styles/CharacterEpisodes.module.css'

export const CharacterEpisodes = ({ episodes }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h2 className={`text-center ${styles.h2_font}`}>Episodes</h2>
        {episodes.map((episode) => (
          <EpisodeCard key={episode} episode={episode} />
        ))}
      </div>
    </div>
  )
}
