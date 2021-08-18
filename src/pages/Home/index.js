import React from 'react'
import {Button, Gap} from "../../components"
import Blog from '../../components/molecules/Blog'
import "./home.scss"
import {useHistory} from "react-router-dom"

const Home = () => {
    const history = useHistory();
    return (
        <div className = "homepage-wrapper">
            <div className = "create-wrapper">
                <Button title = "Create Blog" onClick = {() => history.push("/create-blog")}/>
            </div>

            <Gap height = {20} />
            <div className = "content-wrapper">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
            <div className = "pagination">
                <Button title = "previous"/>
                <Gap width = {40} />
                <Button title = "next"/>
            </div>
            <Gap height = {20} />
        </div>
    )
}

export default Home
