import React ,{useState} from 'react'
import LoginForm from '../components/LoginPage/LoginForm'
import { useSelector } from 'react-redux'
import { userLogin } from "../actions/userActions";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorMessage,setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const data = useSelector((state)=>{
    return state.user
  })
  return (
    <div className="bg-gradient-to-r from-blue-300 to-black min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
    { errorMessage !== null ? <div className='flex justify-center items-center'><p className='text-center text-red-900'>{errorMessage}</p></div>:null } 
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
       <LoginForm setErrorMessage={setErrorMessage} dispatchLogin={userLogin}/>
       <p className='my-4 mx-5 text-sm'>Don't you have an Account ?<span onClick={()=>navigate('/signup')} className='text-blue-700  underline'> Create Account</span></p>
    </div>
  </div>

  )
}

export default Login