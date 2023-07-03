import React,{useState} from 'react';

const CardFournisseur = ({fournisseur}:any) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-4 h-32">
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
          className={`z-20 ${isDropdownOpen ? '' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-0 left-44`}
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Editer
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 "
              >
                Supprimer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-2 mt-8'>
        <div className='col-span-1'>
            <img
            className="w-20 h-20 shadow-lg"
            src="https://www.studentdoctor.net/wp-content/uploads/2018/08/20180815_prescription-1024x1024.png"
            alt="im"
            />
        </div>
        <div className='col-span-1'>
            <p className='font-bold text-gray-800 text-[12px]'>Marihasina</p>
            <p className="text-subMain text-[10px]">
                Depuis hier
            </p>
            <div className='mt-5 flex gap-2'>
                <button className='bg-orange-700 rounded-xl px-2 text-[10px]'>
                    urgent
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CardFournisseur;
