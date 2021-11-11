import { Link } from 'react-router-dom'
import styles from '../../styles/CharacterCard.module.css'

export const CharacterCard = ({ char }) => {
  return (
    <div
      className={`col-3 card mt-2 mb-5 ${styles.card_border} ${styles.card_additional}`}
    >
      <h4 className={`mb-4 ${styles.card_title}`}>{char.name}</h4>
      <Link
        to={`/character/${char.id}`}
        title={`${char.name} - Status [${char.status}]`}
      >
        <img className={styles.card_img} src={char.image} alt={char.name} />
      </Link>
    </div>
  )
}
