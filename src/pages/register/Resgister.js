import "./register.css";
import {Link} from 'react-router-dom'
export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">
            Connect with  friends and the world around you on SocialMedia.
          </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <span className="loginForgot">Forgot Password</span>
                <Link to='/login' className="linkregister"><button className="loginRegisterButton">Log In Account</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
}
