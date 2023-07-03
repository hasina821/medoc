import { useState } from 'react';
import Filtre from '../components/cards/Filtre';
import { HiPlusCircle } from 'react-icons/hi'
import { BsCardList } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import AddSortie from '../components/create/AddSortie';
import TableSortie from '../components/Table/TableSortie';
import { entreData } from '../../Data/Medocs';
import PrescriPourcentage from '../components/cards/PrescriPourcentage';
import SortieCardAll from '../components/cardItem/SortieCardAll';
import { SortieData } from '../../Data/Medocs';

function Sortie() {
  const [showList,setShowList]=useState(false)
  const [openModal,setOpenModal]=useState(false)
  return (
    <>
        <AddSortie modalOpen={openModal} setModalOpen={setOpenModal}/>
        <div className='flex gap-2 items-center'>
            <BsCardList className='text-subMain'/> <span className='font-light text-subMain text-[12px]'>Liste des médicaments sortie</span>
        </div>
        <div className='gap-2 min-h-[400px] grid grid-cols-12 mt-2'>
          <div className='col-span-9  rounded-xl'>
            <div className='flex justify-between'>
              <Filtre/>
              <div className='flex gap-8 items-center'>
                <CiBoxList className='text-subMain text-[32px] font-bold cursor-pointer hover:bg-dry hover:text-white hover:rounded-md' onClick={()=>setShowList(!showList)}/>
                <button onClick={()=>setOpenModal(true)} className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-purple border border-subMain hover:border-purple text-white py-1 px-4 rounded flex items-center'>
                      <HiPlusCircle/> Vendre
                  </button>
              </div>
            </div>
            {showList ? 
            <div className="mt-2">
              <TableSortie data={SortieData} admin={true}/>
            </div> : 
            <div className='grid grid-cols-8 gap-4'>
              <SortieCardAll/>
            </div>
          }
          </div>
          <div className='col-span-3 rounded-xl shadow-2xl'>
            <PrescriPourcentage/>
          </div>
        </div>
    </>
  );
}

export default Sortie;
