import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {useDispatch} from 'react-redux'
import { startLogin } from '../../actions/auth'

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: 'carlos@carlos.com',
        password: 'carlos'
    });
    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(email, password))
    }

    return (
        <section className='login'>
            <article>
                <h1 className='title'>ImageApp</h1>

                <form onSubmit={handleLogin}>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleInputChange}
                    />
                    <input 
                        type='password' 
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={handleInputChange}
                    />

                    <input type='submit' value='Log in' />
                </form>  
            </article>

            <article>
                <p>
                    Don't have an account? 
                    <Link to="/auth/register"> Sign up</Link>
                </p>
            </article>
        </section>
    )
}

export default LoginScreen
