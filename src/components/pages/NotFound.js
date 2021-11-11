import { BackButton } from '../BackButton'
import styles from '../../styles/NotFound.module.css'

export const NotFound = () => {
  return (
    <div>
      <h1 className={`text-danger ${styles.not_found_h1}`}>404 Not Found</h1>
      <BackButton />
    </div>
  )
}
