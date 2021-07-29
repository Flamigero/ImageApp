import React from 'react'

const Post = ({path, description, user}) => {
    return (
        <article>
            <div>{user.username}</div>
            <figure>
                <img src={`http://localhost:8000${path}`} alt="" />
            </figure>
            <ul>
                <li>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-comment"></i>
                </li>
                <li>
                    <p><strong>{user.username}</strong> {description}</p>
                </li>
            </ul>
        </article>
    )
}

export default Post
