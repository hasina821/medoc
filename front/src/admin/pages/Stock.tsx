import { useState } from 'react';
import Reservation from '../components/cards/RecentCommande';
import Filtre from '../components/cards/Filtre';
import { BsCardList } from "react-icons/bs";
import { Medocs } from '../../Data/Medocs';
import { CiBoxList } from "react-icons/ci";
import TableStock from '../components/Table/TableStock';
import StockCardAll from '../components/cardItem/StockCardAll';
import { FaSearch } from 'react-icons/fa'

function Stock() {
  const [showList,setShowList]=useState(false)
  return (
    <>
        <div className='flex gap-2 items-center'>
            <BsCardList className='text-subMain'/> <span className='font-light text-subMain text-[12px]'>Liste des médicaments disponible</span>
        </div>
        <div className='gap-2 min-h-[400px] grid grid-cols-12 mt-2'>
          <div className='col-span-12  rounded-xl'>
            <div className='flex justify-between'>
              <Filtre/>
              <div className='flex gap-8 items-center'>
                  <form className='w-full text-sm bg-dryGray rounded flex-btn gap-4 flex'>
                    <input  type="text" 
                    className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black'
                    placeholder='Rechercher un medicament ' />
                    <button type="submit" className='bg-subMain w-12 flex-colo h-12 rounded text-main '>
                        <FaSearch className='mx-auto'/>
                    </button>
                </form> 
                <CiBoxList className='text-subMain text-[32px] font-bold cursor-pointer hover:bg-dry hover:text-white hover:rounded-md' onClick={()=>setShowList(!showList)}/>
              </div>
            </div>
            {showList ? 
            <div className="mt-2 ">
              <TableStock data={Medocs} admin={true}/>
            </div> : 
            <div className='grid grid-cols-8 gap-4'>
                <StockCardAll/>
            </div>
          }
          </div>
          {/* 
          <div className='col-span-2 bg-[#95afc0] rounded-xl'>
            <Reservation/>
          </div>
          */}
        </div>
    </>
  );
}

export default Stock;
