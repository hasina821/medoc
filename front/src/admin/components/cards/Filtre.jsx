import React,{Fragment} from 'react'
import { useState } from 'react'
import { CategoriesData } from '../../../Data/Medocs';
import { Listbox, Transition } from '@headlessui/react'
import { FaAngleDown } from "react-icons/fa";


const TimesData = [
    {title:"Filtrer unité"},
    {title: "Comprimé"},
    {title: "Millilitre (ml)"},
    {title: "Gramme (g)"},
    {title: "Microgramme (µg)"},
    {title: "Milligramme (mg) "}
]
const RatesData = [
    {title:"Filtrer par fournisseurs"},
    {title: "Entreprise 1"},
    {title: "Entreprise 2"},
    {title: "Entreprise 3"},
    {title: "Entreprise 4"},
    {title: "Entreprise 5"},
]

function Filtre() {
    const [Category,SetCategory] = useState({title:"En vente libre"})
    const [times,setTimes]= useState(TimesData[0])
    const [rates,setRates]=useState(RatesData[0])

    const Filter = [
        {
            value:Category,
            onChange:SetCategory,
            items:CategoriesData
        },
        {
            value:rates,
            onChange:setRates,
            items:RatesData
        },
        
    ]
  return (
    <div className='my-6 text-dryGray  grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded'>
        {
            Filter.map((item,index)=>(
                <Listbox key={index} value={item.value} onChange={item.onChange}>
                    <div className='relative border border-subMain text-subMain'>
                        <Listbox.Button className="border-gray-800  relative w-full bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs ">
                            <span className='block truncate'>{item.value.title}</span>
                            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                                <FaAngleDown className="h-5 w-5" aria-hidden="true"/>
                            </span>
                        </Listbox.Button>
                        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"> 
                            <Listbox.Options className="absolute z-10 mt-1 w-full border border-gray-800 text-dryGray rounded-md shadow-lg bg-white ring-opacity-5 max-h-60 py-1 text-base ring-1 ring-black overflow-auto focus:outline-none sm:text-sm">
                                {item.items.map((iterm,index)=>(
                                    <Listbox.Options key={index} className={({active})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? "bg-subMain text-white" :"text-subMain"
                                    }`} value={iterm}>
                                        {({selected})=>(
                                            <>
                                                <span className={`block truncated ${
                                                    selected ? 'font-semibold':'font-normal'
                                                }`}>
                                                    {iterm.title}
                                                </span>
                                                {selected ? (
                                                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                                        <p>
                                                            e
                                                        </p>
                                                    </span>
                                                ):null}
                                            </>
                                        )}
                                    </Listbox.Options>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            ))
        } 
    </div>
  )
}

export default Filtre