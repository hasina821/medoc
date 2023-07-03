import { useState } from 'react';
import { FaCloudDownloadAlt, FaEdit  } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GoEye } from "react-icons/go";
import { isDateFuture } from '../../../Core/FonctionDate';

const Text = `text-sm text-left leading-6 whitespace-nowrap px-5 py-3`
const TextDanger = `text-sm text-left leading-6 whitespace-nowrap px-5 py-3 text-red-700 font-bold`

const RowsStock = (medoc:any,i:any,admin:any)=>{
    return(
        <tr key={i}>
            <td className={`${Text}`}>
                <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                <img
                    className='h-full w-full  object-cover'
                    src={`/assets/img/${medoc.image}`}
                    alt="movie"
                />
                </div>
            </td>
            <td className={`${Text} truncate`}>{medoc.nom}</td>
            <td className={`${Text}`}>{medoc.category}</td>
            <td className={`${Text}`}>{medoc.rayon}</td>
            <td className={`${Text}`}>{medoc.prix}</td>
            <td className={`${Text}`}>{medoc.dispo}</td>
            <td className={`${isDateFuture(medoc.date_pere)  ? Text : TextDanger}`}>{medoc.date_pere}</td>
            <td className={`${Text}`}>{medoc.unite}</td>
            <td className={`${Text} float-right flex items-center gap-2`}>
                {admin ? (
                    <>
                        <button className='border border-border bg-dry  flex items-center gap-2 text-white rounded py-1 px-2 w-8 h-8'>
                            <FaEdit className='text-green-500 '/>
                        </button>
                        <button className='bg-red-700 text-white rounded flex-colo w-8 h-8'>
                            <MdDelete className='mx-auto'/>
                        </button>
                    </>
                ):(

                    <>
                        <button className='border border-border bg-dry flex-rows gap-2 text-white rounded py-1 px-2'>
                            Download <FaCloudDownloadAlt className='text-green-500'/>
                        </button>
                        <Link to={`/movies/${medoc?.name}`}>
                            <button className='bg-subMain text-white rounded flex-colo w-6 h-6'>
                                <GoEye/>
                            </button>
                        </Link>
                    </>
                )
                }
            </td>
        </tr>
    )
}


export default RowsStock