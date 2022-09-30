import React, {useState} from 'react'
import Status from '../components/Status'
import PastIncidents from '../components/PastIncidents'
import logo from '../assets/img/versuspaylogo.svg'

const Report = () => {
     const [pastIncidents, setPastIncidents] = useState(false);
     const [showButton, setShowButton] = useState(true);
  const viewPastIncidents = () => {
    setPastIncidents(true);
    setShowButton(false);
  }
  return (
    <>
<div className="">
      <div className="bg-bground-blue h-40 shadow-md flex flex-row justify-center">
            <img src={logo} alt="Versus pay logo" className='w-40 h-40 p-3' />
        </div>
        <div className="px-4">
        <div className="flex justify-center mt-5">
        <div className="bg-bground-green w-full rounded flex justify-start items-center">
            <div className="flex flex-row">
           <div className="flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
</div> 
<h1 className='text-white font-[400] text-sm md:text-xl p-4'>All Systems Operational</h1>
</div>
        </div>
        </div>
        <div className="mt-12 ml-2 mb-3 md:mt-6 md:ml-4 md:mb-3">
            <h2 className='text-black font-[400] text-xl md:text-2xl'>
                Current Status
            </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap  mb-10">
          <Status title="High-Performance Edge Network" status="Normal" />
          <Status title="Standard Edge Network" status="Normal"/>
          <Status title="Versuspay Application UI" status="Normal"/>
          <Status title="Packages" status="Normal"/>
          <Status title="API Request" status="Normal"/>
          <Status title="Issues" status="Normal"/>
          <Status title="Actions" status="Normal"/>
          <Status title="Third Party Services" status="Normal"/>
          </div>
        </div>
      <div className="flex justify-end">
        <div>
      {showButton && <button className='px-3 py-2 bg-bground-blue rounded-sm text-white  outline-none border-none mx-5 my-2 mb-5' onClick={viewPastIncidents}>View Incident History</button>}
       </div>
      </div>
        <div className="">
        { pastIncidents ?  <PastIncidents/> : <div></div>}
        </div>
</div>
    </>
  )
}

export default Report