import React from 'react'
import Icon from '@material-tailwind/react/Icon';


const EditRecipient = ({name, date, email }) => {
  return (
    <>
    <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                   {date}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {name}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{email}
                                    
                                </th>
                                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 pl-7 py-4 text-left">
                                   <button> <Icon name="edit" size="2xl" /></button>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                   <button> <Icon name="delete" size="2xl" /></button>
                                </th>
                                </tr>
    </>
  )
}

export default EditRecipient