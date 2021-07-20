import React from 'react'
import Navbar from '../ui/Navbar'

const ProfileScreen = () => {
    return (
        <>
            <Navbar />
            <section className='profile'>
                <article>
                    <figure>
                        <img src="https://picsum.photos/id/237/200/300" alt="profile" />
                    </figure>

                    <div>
                        <h2>Username</h2>
                        <h3>Name Surname</h3>
                        <h5>2 posts</h5>
                        <p>
                            Proident esse culpa deserunt sunt nostrud duis. Ex ipsum nisi in duis Lorem cillum et enim sunt. 
                            Aute laboris veniam est aliquip fugiat dolore est laboris ad non ullamco id ad.
                        </p>
                    </div>
                </article>

                <article>
                    <figure>
                        <img src="https://picsum.photos/id/1/200/200" alt="" />
                    </figure>

                    <figure>
                        <img src="https://picsum.photos/id/2/200/200" alt="" />
                    </figure>

                    <figure>
                        <img src="https://picsum.photos/id/3/200/200" alt="" />
                    </figure>

                    <figure>
                        <img src="https://picsum.photos/id/4/200/200" alt="" />
                    </figure>
                </article>
            </section>
        </>
    )
}

export default ProfileScreen
