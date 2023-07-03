import {useState,ChangeEvent, ReactEventHandler} from 'react'
import { BsImage } from "react-icons/bs";
import {  MdUpload } from 'react-icons/md'
import MainModal from '../Modals/MainModal'
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import { Medocs } from '../../../Data/Medocs';


function AddSortie({modalOpen,setModalOpen}:any) {
    const [prixTotal, setPrixTotal] = useState(0);
  const [nombre, setNombre] = useState(0);
  const [prixUnitaire, setPrixUnitaire] = useState(0);

  const calculatePrixTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedPrixUnitaire = parseFloat(e.target.value);
    setPrixUnitaire(updatedPrixUnitaire);
    setPrixTotal(nombre * updatedPrixUnitaire);
  };

  return (
    <>
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block sm:w-4/5 md:w-4/5 lg:w-4/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white  rounded-2xl shadow-2xl'>
            <form className='w-full'>
                <div className='flex flex-col gap-6'>
                    <div className="text-sm w-full">
                        <label className="text-subMain font-semibold">Medicament</label>
                        <select className="w-full mt-2 px-6 py-4 text-text bg-main border border-gray-300 rounded">
                            {Medocs.map((option:any,i:number)=>(
                                <option key={i} value={option.nom}> 
                                   {option.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='w-full grid md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <div className="text-sm w-full">
                                <label className="text-border font-semibold">Quantite</label>
                                <input 
                                onChange={(e:any)=>setNombre(parseFloat(e.target.value))}
                                required 
                                type="number"
                                placeholder="Quantite"
                                className={`w-full  text-sm  mt-2 p-5 border border-gray-300 rounded text-subMain bg-[#fff] h-20`}/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className="text-sm w-full">
                                <label className="text-border font-semibold">Prix Unitaire</label>
                                <input 
                                onChange={calculatePrixTotal}
                                required 
                                type="number"
                                placeholder="Prix en ariary"
                                className={`w-full  text-sm  mt-2 p-5 border border-gray-300 rounded text-subMain bg-[#fff] h-20`}/>
                            </div>
                        </div>
                    </div>
                    {prixTotal !== 0  && (
                        <div className='flex justify-end items-center my-4'>
                            <button
                                type="submit"
                                disabled
                                className='bg-[#095551] transitions hover:border-none hover:bg-purple border border-subMain text-white py-4 rounded w-full flex justify-center items-center h-12 px-auto gap-2'
                            >
                                <p>Total en ariary : {prixTotal}</p>
                            </button>
                        </div>
                    )}
                    <div className='flex justify-end items-center my-4'> 
                        <button type="submit" className='bg-subMain transitions hover:border-none hover:bg-purple border border-subMain text-white py-4 rounded w-full flex justify-center items-center h-12 px-auto gap-2'>
                            <PlusCircleIcon className='h-8 w-8' />
                            <p>Ajouter</p>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </MainModal>
    </>
  )
}

export default AddSortie