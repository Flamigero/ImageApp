import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startLoad } from '../../actions/image';
import Navbar from '../ui/Navbar'
import Post from './Post';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const {images} = useSelector(state => state.image);

    useEffect(() => {
        dispatch(startLoad())
    }, [dispatch])
    
    return (
        <>
            <Navbar />
            <section className='home'>
                {images.map(image => (
                    <Post key={image.pk} path={image.photo} description={image.description} />
                ))}
            </section>
        </>
    )
}

export default HomeScreen