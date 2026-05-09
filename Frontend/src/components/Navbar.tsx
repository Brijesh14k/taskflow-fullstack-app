import { useNavigate } from 'react-router-dom'

import '../styles/Navbar.css'


function Navbar() {

    const navigate = useNavigate()

    const username =
        localStorage.getItem('username')


    const handleLogout = () => {

        localStorage.clear()

        navigate('/login')
    }


    return (

        <nav className="navbar">

            <div className="logo">

                TaskFlow
            </div>

            <div className="nav-right">

                <span>

                    Welcome, {username}

                </span>

                <button
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>
    )
}

export default Navbar