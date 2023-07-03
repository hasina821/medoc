import { FaListAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { AiFillBank } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { MdOutlinePassword } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import { GiMedicalPack } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { BiHelpCircle } from "react-icons/bi";


function Sidebar({children}:any) {
    const navigate = useNavigate()
    const logOut = ()=>{
        localStorage.clear();
        setTimeout(() => {
            navigate("/")
          }, 1000)
    }
    const SideLinks = [
        {
            name:"Accueil",
            link:"/admin/dashboard",
            icon:AiFillBank
        },
        {
            name:"Fournisseurs",
            link:"/admin/fournisseurs",
            icon:GiMedicalPack
        },
        {
            name:"Commandes",
            link:"/admin/commande",
            icon:FaListAlt
        },
        {
            name:"Statistique",
            link:"/admin/statistique",
            icon:ImStatsBars
        },
        
       
    ]
  const active = "text-purple"
  const hover = "hover:text-white"
  const inActive = "rounded font-medium text-[24px] transitions  gap-3 items-center px-1 mt-8 text-center text-gray-200 font-bold"
  const Hover = ({isActive}:any)=>isActive ? `${active} ${inActive}`:`${inActive} ${hover}`
  return (
        <div className='min-h-screen text-white'>
            <div className='xl:grid grid-cols-12 gap-5 items-start'>
                <div className='col-span-1 sticky bg-dry  xl:mb-0 mb-5 rounded-tr-[4rem] h-screen z-50'>
                    {
                        SideLinks.map((li,i)=>(
                            <NavLink to={li.link} key={i} className={Hover}>
                               <li.icon className='mx-auto'/>
                               <p className='text-[12px] font-bold'>
                                    {li.name}
                               </p>
                            </NavLink>
                        ))
                    }
                    <div className="rounded font-medium text-[24px] transitions  gap-3 items-center px-1 mt-8 text-center text-gray-200 cursor-pointer hover:text-teal-600">
                        <BiHelpCircle className='mx-auto'/>
                        <p className='text-[12px] font-bold text-center'>
                            Aides
                        </p>
                    </div>
                </div>
                <div
                className='col-span-11 rounded-md p-2'>
                    <Navbar/>
                    <div
                    className='w-full'
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-delay="10"
                    data-aos-offset="100"
                    >
                    {children}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Sidebar