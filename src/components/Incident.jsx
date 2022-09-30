import React from 'react'

const Incident = ({postsToRender}) => {
  return (
    <div>
       
      {postsToRender.map((post, index) => (
        <div className="my-5" key={index}> 
    <h1 className="text-xl px-5 py-3">{post.date}</h1>
    <div className="flex justify-center px-5"><div className='border-b border-solid border-gray w-full  '></div></div>
    <p className='text-sm px-5 py-5'>{post.title}</p>
    </div>
      
      ))}
   
    </div>
  )
}

export default Incident