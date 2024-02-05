import React from 'react'
import { Link } from 'react-router-dom'
import PostStats from './PostStats'
import moment from "moment";
const PostCard = () => {
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
            <Link to={'user-id'}>
                <img src="/assets/images/profile-placeholder.svg" alt="creator" />
            </Link>
            <div className="flex flex-col">
                <p className="base-medium lg:body-bold text-dark">John Doe</p>
                <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular">02/05/2005</p>
                    -
                    <p className="subtle-semibold lg:small-regular">Sector 5 ,Rohini ,Delhi </p>
                </div>
            </div>
        </div>
        <Link to={`/update-post/postid`} className={''}>
            <img src="/assets/images/edit.svg" alt="edit" width={20} height={20}/>
        </Link>
      </div>
        <div className="small-medium lg:base-medium py-5 text-primary-600">
            <p>We Serve Best</p>
            <ul className="flex gap-1 mt-2">
            <li className=" text-primary-500">Tags</li>
            </ul>
        </div>
        <img src="/assets/images/_4fdadfe4-ea0a-4d7e-8335-d59039a6a0b0.jpeg" alt="" className="post-card_img"/>
      <PostStats/>
    </div>
  )
}

export default PostCard
