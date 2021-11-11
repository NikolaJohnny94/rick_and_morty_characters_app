import { useContext, useEffect } from 'react'
import { BackButton } from '../BackButton'
import EpisodesContext from '../context/episodes/episodesContext'
import style from '../../styles/EpisodePage.module.css'

export const EpisodePage = ({ match }) => {
  const episodesContext = useContext(EpisodesContext)
  const { getEpisodeByID, episode } = episodesContext

  useEffect(() => {
    getEpisodeByID(match.params.id)
    // eslint-disable-next-line
  }, [])

  return (
    <div className={style.episode_page_font}>
      <div className='card text-center'>
        <div className='card-header bg-success text-light'>
          <strong>{episode.episode}</strong>
        </div>
        <div className='card-body bg-dark text-light'>
          <h5 className='card-title'>{episode.name}</h5>
          <p className='card-text'>{episode.air_date}</p>
        </div>
        <div className='card-footer bg-success text-light font-italic'>
          <span className={style.italic_font}>Rick and Morty</span>
        </div>
      </div>
      <BackButton />
    </div>
  )
}
