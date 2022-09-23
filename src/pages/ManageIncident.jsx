import React from 'react'
import ManageCard from 'components/ManageCard';
import TitleHeading from 'components/TitleHeading';


const ManageIncident = () => {
  return (
  <>
      <div className="md:ml-64">
            <div className="px-3 md:px-8 h-auto mt-[60px]">
                <div className="container mx-auto max-w-full">
                  <TitleHeading heading="Edit Incident"/>
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <ManageCard />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
 

export default ManageIncident