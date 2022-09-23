import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import ViewRecipient from './ViewRecipient';

export default function RecipientCard() {
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
                            </tr>
                        </thead>
                        <tbody>
                             <ViewRecipient date="23rd, September 2022" name="Feyi Alabi" email="hbhcbjs@gmail.com" />
                             <ViewRecipient date="22nd, September 2022" name="Ola Toba" email="oooohh@gmail.com"/>
                             <ViewRecipient date="21st, September 2022" name="Tobi Adeola" email="ffff@gmail.com"/>
                             <ViewRecipient date="20th, September 2022" name="Uche Njoku" email="ggg@gmail.com" />
                             <ViewRecipient date="19th, September 2022" name="Tife Adewale" email="gddd@gmail.com" />
                            
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
