import React from 'react'
import { Link } from 'react-router-dom'
import PostStats from './PostStats'

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
            <Link to={`/profile/id`}>
                <img src="/assets/images/profile-placeholder.svg" alt="creator" />
            </Link>
            <div className="flex flex-col">
                <p className="base-medium lg:body-bold text-primary-600">Creator</p>
                <div className="flex-center gap-2 text-primary-500">
                    <p className="subtle-semibold lg:small-regular">Created At</p>
                    -
                    <p className="subtle-semibold lg:small-regular">location</p>
                </div>
            </div>
        </div>
        <Link to={`/update-post/postid`} className={''}>
            <img src="/assets/images/edit.svg" alt="edit" width={20} height={20}/>
        </Link>
      </div>
      <Link to={`/posts/id`}>
        <div className="small-medium lg:base-medium py-5 text-primary-600">
            <p>Caption</p>
            <ul className="flex gap-1 mt-2">
            <li className=" text-primary-500">#tag</li>
            </ul>
        </div>
        <img src="/assets/images/profile-placeholder.svg" alt="" className="post-card_img"/>
      </Link>
      <PostStats/>
    </div>
  )
}

export default PostCard
