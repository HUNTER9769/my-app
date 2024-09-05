import axios from 'axios'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER = 'REGISTER'


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