import React from 'react'
import CardSortie from '../cards/CardSortie'
import { Medocs } from '../../../Data/Medocs'
import { SortieData } from '../../../Data/Medocs'


function SortieCardAll() {
  return (
    <>
      {SortieData.map((medo,index)=>(
        <div key={index} className='col-span-2'>
          <CardSortie medoc={medo}/>
        </div>
      ))}
    </>
  )
}

export default SortieCardAll;