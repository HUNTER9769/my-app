import axios from 'axios'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'


 

export const login = (username, password, navigate) => { 
    return async (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password
            })

            console.log(response)
            const data = response.data
            if (response.status === 200) {
                dispatch({ type: LOGIN_SUCCESS, payload: data});
                navigate('/home')
            }
        } catch (error) {
                dispatch({ type: LOGIN_FAILURE, payload: error.message});
            }
        
        
        





    //     try {
    //         const response = await fetch('https://fakestoreapi.com/auth/login',{
    //             method:'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',  
    //             },
    //             body:JSON.stringify({
    //                 username: username,
    //                 password: password
    //             })
    //         })
    //             .then(res=>res.json())
    //             .then(json=>console.log(json));
            
    //         if (!response.ok) {
    //             throw new Error('Login Failed')
    //         }

    //         const data = await response.json();
    //         dispatch({ type: LOGIN_SUCCESS, payload: data});    
        
    //     } catch (error) {
    //         dispatch({ type: LOGIN_FAILURE, payload: error.message});

    //     }
    
    // }

        // const {data} = await axios.post('https://fakestoreapi.com/auth/login', document.querySelector('#login-form'), {
        //     headers: {
        //                 'Content-Type': 'application/json',  
        //             },
        //     body: JSON.stringify({
        //                 username: username,
        //                 password: password
        //     })

        // })





                // axios.post('https://fakestoreapi.com/auth/login',
        //     {
        //         username: username, 
        //         password: password
        //     }
        // )
        // .then(function (response) {
        //     const data = response.json();
        //     dispatch({ type: LOGIN_SUCCESS, payload: data});
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     dispatch({ type: LOGIN_FAILURE, payload: error.message});
        // })


        }
}

export const register = (email,firstname , lastname , username , mobile , password , confirm_password , room , street , city , zipcode , navigate) => {
    return async (dispatch) => {
        fullname = {
            firstname,
            lastname
        }

        fulladdr = {
            city,
            street,
            room,
            zipcode,
            geolocation:{
                lat:'-37.3159',
                long:'81.1496'
            }
        }
        dispatch({type: REGISTER_REQUEST});
        try {
            const response = await axios.post('https://fakestoreapi.com/users', {
                email,
                username,
                password,
                fullname,
                fulladdr,
                mobile
                
            })

            console.log(response)
            const data = response.data
            if (response.status === 200) {
                dispatch({ type: LOGIN_SUCCESS, payload: data});
                navigate('/home')
            }
        } catch (error) {
                dispatch({ type: LOGIN_FAILURE, payload: error.message});
            }
}
}