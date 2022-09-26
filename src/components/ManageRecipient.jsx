import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import EditRecipient from './EditRecipient';

export default function ManageRecipient() {
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
                                    Name
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Email address
                                </th>
                                <th className="px-2  border-b border-solid border-gray-200 py-3 ">
                                   
                                </th>
                                <th className="px-2  border-b border-solid border-gray-200 py-3 ">
                                   
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                             <EditRecipient date="23rd, September 2022" name="Feyi Alabi" email="hbhcbjs@gmail.com" />
                             <EditRecipient date="22nd, September 2022" name="Ola Toba" email="oooohh@gmail.com"/>
                             <EditRecipient date="21st, September 2022" name="Tobi Adeola" email="ffff@gmail.com"/>
                             <EditRecipient date="20th, September 2022" name="Uche Njoku" email="ggg@gmail.com" />
                             <EditRecipient date="19th, September 2022" name="Tife Adewale" email="gddd@gmail.com" />
                            
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
