import React from 'react'
import { Input, Upload, Button, TextArea, Gap } from '../../components'
import "./create-blog.scss"
import { useHistory } from 'react-router'

const CreateBlog = () => {
    const history = useHistory()
    return (
        <div className = "blogpost">
            <Gap height = {20} />
            <p className = "title">Create New Blog Post</p>
            <Gap height = {20} />
            <Input label = "Post Title"/>
            <Upload />
            <TextArea />
            <Gap height = {20} />
            <div className = "button-save">
                <Button title = "Cancel" onClick = {()=> history.push('/')}/>
                <Gap width = {40} />
                <Button title = "Save" onClick = {()=> history.push('/detail-blog')}/>
            </div>
        </div>
    )
}

export default CreateBlog
