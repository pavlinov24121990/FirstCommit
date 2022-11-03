import { Link } from 'react-router-dom';

const ForgotAccount = () => {
    return (
        <div className="ForgotAccountMain">
            <div className="ForgotAccountContent">
                <p className="ForgotAccountContentP">Account search</p>
                <span></span>
                <p className="ForgotAccountContentPP">To find your account, enter your email address</p>
                <input className="MainContentInput" placeholder="Write an email" type="email" />
                <div>
                    <Link to="/" className="ForgotAccountMainLink">Cancellation</Link>
                    <button className="ForgotAccountContentButton">Log in</button>
                </div>
            </div>
        </div>
    )
}

export {ForgotAccount}