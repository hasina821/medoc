import {useState,ChangeEvent} from 'react'
import { BsImage } from "react-icons/bs";
import {  MdUpload } from 'react-icons/md'
import MainModal from '../Modals/MainModal'
import { PlusCircleIcon } from '@heroicons/react/20/solid';

function ShowModal({modalOpen,setModalOpen}:any) {
  return (
    <>
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block sm:w-4/5 md:w-4/5 lg:w-4/5 w-full align-middle p-10 overflow-y-auto h-full  bg-main text-white  rounded-2xl shadow-2xl'>
            
        </div>
        </MainModal>
    </>
  )
}

export default ShowModal