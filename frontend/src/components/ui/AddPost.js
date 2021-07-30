import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../actions/ui';

const AddPost = () => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(openModal());
    }
    
    return (
        <button 
            className='addPost'
            onClick={handleAdd}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}

export default AddPost