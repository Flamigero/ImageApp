import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoad } from '../../actions/image';
import Navbar from '../ui/Navbar'

const ProfileScreen = () => {
    const dispatch = useDispatch();
    const {uid, username, name} = useSelector(state => state.auth);
    const {images} = useSelector(state => state.image);

    useEffect(() => {
        dispatch(startLoad(uid));
    }, [dispatch, uid])

    return (
        <>
            <Navbar />
            <section className='profile'>
                <article>
                    <figure>
                        <img src="https://picsum.photos/id/237/200/300" alt="profile" />
                    </figure>

                    <div>
                        <h2>{username}</h2>
                        <h3>{name}</h3>
                        <h5>{images.length} posts</h5>
                        <p>
                            Proident esse culpa deserunt sunt nostrud duis. Ex ipsum nisi in duis Lorem cillum et enim sunt. 
                            Aute laboris veniam est aliquip fugiat dolore est laboris ad non ullamco id ad.
                        </p>
                    </div>
                </article>

                <article>
                    {
                        images.map(image => (
                            <figure key={image.pk}>
                                <img src={`http://localhost:8000${image.photo}`} alt="" />
                            </figure>
                        ))
                    }
                </article>
            </section>
        </>
    )
}

export default ProfileScreen
