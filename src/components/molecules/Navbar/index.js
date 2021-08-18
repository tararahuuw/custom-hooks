import React from 'react'
import "./navbar.scss"
import { useHistory } from 'react-router'

const Navbar = () => {
    const history = useHistory();
    return (
        <div className = 'navbar-wrapper'>
            <p className = "logo-mern">MERN Project</p>
            <p className = "logout" onClick = { () => history.push("/login")}>Logout</p>
        </div>
    )
}

export default Navbar
