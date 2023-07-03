import { useState } from 'react';
import ShowModal from './Showmodal';
export default function CardMedoc({medoc}:any){
  const [openModal,setOpenModal]=useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  console.log(medoc);
  
  return (
    <>
      <ShowModal modalOpen={openModal} setModalOpen={setOpenModal}/>
      <div onClick={()=>setOpenModal(true)} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg mt-4 h-32 cursor-pointer shadow-xl hover:shadow-2xl">
        <div className="relative justify-end">
          <button
            className="absolute top-1 right-0 rotate-90 inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 text-sm p-1.5"
            type="button"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            className={`z-20 ${isDropdownOpen ? '' : 'hidden'} text-base list-none bg-dryGray divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-0 left-48`}
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Editer
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Supprimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='grid grid-cols-2 mt-8 px-2'>
          <div className='col-span-1'>
              <img
              className="w-16 h-16"
              src={`/assets/img/${medoc.image}`}
              alt="im"
              />
          </div>
          <div className='col-span-1'>
              <p className='font-bold text-gray-800 text-[12px]'>{medoc.nom}</p>
              <p className="text-subMain text-[10px]">
                  {medoc.category}
              </p>
              <div className='mt-5 flex gap-2'>
                  <p className="text-subMain text-[10px]">
                      Reste :
                  </p>
                  <button className='bg-subMain rounded-xl px-2 text-[10px]'>
                      {medoc.dispo}
                  </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
