import React from 'react'
import {Link} from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <section className='login'>
            <article>
                <h1 className='title'>ImageApp</h1>

                <p>Sign up to see photos and videos from your friends</p>

                <form>
                    <input type='email' name='email' placeholder='Email'/>
                    <input type='text' name='fullname' placeholder='Full Name'/>
                    <input type='text' name='username' placeholder='Username'/>
                    <input type='password' name='password' placeholder='Password'/>

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