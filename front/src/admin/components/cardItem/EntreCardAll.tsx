import React from 'react'
import { entreData } from '../../../Data/Medocs'
import CardEntre from '../cards/CardEntre'

function EntreCardAll() {
  return (
    <>
            {entreData.map((medo,index)=>(
                <div key={index} className='col-span-2'>
                    <CardEntre medoc={medo}/>
                </div>
            ))}
    </>
  )
}

export default EntreCardAll;