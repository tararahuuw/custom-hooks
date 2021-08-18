import React from 'react'
import { ITBImage } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import '../Register/register.scss'
import { useHistory } from 'react-router'
const Login = () => {
    const history = useHistory()
    return (
        <div className = "main-page">
            <div className = "left">
                <img src = {ITBImage} alt = "ITB" className = "bg-image"/>
            </div>
            <div className = "right">
                <p className = "judul">Login</p>
                <Input label = "Email" placeholder = "Email"/>
                <Gap height = {20}/>
                <Input label = "Password" placeholder = "Password"/>
                <Gap height = {40}/>
                <Button title = "Login" onClick = {()=> history.push('/')}/>
                <Gap height = {20}/>
                <Button title = "Register" onClick = {()=> history.push('/register')}/>
                <Gap height = {60}/>
                <Link title = "Back to Homepage" onClick = {()=> history.push('/')}/>
            </div>
        </div>
    )
}

export default Login