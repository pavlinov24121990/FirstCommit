import { Link } from 'react-router-dom';
import '../css/ForgotAccountSass.scss'

const ForgotAccount = () => {
  return (
    <div className="ForgotAccountMain">
      <div>
        <p>Account search</p>
        <span></span>
        <p>To find your account, enter your email address</p>
        <input placeholder="Write an email" type="email" />
        <div>
            <Link to="/">Cancellation</Link>
            <button>Log in</button>
        </div>
      </div>
    </div>
  )
}

export {ForgotAccount}