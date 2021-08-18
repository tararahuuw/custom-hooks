import React from 'react'
import { ITBImage } from '../../../assets'
import './upload.scss'

const Upload = () => {
    return (
        <div className = "upload">
            <div className = "preview">
                <img src = {ITBImage} />
            </div>
            <input type = "file"/>
        </div>
    )
}

export default Upload
