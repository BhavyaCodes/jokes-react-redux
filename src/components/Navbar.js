import React from 'react'
import logo from '../images/logo512.png'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><img className="nav-logo" alt={logo} src={logo}/></a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Jokes<span className="sr-only">(current)</span></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar