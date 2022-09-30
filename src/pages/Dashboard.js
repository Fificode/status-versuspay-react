import StatusCard from 'components/StatusCard';
import TableCard from 'components/TableCard';
import TitleHeading from 'components/TitleHeading';


export default function Dashboard() {
    return (
        <>
        <div className="md:ml-64">
            <div className="bg-bground-blue px-3 md:px-8 h-5" />
<div className="px-3 md:px-8 mt-10">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Incidents"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="purple"
                            icon="login"
                            title="Last Log in"
                            amount="Sep 23, 2022"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto">
                
                <div className="container mx-auto max-w-full">
                  <div className="mt-10 "><TitleHeading heading="Incident List"/></div> 
                    <div className="grid grid-cols-1 px-4 mb-16 ">
                        <TableCard />
                    </div>
                
                </div>
            </div>
            </div>
        </>
    );
}
