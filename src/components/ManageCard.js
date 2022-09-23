import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import EditIncident from './EditIncident';


export default function ManageCard() {
    return (
        <Card>
           
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Date
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                   Incident
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Status
                                </th>
                               
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Completion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <EditIncident incident="No incidents" date="23rd, September 2022" status="No issue" color="green" number={100} />
                            <EditIncident incident="No incidents" date="22nd, September 2022" status="No issue" color="green" number={100} />
                            <EditIncident incident="No incidents" date="21st, September 2022" status="No issue" color="green" number={100} />
                            <EditIncident incident="No incidents" date="20th, September 2022" status="No issue" color="green" number={100} />
                            <EditIncident incident="One incident" date="19th, September 2022" status="Unresolved Issue" color="red" number={10} />
                            </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
