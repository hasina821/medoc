import React from 'react'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import Sidebar from '../components/cards/Sidebar'
import { MdHolidayVillage } from 'react-icons/md'
import Statistique from '../components/charts/Chart'


function Stat() {
    const DashboardData = [
        {
            bg:"bg-[#1D566E]",
            back:"bg-[#163A5F]",
            icon:FaRegListAlt,
            title:"Total achat",
            total:90
        },
        {
            bg:"bg-[#21ABA5]",
            back:"bg-[#1D566E]",
            icon:MdHolidayVillage,
            title:"Total revenues",
            total:8
        },
        {
            bg:"bg-[#45EBC9]",
            back:"bg-[#21ABA5]",
            icon:FaUser,
            title:"Total prescription",
            total:133
        }
    ]
  return (
    <Sidebar>
        <div className='mt-2 bg-[#F2F2F2] p-4 rounded-2xl bg-[#F2F2F2]'>
            <h2 className='text-xl font-bold text-subMain'>
            TABLEAU DE BORD
            </h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {DashboardData.map((data,index)=>(
                    <div key={index} className={`p-4 rounded ${data.back} border-border grid grid-cols-4 gap-2`}>
                        <div className={`col-span-1 rounded-full h-12 w-12 flex items-center ${data.bg}`}>
                            <data.icon className='mx-auto'/>
                        </div>
                        <div className='col-span-3'>
                            <h2>{data.title}</h2>
                            <p className='mt-2 font-bold'>{data.total}</p>
                        </div>
                    </div>
                ))}
            </div>  
            <h3 className='text-md font-medium my-6 text-white'>Statistique</h3>
            <Statistique/>
        </div>
    </Sidebar>
  )
}

export default Stat