import { Tab } from '@headlessui/react'
import { AiOutlineLineChart } from "react-icons/ai";
import { BiArrowFromLeft,BiArrowFromRight } from "react-icons/bi";
import Entre from '../../pages/Entre'
import Sortie from '../../pages/Sortie'
import Stock from '../../pages/Stock'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function FluxHead() {
  let flux = [
    {
      id: 1,
      title: 'STOCK',
      ico:<AiOutlineLineChart/>,
      Component : <Stock/>
    },
    {
      id: 2,
      title: 'ENTRÉE',
      ico:<BiArrowFromLeft/>,
      Component : <Entre/>
    },
    {
      id: 3,
      title: 'SORTIE',
      ico:<BiArrowFromRight/>,
      Component : <Sortie/>
    }
  ]
  return (
    <div className="w-full  px-2 sm:px-0  rounded-2xl border border-gray-300 shadow-2xl bg-[#F2F2F2]">
      <Tab.Group>
        <Tab.List className="flex space-x-1 white p-1">
          {flux.map((category) => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5  h-full',
                  '',
                  selected
                    ? 'text-center'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              <span className='flex items-center gap-2 font-bold text-subMain'>
                  {category.ico}
                  {category.title}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {flux.map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl  p-3',
                'ring-white ring-opacity-60 w-full'
              )}
            >
               {posts.Component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
