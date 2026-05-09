import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { loginUser } from '../services/auth'

import '../styles/Auth.css'


function Login() {

    const navigate = useNavigate()

    const [username, setUsername] =
        useState('')

    const [password, setPassword] =
        useState('')


    const handleLogin = async (
        e: React.FormEvent
    ) => {

        e.preventDefault()

        try {

            const response =
                await loginUser(
                    username,
                    password
                )

            localStorage.setItem(
                'access',
                response.data.access
            )

            localStorage.setItem(
                'refresh',
                response.data.refresh
            )

            localStorage.setItem(
                'username',
                username
            )

            navigate('/')

        } catch {

            alert('Invalid credentials')
        }
    }


    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1>Login</h1>

                <form onSubmit={handleLogin}>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <div className="auth-link">

                    Don't have account?

                    <Link to="/register">
                        Register
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default Login