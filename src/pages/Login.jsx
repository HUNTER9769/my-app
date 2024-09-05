import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Login.css'
import { login } from '../actions'
import { Link } from 'react-router-dom'
import Register from './Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import authReducer from '../reducers'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    // const { loading, error, user } = useSelector(state => state.authReducer);


    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password, navigate));
    };
    
    return (
        <div className='login-page'>
        <div className='welcome-text-div'>
            <h1 className='welcome-text'>Welcome Back</h1>
            <h3 className='login-text'>Login to your account</h3>
        </div>
        <div className='login_container'> 

            <>
            
            
            <h3 className='login-by'style={{display: 'inline'}}>Login by <span> <input type="radio" name='loginby' className='log-by' id='radio-email'/><label htmlFor="radio-email">Email</label> <input type="radio" name='loginby'className='log-by' id='radio-mobile'/><label htmlFor="radio-mobile">Mobile</label></span></h3>
            {/* <form className='register-by-email-form'>
                    <label htmlFor='email'>
                    <small>Email</small>
                    <input type="email" className='email-input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /></label>
                    <label htmlFor='password'>
                    <small>Password</small>
                    <input type="password" className='password-input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /></label>
                    <input type="checkbox" className='agree-to-terms-checkbox' />
                    <button className='login-submit' onClick={loginSubmit}>Login</button>
                    <Link to={'./Register'} className='Register-page-link'>Don't have an account register</Link>
            </form> */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                    {/* <h3 className="text-center">Login</h3> */}
                    <form onSubmit={loginSubmit} id='login-form'>
                        <div className="form-group">
                        <label htmlFor="email" id='email-label'><small>Email</small></label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password" id='password-label'><small>Password</small></label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </div>
            
                        <input type="checkbox" style={{margin: '10px'}} className='agree-to-terms-checkbox' id='agree-checkbox'/>
                        <label htmlFor="agree-checkbox" style={{margin: '10px 0px'}}>I agree to the <span style={{color: "#0000FF"}}>terms and conditions</span></label>

                        <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        style={{ backgroundColor: '#0000FF', borderColor: '#0000FF', display: "block", margin: '10px auto', width: '100%', fontWeight: '500'}}
                        >
                        Login
                        </button>
                        <Link to={'./Register'} ><span className='register-page-link'>Don't have an account ? Register Here</span></Link>

                    </form>
                    </div>
                </div>
                </div>
            
        
            </>
        </div>
        </div>
    )

}

export default Login