import React from 'react'
import { ITBImage } from '../../../assets'
import "./blog.scss"
const Blog = () => {
    return (
        <div className = "blog-item">
            <img src = {ITBImage} className = "image-thumbnail"/>

            <div className ="content-detail">
                <p className = "title">Title Blog</p>
                <p className = "author">Author - Date Post</p>
                <p className = "body">Lorem ipsum</p>
            </div>
        </div>
    )
}

export default Blog
