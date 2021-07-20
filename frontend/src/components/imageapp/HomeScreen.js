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
                        <img src="https://picsum.photos/id/768/500/500" alt="" />
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
                        <img src="https://picsum.photos/id/546/500/500" alt="" />
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