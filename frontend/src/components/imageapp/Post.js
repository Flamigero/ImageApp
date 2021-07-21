import React from 'react'

const Post = ({path, description}) => {
    return (
        <article>
            <div>Username</div>
            <figure>
                <img src={path} alt="" />
            </figure>
            <ul>
                <li>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-comment"></i>
                </li>
                <li>
                    <p><strong>User</strong> {description}</p>
                </li>
            </ul>
        </article>
    )
}

export default Post
