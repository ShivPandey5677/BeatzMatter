import React from 'react'
import { Link } from 'react-router-dom'
import PostStats from './PostStats'
import moment from "moment";
const PostCard = ({post}) => {
  console.log(post.name)
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
            <Link to={`/profile/${post.userid}`}>
                <img src="/assets/images/profile-placeholder.svg" alt="creator" />
            </Link>
            <div className="flex flex-col">
                <p className="base-medium lg:body-bold text-dark">{post.name}</p>
                <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular">{moment(post.createdon).fromNow()}</p>
                    -
                    <p className="subtle-semibold lg:small-regular">{post.location}</p>
                </div>
            </div>
        </div>
        <Link to={`/update-post/postid`} className={''}>
            <img src="/assets/images/edit.svg" alt="edit" width={20} height={20}/>
        </Link>
      </div>
        <div className="small-medium lg:base-medium py-5 text-primary-600">
            <p>{post.caption}</p>
            <ul className="flex gap-1 mt-2">
            <li className=" text-primary-500">{post.tags}</li>
            </ul>
        </div>
        <img src="/assets/images/profile-placeholder.svg" alt="" className="post-card_img"/>
      <PostStats/>
    </div>
  )
}

export default PostCard
