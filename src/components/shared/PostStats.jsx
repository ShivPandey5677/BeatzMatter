import React from 'react'

const PostStats = () => {
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img src="/assets/images/like.svg" alt="like" width={20} height={20} onClick={()=>{}} className="cursor-pointer"/>
        <p className="small-medium lg:base-medium">0</p>
      </div>
      <div className="flex gap-2 mr-5">
        <img src="/assets/images/save.svg" alt="save" width={20} height={20} onClick={()=>{}} className="cursor-pointer"/>
        <p className="small-medium lg:base-medium">0</p>
      </div>
    </div>
  )
}

export default PostStats
