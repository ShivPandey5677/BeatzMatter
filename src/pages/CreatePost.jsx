import React from 'react'
import PostForm from '../components/forms/PostForm'
import PostAddIcon from '@mui/icons-material/PostAdd';


const CreatePost = () => {
  return (
    <div className="flex flex-1 bg-primary-500">
      <div className="common-container bg-primary-500">
     <div className="max-w-5xl flex-start gap-3 justify-start w-full bg-primary-500">
      <PostAddIcon width ={36} height ={36}></PostAddIcon>
      <h2 className="h3-bold md:h2-bold text-left w-full bg-primary-500">Add Product</h2>
     </div>
     <PostForm/>
      </div>
      
    </div>
  )
}

export default CreatePost
