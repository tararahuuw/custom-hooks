import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Home, CreateBlog, DetailBlog} from '..'
import { Navbar, Footer } from '../../components'
import "./mainPage.scss"
const index = () => {
    return (
        <div className = "main-wrapper">
            <Navbar />
            <div className = "content-wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route path = "/create-blog">
                            <CreateBlog />
                        </Route>
                        <Route path = "/detail-blog">
                            <DetailBlog />
                        </Route>
                        <Route path = "/">
                            <Home />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    )
}

export default index