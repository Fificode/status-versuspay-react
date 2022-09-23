import React from 'react'
import TitleHeading from 'components/TitleHeading';
import ManageRecipient from 'components/ManageRecipient';

const ManageRecipients = () => {
  return (
     <div className="md:ml-64">    

            <div className="px-3 md:px-8 h-auto mt-[60px]">
                <div className="container mx-auto max-w-full">
                    <TitleHeading heading="Edit Recipients" />
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <ManageRecipient />
                    </div>
                </div>
            </div>
            </div>
  )
}

export default ManageRecipients