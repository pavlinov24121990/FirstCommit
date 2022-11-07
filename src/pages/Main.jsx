import { Link } from 'react-router-dom';
import { NavBar } from './NavBar'
import { HeaderMain } from './HeaderMain'
import { MainCenter } from './MainCenter'
import '../css/MainSass.scss'

const Main = () => {
  return (
      <div className="MainMain">
        <NavBar />
        <div>
          <HeaderMain />
          <MainCenter />
        </div>
      </div>
      
    )
}

export {Main}