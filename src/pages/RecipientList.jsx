import React from 'react';
import TableCard from 'components/TableCard';


export default function Dashboard() {
    return (
        <>
       <div className="md:ml-64">    

            <div className="px-3 md:px-8 h-auto mt-[60px]">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <TableCard />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
