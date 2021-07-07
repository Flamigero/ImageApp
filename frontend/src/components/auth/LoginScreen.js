import React from 'react'
import {Link} from 'react-router-dom'

const LoginScreen = () => {
    return (
        <section className='login'>
            <article>
                <h1 className='title'>ImageApp</h1>

                <form>
                    <input type='email' name='email' placeholder='Email'/>
                    <input type='password' name='password' placeholder='Password'/>

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
