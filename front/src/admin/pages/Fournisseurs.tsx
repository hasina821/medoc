import { useState } from 'react'
import Sidebar from '../components/cards/Sidebar'
import Filtre from '../components/cards/Filtre'
import { CiBoxList } from 'react-icons/ci'
import { HiPlusCircle } from 'react-icons/hi'
import Card from '../components/cards/CardPrescription';
import TableCommand from '../components/Table/TableCommand'
import AddFournisseurs from '../components/create/AddFournisseurs'
import TableFournisseur from '../components/Table/TableFournisseur'
import CardFournisseurAll from '../components/cardItem/CardFournisseurAll'
import { GiMiracleMedecine } from "react-icons/gi";


function Fournisseurs() {
  const [openModal,setOpenModal]=useState(false)
  const [showList,setShowList]=useState(false)
  return (
    <Sidebar>
        <AddFournisseurs modalOpen={openModal} setModalOpen={setOpenModal}/>
        <div className="mt-2  p-4 rounded-2xl border border-gray-300 shadow-2xl bg-[#F2F2F2]">
            <div className='flex gap-2 items-center'>
                <GiMiracleMedecine className='text-subMain'/> <span className='font-light text-subMain text-[12px]'>Liste des fournisseurs</span>
            </div>
          <div className='gap-8 min-h-[500px] grid grid-cols-12 mt-2'>
            {/* 
            <div className='col-span-4 rounded-xl'>
              <PrescriPourcentage/>
            </div>
            */}
            <div className='col-span-12  rounded-xl'>
                <div className='flex justify-between'>
                  <div className='w-3/4'>

                  </div>
                  <div className='flex gap-8 items-center'>
                    <CiBoxList className='text-subMain text-[32px] font-bold cursor-pointer hover:bg-dry hover:text-white hover:rounded-md' onClick={()=>setShowList(!showList)}/>
                    <button onClick={()=>setOpenModal(true)} className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-purple border border-subMain hover:border-purple text-white py-2 px-4 rounded flex items-center'>
                          <HiPlusCircle/> Ajouter
                      </button>
                  </div>
                </div>
              {showList ? 
              <div className="mt-4">
                <TableFournisseur/>
              </div> : 
              <div className='grid grid-cols-8 gap-4 mt-2'>
                <CardFournisseurAll/>
              </div>
            }
            </div>
          </div>
        </div>
    </Sidebar>
  )
}

export default Fournisseurs