import React from 'react'
import { FournisseurData } from '../../../Data/Medocs'
import CardFournisseur from '../cards/CardFournisseur'

function CardFournisseurAll() {
  return (
    <>
      {FournisseurData.map((f,index)=>(
          <div key={index} className='col-span-2'>
              <CardFournisseur fournisseur={f}/>
          </div>
      ))}
    </>
  )
}

export default CardFournisseurAll