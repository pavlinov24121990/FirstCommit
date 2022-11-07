import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="ForgotAccountMain">
            <div className="ForgotAccountContent">
                <p className="ForgotAccountContentP">Account search</p>
                <span></span>
                <p className="ForgotAccountContentPP">To find your account, ezcxczcxfdgsdfgdgsdzxxzxzxcznter your email address</p>
                <input className="MainContentInput" placeholder="Write an email" type="email" />
                <div>
                    <Link to="Welcome" className="ForgotAccountMainLink">Cancellation</Link>
                    <button className="ForgotAccountContentButton">Log in</button>
                </div>
            </div>
        </div>
    )
}

export {Main}