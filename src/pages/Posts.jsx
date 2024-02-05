import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../axios';
import PostCard from '../components/shared/PostCard';

const Posts = () => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: ["posts"],
      queryFn: () => makeRequest.get("/posts").then((res) => {
        return res.data;
      })
    }
  )

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      {data.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
}

export default Posts
