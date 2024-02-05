import React,{ useCallback, useState } from "react";
import {  useDropzone } from "react-dropzone";


const FileUploader = () => {
    const[fileUrl,setFileUrl]=useState('')
    const [file,setFile]=useState([]);
    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles)
      }, [])
      const {getRootProps, getInputProps} = useDropzone({onDrop})
  return (
    <div {...getRootProps()} className="flex flex-center flex-col bg-primary-500 border-4 border-white rounded-xl cursor-pointer">
    <input {...getInputProps()} className="cursor-pointer"/>
    {
      fileUrl ?(
        <>
        <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
          <img src={fileUrl} alt="file" className="file_uploader-img"/>
        </div>
        <p className="file_uploader-label">Click or drag photo to replace</p>
        </>
      ):(
        <div className="file_uploader-box">
           <img src="/assets/images/file-upload.svg" alt="file-upload" width={96} height={77}/>
           <h3 className="base-medium text-light-2 mb-2 mt-6"></h3>
           <p className="text-white small-regular mb-6">.mp3,.wav</p>
            <input className="shad-button-dark_4 text-dark border rounded item-center" value="Select from Computer"/>        
        </div>
      )
        
    }
  </div>
  )
}

export default FileUploader
