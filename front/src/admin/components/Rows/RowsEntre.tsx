import { useState } from 'react';
import { FaCloudDownloadAlt, FaEdit  } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GoEye } from "react-icons/go";
import UpdateEntre from '../update/UpdateEntre';
import DeleteModal from '../delete/DeleteModal';

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase"
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3"

const RowsEntre = ({entre,i,admin}:any)=>{
    const [openModal,setOpenModal]=useState(false)
    const [openModalDelete,setOpenModalDelete]=useState(false)
    return(
        <>  
            <DeleteModal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}/>
            <UpdateEntre  modalOpen={openModal} setModalOpen={setOpenModal}/>
            <tr key={i}>
                <td className={`${Text}`}> 
                    <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                    <img
                        className='h-full w-full  object-cover'
                        src={`/assets/img/${entre.image}`}
                        alt="movie"
                    />
                    </div>
                </td>
                <td className={`${Text} truncate`}>{entre.date}</td>
                <td className={`${Text}`}>{entre.nom}</td>
                <td className={`${Text}`}>{entre.unite}</td>
                <td className={`${Text}`}>{entre.nombre}</td>
                <td className={`${Text}`}>{entre.pu}</td>
                <td className={`${Text}`}>{entre.total}</td>
                <td className={`${Text} float-right flex items-center gap-2`}>
                    {admin ? (
                        <>
                            <button onClick={()=>setOpenModal(true)} className='border border-border bg-dry  flex items-center gap-2 text-white rounded py-1 px-2 w-8 h-8'>
                                <FaEdit className='text-green-500 '/>
                            </button>
                            <button onClick={()=>setOpenModalDelete(true)} className='bg-red-700 text-white rounded flex-colo w-8 h-8'>
                                <MdDelete className='mx-auto'/>
                            </button>
                        </>
                    ):(

                        <>
                            <button className='border border-border bg-dry flex-rows gap-2 text-white rounded py-1 px-2'>
                                Download <FaCloudDownloadAlt className='text-green-500'/>
                            </button>
                            <Link to={`/movies/${entre?.name}`}>
                                <button className='bg-subMain text-white rounded flex-colo w-6 h-6'>
                                    <GoEye/>
                                </button>
                            </Link>
                        </>
                    )
                    }
                </td>
            </tr>
        </>
    )
}


export default RowsEntre