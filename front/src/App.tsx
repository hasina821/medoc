import { useState } from 'react';
import './App.css';
import Sidebar from './admin/components/cards/Sidebar';
import Reservation from './admin/components/cards/RecentCommande';
import Card from './admin/components/cards/Card';
import Filtre from './admin/components/cards/Filtre';
import { HiPlusCircle } from 'react-icons/hi'
import { BsCardList } from "react-icons/bs";
import Table from './admin/components/cards/Table';
import { Movies } from './Data/MovieData';
import { CiBoxList } from "react-icons/ci";
import StockCardAll from './admin/components/cardItem/StockCardAll';
import TableStock from './admin/components/Table/TableStock';

function Dashboard() {
  const [showList,setShowList]=useState(false)
  return (
    <Sidebar>
      <div className="mt-2 bg-[#F2F2F2] p-4 rounded-2xl">
        <div className='flex gap-2 items-center'>
            <BsCardList className='text-subMain'/> <span className='font-light text-subMain text-[12px]'>Liste des médicaments disponible</span>
        </div>
        <div className='gap-2 min-h-[400px] grid grid-cols-12 mt-2'>
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
              <TableStock data={Movies} admin={true}/>
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
          <div className='col-span-4 bg-[#95afc0] rounded-xl'>
            <Reservation/>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Dashboard;
