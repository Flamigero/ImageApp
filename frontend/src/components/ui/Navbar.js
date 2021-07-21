import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { logout } from '../../actions/auth';
import { imageClear } from '../../actions/image';

const Navbar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(imageClear());
    }

    return (
        <nav>
            <h1 className='title'>ImageApp</h1>
            <form></form>
            <ul>
                <li>
                    <Link to='/'><i className="fas fa-home"></i></Link>
                </li>
                <li>
                    <Link to='/profile'><i className="fas fa-user"></i></Link>
                </li>
                <li>
                    <i 
                        className="fas fa-sign-out-alt"
                        onClick={handleLogout}
                    ></i>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
