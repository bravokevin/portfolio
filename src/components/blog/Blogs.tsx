import React from 'react'
import BlogsItems from './BlogsItem'
import { data } from './Data'

const gql = async (query) => {
  const response = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  return response.json();
}

const Blogs = () => {
  return (
    <div className="blog__container container grid">
      {data.map((item) => {
        return <BlogsItems item={item} key={item.id} />
      })}
    </div>
  )
}

export default Blogs