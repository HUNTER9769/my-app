import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../actions'
import { Link } from 'react-router-dom'
import './Register.css'
import authReducer from '../reducers'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [firstname , setFirstname] = useState('')
    const [lastname , setLastname] = useState('')
    const [username , setUsername] = useState('')
    const [mobile , setMobile] = useState('')
    const [password , setPassword] = useState('')
    const [confirm_password , setConfirmPassword] = useState('')
    const [room , setRoom] = useState('')
    const [street , setStreet] = useState('')
    const [city , setCity] = useState('')
    const [zipcode , setZipcode] = useState('')

    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(register(email,firstname , lastname , username , mobile , password , confirm_password , room , street , city , zipcode , navigate))
    }

    return (
    <div className='register-container'>
        <div>
        <form className='register-box' onSubmit={registerSubmit}>
                <h5 className='sign-up-with-email'>Sign Up with Email</h5>
                <div className='register-input-container'>
                    <div className='enter-firstname image-with-input'>
                        <img src="/icons8-username-50.png" alt="Username Icon" />
                        <input type="text" placeholder='Enter Firstname*' name='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                    </div>
                    <div className='enter-lastname image-with-input' >
                        <img src="/icons8-username-50.png" alt="Username Icon"/>
                        <input type="text" placeholder='Enter Lastname*' name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                    </div>
                    <div className='enter-username image-with-input'>
                        <img src="/icons8-username-50.png" alt="Username Icon"/>
                        <input type="text" placeholder='Enter Username*' name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className='enter-email image-with-input'>
                        <img src='icons8-email-48.png' alt='Email Icon'/>
                        <input type="text" placeholder='Enter Email*' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='enter-mobile image-with-input'>
                        <img src="icons8-phone-50.png" alt="Mobile Icon" />
                        <input type="text" placeholder='Enter Mobile*' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                        <button>Verify OTP</button>
                    </div>
                    <div className='enter-password image-with-input'>
                        <img src="icons8-key-48.png" alt="Key Icon" />
                        <input type="text" placeholder='Enter Password*' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='enter-confirm-password image-with-input'>
                        <img src="icons8-key-48.png" alt="Key Icon" />
                        <input type="text" placeholder='Enter Confirm Password*' name='confirm_password' value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <h5 style={{textAlign: 'center'}}className='adress-details image-with-input'>Address Details </h5>
                    <div className='adress-details-number image-with-input'>
                        <img src="icons8-room-64.png" alt="Room Icon" />
                        <input type="text" placeholder='Enter Number* ' name='room' value={room} onChange={(e) => setRoom(e.target.value)}/>
                    </div>
                    <div className='adress-details-street image-with-input'>
                        <img src="icons8-street-60.png" alt="Street Icon" />
                        <input type="text" placeholder='Enter Street*' name='street' value={street} onChange={(e) => setStreet(e.target.value)} />
                    </div>
                    <div className='adress-details-city image-with-input'>
                        <img src="icons8-city-buildings-50.png" alt="" />
                        <input type="text" placeholder='Enter City*'name='city' value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className='adress-details-zipcode image-with-input'>
                        <img src="icons8-zip-codes-50.png" alt="" />
                        <input type="text" placeholder='Enter Zipcode*' name='zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
                    </div>
                </div>
                <input type="checkbox" className='terms-agree' id='terms-agreement-check' name='terms-check' />
                <label htmlFor="terms-check" style={{margin: '10px 0px'}}>I agree to the <span style={{color: "#0000FF"}}>terms and conditions</span></label>
                <button className='signup-btn'>Sign Up</button>

        </form>
        </div>

    </div>
    )

}

export default Register