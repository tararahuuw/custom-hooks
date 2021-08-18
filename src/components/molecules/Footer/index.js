import React from 'react'
import { Github, Instagram, Mern, Gmail } from '../../../assets'
import "./footer.scss"

const Icon = ({img}) => {
    return (
        <div className = "icon-wrapper">
            <img className = "icon-medsos" src = {img} alt = "icon" />
        </div>
    )
}
const Footer = () => {
    return (
        <div>
           <div className = "footer">
                <div>
                    <img src = {Mern} alt = "photo" className = "image-wrapper"/>
                </div>
                <div className = 'CR'>
                    <p>Copyright @Muhammad Fahmi Alamsyah</p>
                </div>
                <div className = "social-wrapper">
                    <Icon img = {Gmail} />
                    <Icon img = {Github} />
                    <Icon img = {Instagram} />
                </div>
            </div>
        </div>
    )
}

export default Footer
