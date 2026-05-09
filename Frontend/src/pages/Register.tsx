import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../services/api'
import '../styles/Auth.css'

function Register() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e: any) => {

        e.preventDefault()

        try {

            await API.post(
                'auth/register/',
                {
                    username,
                    email,
                    password
                }
            )

            alert('Registration successful')

            navigate('/login')

        } catch {

            alert('Registration failed')
        }
    }

    return (

        <div className="auth-container">

            <form
                className="auth-card"
                onSubmit={handleRegister}
            >

                <h1>TaskFlow</h1>

                <h2>Create Account</h2>

                <p>
                    Start managing your tasks smarter
                </p>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    Register
                </button>

                <span>
                    Already have an account?
                    <Link to="/login">
                        Login
                    </Link>
                </span>

            </form>

        </div>
    )
}

export default Register