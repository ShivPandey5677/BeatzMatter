import React from 'react'
import FileUploader from '../shared/FileUploader'

const PostForm = () => {
  return (
    <div className="flex flex-col gap-9 w-full max-w-5xl">
      <form className="flex flex-col gap-9 w-full max-w-5xl">
        <div className="flex flex-col gap-5 w-full max-w-5xl">
       <label className="shad-form_label semi-bold">Caption</label>
       <textarea className="shad-textarea custom-scrollbar border-4 border-primary-500"/>
       </div>
       <div className="flex flex-col gap-5 w-full max-w-5xl">
       <label className="shad-form_label semi-bold">Add File</label>
       <FileUploader/>
       </div>
       <div className="flex flex-col gap-5 w-full max-w-5xl">
       <label className="shad-form_label semi-bold">Add Location</label>
       <input type="text" className="shad-input border-primary-500 rounded-md" />
       </div>
       <div className="flex flex-col gap-5 w-full max-w-5xl">
       <label className="shad-form_label ">Tags(seperated by coma ",")</label>
       <input type="text" className="shad-input border-primary-500 rounded-md" placeholder="Rock,Sufi,Rap"/>
       </div>
       <div className="flex gap-4 items-center justify-end">
        <input type="button" className="shad-button_dark_4" value="Cancel"/>
        <input type="Submit" className="shad-button_primary whitespace-nowrap" value="Submit"/>
       </div>
      </form>
    </div>
  )
}

export default PostForm
