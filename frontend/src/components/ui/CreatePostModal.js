import React from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../actions/ui';

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
    const {modal} = useSelector(state => state.ui)

    const closeModalRequest = () => {
        dispatch(closeModal())
    }

    const handleSubmit = e => {
        e.preventDefault();
    }
    
    return (
        <Modal
            isOpen={modal}
            onRequestClose={closeModalRequest}
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
                />

                <label htmlFor="description">
                    <i className="fas fa-paragraph"></i>
                    Description
                </label>
                <input 
                    type="text"
                    id="description"
                    name="description"
                />

                <button type="submit">Submit</button>
            </form>
        </Modal>
    )
}

export default CreatePostModal