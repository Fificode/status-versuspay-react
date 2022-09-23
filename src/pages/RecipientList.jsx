import React from 'react';
import RecipientCard from 'components/RecipientCard';
import TitleHeading from 'components/TitleHeading';


export default function RecipientList() {
    return (
        <>
       <div className="md:ml-64">    

            <div className="px-3 md:px-8 h-auto mt-[60px]">
                <div className="container mx-auto max-w-full">
                    <TitleHeading heading="Recipient List" />
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <RecipientCard />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
