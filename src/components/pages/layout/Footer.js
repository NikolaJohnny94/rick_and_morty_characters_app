import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import styles from '../../../styles/Footer.module.css'

export const Footer = () => {
  const data = [
    {
      url: 'https://github.com/NikolaJohnny94',
      title: 'Follow me on GitHub',
    },
    {
      url: 'https://codepen.io/NikolaJohnny/pens/public',
      title: 'Follow me on Codepen',
    },
    {
      url: 'https://www.linkedin.com/in/nikola-ivanovi%C4%87-2b6a13179/',
      title: "Let's connect on Linkedin",
    },
    {
      url: 'https://twitter.com/nikola8794pwd',
      title: 'Follow me on Twitter',
    },
  ]
  return (
    <footer>
      <div className={styles.icons_container}>
        <a
          className='github'
          href={data[0].url}
          title={data[0].title}
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icons} />
        </a>
        <a
          href={data[1].url}
          title={data[1].title}
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faCodepen} className={styles.icons} />
        </a>
        <p className='fw-bold'>Developed by Nikola</p>
        <a
          href={data[2].url}
          title={data[2].title}
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.icons} />
        </a>
        <a
          href={data[3].url}
          title={data[3].title}
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.icons} />
        </a>
      </div>
    </footer>
  )
}
