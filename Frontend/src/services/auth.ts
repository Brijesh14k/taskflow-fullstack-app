import API from './api'

export const registerUser = async (
    username: string,
    email: string,
    password: string
) => {

    return API.post(
        'auth/register/',
        {
            username,
            email,
            password
        }
    )
}

export const loginUser = async (
    username: string,
    password: string
) => {

    return API.post(
        'auth/login/',
        {
            username,
            password
        }
    )
}