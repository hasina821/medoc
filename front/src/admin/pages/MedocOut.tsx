import React,{useState} from 'react'
import Sidebar from '../components/cards/Sidebar'
import PrescriPourcentage from '../components/cards/PrescriPourcentage'
import Filtre from '../components/cards/Filtre'
import { CiBoxList } from 'react-icons/ci'
import { HiPlusCircle } from 'react-icons/hi'
import Table from '../components/cards/Table'
import { Movies } from '../../Data/MovieData'
import Card from '../components/cards/CardPrescription';
import StockCardAll from '../components/cardItem/StockCardAll'

function MedocOut() {
  const [showList,setShowList]=useState(false)
  return (
    <Sidebar>
        <div className="mt-2 bg-[#F2F2F2] p-4 rounded-2xl">
          <div className='gap-8 min-h-[500px] grid grid-cols-12 mt-2'>
            <div className='col-span-4 rounded-xl'>
              <PrescriPourcentage/>
            </div>
            <div className='col-span-8  rounded-xl'>
                <div className='flex justify-between'>
                  <Filtre/>
                  <div className='flex gap-8 items-center'>
                    <CiBoxList className='text-subMain text-[32px] font-bold cursor-pointer hover:bg-dry hover:text-white hover:rounded-md' onClick={()=>setShowList(!showList)}/>
                    <button className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-purple border border-subMain hover:border-purple text-white py-2 px-4 rounded flex items-center'>
                          <HiPlusCircle/> Ajouter
                      </button>
                  </div>
                </div>
              {showList ? 
              <div className="mt-2">
                <Table data={Movies} admin={true}/>
              </div> : 
              <div className='grid grid-cols-8 gap-4'>
                {[1,2,3,4,5,6,7,8,9].map((med)=>(
                <div className='col-span-2'>
                  <StockCardAll/>
                </div>
                ))}
              </div>
            }
            </div>
          </div>
        </div>
    </Sidebar>
  )
}

export default MedocOut