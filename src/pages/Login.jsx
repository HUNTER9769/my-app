import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import './Login.css'
import { login } from '../actions'
import { Link } from 'react-router-dom'
import Register from './Register'


const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')

    const loginSubmit = () => {
        
        dispatch(login({email, password}))
    }
    
    return (
        <div className='login_container'>

            <>
            <h1 className='welcome-text'>Welcome Back</h1>
            <h3 className='login-text'>Login to your account</h3>
            
            <h3 className='login-by'style={{display: 'inline'}}>Login By <span> <input type="radio" name='loginby'/> <input type="radio" name='loginby'/></span></h3>
            <form className='register-by-email-form'>
                <label htmlFor='email'>
                <h4>Email</h4>
                <input type="email" className='email-input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor='password'>
                <h4>Password</h4>
                <input type="password" className='password-input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="checkbox" className='agree-to-terms-checkbox' />
                <button className='login-submit' onClick={loginSubmit}>Login</button>
                <Link to={'./Register'} className='Register-page-link'>Don't have an account register</Link>
            </form>
            {/* <form>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={loginSubmit}>Login</button>
                <Link to={'./Register'} >Don't have an account register</Link>
            </form> */}
            </>
        </div>
    )

}

export default Login