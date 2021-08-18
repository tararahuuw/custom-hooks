import React from 'react'
import { ITBImage } from '../../assets'
import { Gap, Link } from '../../components'
import "./detailblog.scss"
import { useHistory } from 'react-router'

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className = "detail-blog-wrapper">
            <img className = "thumbnail" src = {ITBImage} />
            <p className = "blog-title">Title Blog</p>
            <p className = "blog-author">Author - Date</p>
            <p className = "blog-body">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            <Gap height = {20} />
            <Link title = "Back to Home" onClick = {()=> history.push('/')}/>
        </div>
    )
}

export default DetailBlog
