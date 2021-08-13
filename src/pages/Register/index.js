import React from 'react'
import { ITBImage } from '../../assets'
import './register.scss'

const index = () => {
    return (
        <div className = "main-page">
            <div className = "left">
                <img src = {ITBImage} alt = "ITB" className = "bg-image"/>
            </div>
            <div className = "right">
                <p>Register</p>
            </div>
        </div>
    )
}

export default index
