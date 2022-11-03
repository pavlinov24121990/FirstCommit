import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
         <div className="Main">
          <div className="MainContent">
          <h1 className="MainContentH1">NoT Only Flowers</h1>
          <h2 className="MainContentH2">In Love</h2>
          <input className="MainContentInput" placeholder="Write an email" type="email" />
          <input className="MainContentInput" placeholder="Write password" type="password" />
          <button className="MainContentButton">Log in</button>
          <Link className="ForgotAccount" to="ForgotAccount">Forgot account ?</Link>
          <span className="MainSpan">
             or
          </span>
          <Link to="CreateANewAccount" className="CreateANewAccount">Create a new account</Link>
          </div>
      </div>
    )
}

export {Welcome}