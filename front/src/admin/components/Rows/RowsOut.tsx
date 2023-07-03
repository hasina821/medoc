import { useState } from 'react';
import { FaCloudDownloadAlt, FaEdit  } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GoEye } from "react-icons/go";
import DeleteModal from '../delete/DeleteModal';
import UpdateSortie from '../update/UpdateSortie';
const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase"
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3"

const Rowssortie = ({sortie,i,admin}:any)=>{
    const [openModal,setOpenModal]=useState(false)
    const [openModalDelete,setOpenModalDelete]=useState(false)
    return(
        <>
            <UpdateSortie modalOpen={openModal} setModalOpen={setOpenModal}/>
            <DeleteModal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}/>
            <tr key={i}>
                <td className={`${Text}`}> 
                    <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                    <img
                        className='h-full w-full  object-cover'
                        src={`/assets/img/${sortie.image}`}
                        alt="movie"
                    />
                    </div>
                </td>
                <td className={`${Text} truncate`}>{sortie.date}</td>
                <td className={`${Text}`}>{sortie.nom}</td>
                <td className={`${Text}`}>{sortie.unite}</td>
                <td className={`${Text}`}>{sortie.nombre}</td>
                <td className={`${Text}`}>{sortie.pu}</td>
                <td className={`${Text}`}>{sortie.total}</td>
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
                            <Link to={`/movies/${sortie?.name}`}>
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


export default Rowssortie