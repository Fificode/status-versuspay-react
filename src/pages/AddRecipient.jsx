import React from 'react'

const AddRecipient = () => {
  return (
    <>
    <div className="md:ml-64">
       <div className='mt-6'>
      <h1 className='text-4xl font-[600] text-center'>Add Recipient</h1>
      <form >
      <div className="flex flex-col items-center  ">
<div className="flex flex-col w-full p-6">
  <label className="text-xl  font-[500] py-2" htmlFor='Name'>Name</label>
  <input type="name" name='Name' placeholder='Input Name' className='w-full visited:outline-bground-blue text-l px-5 py-3 border-1 border-solid rounded-2' />
  </div>
<div className="flex flex-col w-full p-6">
  <label className="text-xl  font-[500] py-2" htmlFor='Email address'>Email address</label>
  <input type="text" name='Email address' placeholder='Input email address' className='w-full outline-bground-blue text-l px-5 py-3 border-1 border-solid rounded-2 ' />
 
</div>

<div className="flex justify-center py-5 pb-20">
  <button className='text-l px-8 py-3  text-center bg-black text-white rounded-4'>Add Recipient</button>
</div>
      </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default AddRecipient