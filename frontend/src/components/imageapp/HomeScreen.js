import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { imageLoad } from '../../actions/image';
import Navbar from '../ui/Navbar'
import Post from './Post';

const imagesTemp = [
    {
        id: 123,
        user_id: 123,
        photo: 'https://picsum.photos/id/768/500/500',
        description: 'description'
    },
    {
        id: 456,
        user_id: 123,
        photo: 'https://picsum.photos/id/546/500/500',
        description: 'description'
    }
]

const HomeScreen = () => {
    const dispatch = useDispatch();
    const {images} = useSelector(state => state.image);

    useEffect(() => {
        dispatch(imageLoad(imagesTemp));
    }, [dispatch])
    
    return (
        <>
            <Navbar />
            <section className='home'>
                {images.map(image => (
                    <Post key={image.id} path={image.photo} description={image.description} />
                ))}
            </section>
        </>
    )
}

export default HomeScreen