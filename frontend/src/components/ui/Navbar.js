import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h1 className='title'>ImageApp</h1>
            <form></form>
            <ul>
                <li>
                    <Link to='/'><i className="fas fa-home"></i></Link>
                </li>
                <li>
                    <Link to='/'><i className="fas fa-user"></i></Link>
                </li>
                <li>
                    <i className="fas fa-sign-out-alt"></i>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
