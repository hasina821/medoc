import React from 'react'
import CardMedoc from '../cards/Card'
import { Medocs } from '../../../Data/Medocs'

function StockCardAll() {
  return (
    <>
            {Medocs.map((medo,index)=>(
                <div key={index} className='col-span-2'>
                    <CardMedoc medoc={medo}/>
                </div>
            ))}
    </>
  )
}

export default StockCardAll