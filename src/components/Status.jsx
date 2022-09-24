import React from 'react'

const Status = ({title, status}) => {
  return (
    <>
    <div className='border border-solid border-gray  w-full lg:w-1/2 rounded-l my-1 lg:mx-1'>
       <div className="flex justify-between px-2 py-2">
        <div className="flex flex-col mx-1">
        <div className="flex flex-row ">
         <h1 className='pl-1 text-sm font-[500]'>{title}</h1>
         <div className="md:pl-2 pr-3 md:pr-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className=" w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>
</div>
</div>
 <p className='px-1 pt-1 text-sm font-[400]'>{status}</p>
</div>
 <div className="flex flex-col items-center pt-3">
      <div className="flex flex-row justify-center items-center bg-bground-green rounded-2xl border border-white w-7 h-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
</div> 
 </div>

</div>
       
         </div>
    </>
  )
}

export default Status