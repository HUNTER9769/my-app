export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

export const login = (user) => ({
    type : LOGIN,
    payload: user,
})

export const register = (user) => ({
    type : REGISTER,
    payload : user
})