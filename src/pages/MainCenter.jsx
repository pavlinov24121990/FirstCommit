import { Link } from 'react-router-dom';
import '../css/MainCenterSass.scss'

const MainCenter = () => {
    return (
      <section className='MainCenter'>
        
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Servise</Link></li>
          <li><Link to="">Gallery</Link></li>
          <li><Link to="">Feedback</Link></li>
        </ul>
      </section>
    )
}

export {MainCenter}