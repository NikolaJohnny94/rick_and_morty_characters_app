import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/BackButton.module.css'

export const BackButton = () => {
  const history = useHistory()
  return (
    <button
      className={`btn btn-danger text-light fw-bold mt-3 mb-5 ms-1 ${styles.back_button}`}
      onClick={() => history.goBack()}
      title='Previous page'
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  )
}
