import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startRegister } from '../../actions/auth'

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: 'bozhena@bozhena.com',
        fullname: 'Bozhena Stefanova',
        username: 'bozhena',
        password: 'bozhena',
        password2: 'bozhena'
    });
    const {email, fullname, username, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(startRegister(fullname, username, email, password, password2))
    }

    return (
        <section className='login'>
            <article>
                <h1 className='title'>ImageApp</h1>

                <p>Sign up to see photos and videos from your friends</p>

                <form onSubmit={handleRegister}>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email'
                        value={email}
                        onChange={handleInputChange}
                    />
                    <input 
                        type='text' 
                        name='fullname' 
                        placeholder='Full Name'
                        value={fullname}
                        onChange={handleInputChange}
                    />
                    <input 
                        type='text' 
                        name='username' 
                        placeholder='Username'
                        value={username}
                        onChange={handleInputChange}
                    />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password'
                        value={password}
                        onChange={handleInputChange}
                    />
                    <input 
                        type='password' 
                        name='password2' 
                        placeholder='Repite password'
                        value={password2}
                        onChange={handleInputChange}
                    />

                    <input type='submit' value='Register' />
                </form>  
            </article>

            <article>
                <p>
                    Have an account? 
                    <Link to="/auth/login"> Log in</Link>
                </p>
            </article>
        </section>
    )
}

export default RegisterScreen