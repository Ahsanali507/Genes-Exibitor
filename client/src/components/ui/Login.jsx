import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../assets/icons/google.svg'
import facebookLogo from '../../assets/icons/facebook.svg';
import hideLogo from '../../assets/icons/hide.svg';
import unhideLogo from '../../assets/icons/unhide.svg';
import logo from '../../assets/logo.svg';
import RegistrationPart from '../shared/RegistrationPart';
import Button from '../shared/Button';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <>
      <RegistrationPart/>

      <div className="w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-470px">
          <img src={logo} alt="Logo" className="mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center font-zen">Welcome back to the <br /> Genes Exhibitors Community</h1>

          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1 font-zen">Email or Username</label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-red-500 focus:outline-none"
                placeholder="Enter your email or username"
                required
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-1 font-zen">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-red-500 focus:outline-none"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
              >
                {showPassword ? (
                  <img src={unhideLogo} alt="Google Logo" className="w-4 h-4 mt-4" />
                ) : (
                  <img src={hideLogo} alt="Google Logo" className="w-4 h-4 mt-4" />
                )}
              </button>
            </div>

            <div className="flex mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm text-gray-700 font-zen">Remember me</label>
              </div>
              <div className="ml-auto">
                <Button name="Sign In" onClick={handleSignIn}/>
              </div>
            </div>
          </form>

          <div className="flex justify-between items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm text-gray mb-4 font-zen">No account yet?<Link to="/signup" className='font-semibold font-zen'> Sign up</Link></p>
            <div className="flex gap-4 w-full">
              <button className="flex items-center justify-center text-gray-500 py-2 px-4 border border-gray-300 bg-gray-100 rounded-full w-full font-zen">
                <img src={googleLogo} alt="Google Logo" className="w-6 h-6" />
                Login In with Google
              </button>
              <button className="flex items-center justify-center text-gray-500 py-2 px-4 border border-gray-300 bg-gray-100 rounded-full w-full font-zen">
                <img src={facebookLogo} alt="Facebook Logo" className="w-6 h-6" />
                Login In with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login