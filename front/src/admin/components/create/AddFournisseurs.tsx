import {useState,ChangeEvent} from 'react'
import { BsImage } from "react-icons/bs";
import {  MdUpload } from 'react-icons/md'
import MainModal from '../Modals/MainModal'
import { PlusCircleIcon } from '@heroicons/react/20/solid';


function AddFournisseurs({modalOpen,setModalOpen}:any) {
  const [link,setLink]= useState('')
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          setLink(URL.createObjectURL(e.target.files[0]))
        }
    };
  return (
    <>
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block sm:w-4/5 md:w-4/5 lg:w-4/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white  rounded-2xl shadow-2xl'>
            <form className='w-full'>
                <div className='flex flex-col gap-6'>
                    <div className='w-full grid md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-subMain font-semibold text-sm text-left'>
                                Logo du fournisseur
                            </p>
                            <div className='w-full text-center'>
                                    <div className='w-full'>
                                        <label
                                            className="flex justify-center h-20  transition text-subMain bg-[#fff] border-2 px-6 py-4  border-gray-300 border-dashed  rounded-md  appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                            <span className="flex items-center space-x-2">
                                                <BsImage className='text-subMain h-8 w-8'/>
                                                <span className="font-medium text-subMain text-center w-32">
                                                    Ajouter la photo du fournisseur
                                                </span>
                                            </span>
                                            <input onChange={handleFileChange} type="file" name="files1" className="opacity-0"/>
                                        </label>
                                    </div>
                            </div>
                            <div className='w-20 h-20 p-2 bg-main border border-border rounded'>
                                <img 
                                src={link}
                                alt=""
                                className='w-full h-full object-cover rounded'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className="text-sm w-full">
                                <label className="text-border font-semibold">Nom</label>
                                <input 
                                required 
                                type="text"
                                placeholder="Nom du fournisseur"
                                className={`w-full  text-sm  mt-2 p-5 border border-gray-300 rounded text-subMain bg-[#fff] h-20`}/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className="text-sm w-full">
                                <label className="text-border font-semibold">Adresse</label>
                                <input 
                                required 
                                type="text"
                                placeholder="Adresse du fournisseur"
                                className={`w-full  text-sm  mt-2 p-5 border border-gray-300 rounded text-subMain bg-[#fff] h-20`}/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className="text-sm w-full">
                                <label className="text-border font-semibold">Adresse mail</label>
                                <input 
                                required 
                                type="text"
                                placeholder="Adresse mail du fournisseur"
                                className={`w-full  text-sm  mt-2 p-5 border border-gray-300 rounded text-subMain bg-[#fff] h-20`}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end items-center my-4'> 
                        <button type="submit" className='bg-subMain transitions hover:border-none hover:bg-purple border border-subMain text-white py-4 rounded w-full flex justify-center items-center h-12 px-auto gap-2'>
                            <PlusCircleIcon className='h-8 w-8' />
                            <p>Ajouter le fournisseur</p>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </MainModal>
    </>
  )
}

export default AddFournisseurs