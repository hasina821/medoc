import React from 'react'
import { FaCloudDownloadAlt, FaEdit  } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

function TableCommand() {
  const Text = `text-sm text-left leading-6 whitespace-nowrap px-5 py-3`
  return (
    <div>
        <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nom
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Prix unitaire
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fournisseur
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[1,2].map((medoc)=>(
                        <tr className="bg-white border-b hover:bg-gray-50 text-subMain">
                            <td className="w-32 p-4">
                                <img src="https://www.francetvinfo.fr/pictures/hpk6WegzNtsGkuKIcVPFTv5K0OE/752x423/2022/11/23/phpj4R5Fx.jpg"/>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                Apple Watch
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                24-04-2000
                            </td>
                            <td className="px-6 py-4">
                                8
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                $599
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                PHARMALAGASY
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                En cours
                            </td>
                            <td className={`${Text} flex items-center gap-2`}>
                                <>
                                    <button className='border border-border bg-dry  flex items-center gap-2 text-white rounded py-1 px-2 w-8 h-8'>
                                        <FaEdit className='text-green-500 '/>
                                    </button>
                                    <button className='bg-red-700 text-white rounded flex-colo w-8 h-8'>
                                        <MdDelete className='mx-auto'/>
                                    </button>
                                </>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default TableCommand