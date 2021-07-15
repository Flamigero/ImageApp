import React from 'react'
import Navbar from '../ui/Navbar'

const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <section className='home'>
                <article>
                    <div>Username</div>
                    <figure>
                        <img src="" alt=""/>
                    </figure>
                    <ul>
                        <li>
                            <i className="fas fa-heart"></i>
                            <i className="fas fa-comment"></i>
                        </li>
                        <li>
                            <p><strong>User</strong> Comment</p>
                        </li>
                    </ul>
                </article>

                <article>
                    <div>Username</div>
                    <figure>
                        <img src="" alt=""/>
                    </figure>
                    <ul>
                        <li>
                            <i className="fas fa-heart"></i>
                            <i className="fas fa-comment"></i>
                        </li>
                        <li>
                            <p><strong>User</strong> Comment</p>
                        </li>
                    </ul>
                </article>
            </section>
        </>
    )
}

export default HomeScreen