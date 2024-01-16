import React from 'react'
import Loader from '../../components/shared/Loader';
import PostCard from '../../components/shared/PostCard';

const Home = () => {
  const isPostLoading=false;
  const posts='a';
  return (
    <div className="flex flex-1 w-full bg-primary-500">
      <div className="home-container w-full">
        <div className="home-posts w-full">
          <h2 className="h3-bold md:h2-bold text-left w-full text-light-1">Home Feeds</h2>
  {isPostLoading && !posts ?(
    <Loader/>
  ):(
    <ul className="flex flex-col flex-1 gap-9 w-full">
     <PostCard />
    </ul>
  )}
        </div>
      </div>
    </div>
  )
}

export default Home
