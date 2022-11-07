import { Link } from 'react-router-dom';
import '../css/HeaderSass.scss'

const HeaderMain = () => {
    return (
      <header className=''>
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Servise</Link></li>
          <li><Link to="">Gallery</Link></li>
          <li><Link to="">Feedback</Link></li>
        </ul>
      </header>
    )
}

export {HeaderMain}