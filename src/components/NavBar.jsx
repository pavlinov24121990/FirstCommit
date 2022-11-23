import { Link } from 'react-router-dom';
import '../css/navBarCss.scss'

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <ul>
        <li><Link to="">Home</Link></li>
        <li><Link to="About">About</Link></li>
        <li><Link to="">Servise</Link></li>
        <li><Link to="">Gallery</Link></li>
        <li><Link to="">Feedback</Link></li>
      </ul>
    </nav>
  )
}

export {NavBar}