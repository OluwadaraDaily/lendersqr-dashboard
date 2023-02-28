import './Login.scss'
import fullLogo from '../../images/logo.svg'
import loginImage from '../../images/login-img.png'
import AppInput from '../../components/AppInput/AppInput'
import Button from '../../components/Button/Button'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='login-section'>
      <div className="login-section__left">
        <div className='logo'>
          <img src={fullLogo} alt="" />
        </div>
        <div className="login-section__left__login-image">
          <img src={loginImage} alt="" />
        </div>
      </div>
      <div className='login-section__right'>
        <div className="login-section__right-text-section">
          <h1 className='title'>Welcome!</h1>
          <p className="subtext">Enter details to login</p>
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <AppInput placeholder='Email' inputType='email' />
          <AppInput placeholder='Password' inputType='password' />
          <div className="forgot-password-link">
            <p>Forgot Password?</p>
          </div>
          <Button btnType='submit' btnText="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login