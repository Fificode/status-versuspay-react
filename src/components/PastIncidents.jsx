import React, {useState, useEffect} from 'react'
import Incident from './Incident'
import {incidentHistory} from '../utilities/IncidentHistory'

const PastIncidents = () => {
  const postsPerPage = 3;

  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);
 
const loopWithSlice = (start, end) => {
    let arrayForHoldingPosts = [];
    const slicedPosts = incidentHistory.slice(start, end);
    arrayForHoldingPosts = [...postsToShow, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };
      
   useEffect(() => {
    loopWithSlice(0, postsPerPage);
  },[]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  return (
    <>
<h1 className='text-3xl mx-5 mt-3 mb-2'>Past Incidents</h1>
 <Incident postsToRender={postsToShow} />
 <div className="flex justify-end">
  <div>
      <button onClick={handleShowMorePosts} className="px-3 py-2 bg-bground-blue rounded-sm text-white  outline-none mx-5 my-2">Load more</button>
      </div>
      </div>
</>
  )
}

export default PastIncidents