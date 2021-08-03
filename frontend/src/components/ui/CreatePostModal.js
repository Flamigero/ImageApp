import React from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import { startAdd } from '../../actions/image';
import { closeModal } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const CreatePostModal = () => {
    const dispatch = useDispatch();
    const {uid} = useSelector(state => state.auth);
    const {modal} = useSelector(state => state.ui);
    const [formValues, handleInputChange, reset, handleInputChangeFile] = useForm({
        description: ''
    });
    const {photo, description} = formValues;

    const closeModalRequest = () => {
        dispatch(closeModal())
    }

    const openAfterOpen = () => {
        reset();
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(startAdd(uid, photo, description));
        dispatch(closeModal());
    }
    
    return (
        <Modal
            isOpen={modal}
            onRequestClose={closeModalRequest}
            onAfterOpen={openAfterOpen}
            style={customStyles}
            closeTimeoutMS={200}
        >
            <form onSubmit={handleSubmit} className="newPost">
                <h3>New Post</h3>

                <label htmlFor="photo">
                    <i className="far fa-images"></i>
                    Image
                </label>
                <input 
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/png, image/jpeg"
                    onChange={handleInputChangeFile}
                    required
                />

                <label htmlFor="description">
                    <i className="fas fa-paragraph"></i>
                    Description
                </label>
                <input 
                    type="text"
                    id="description"
                    name="description"
                    onChange={handleInputChange}
                    value={description}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default CreatePostModal