import { Link,NavLink } from 'react-router-dom'
import { CgUser} from 'react-icons/cg'
import MyToggle from './MyToggle'
import Notification from './Notification'
import SearchBar from './ResearchNav'
 
function Navbar() {
    const hover = "hover:text-dry transitions text-dry"
    const Hover = ({isActive}:any)=>(isActive ? 'text-main' : hover) 
  return (
    <div className='sticky top-0 z-20'>
        <div className='container mx-auto px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
            <div className='col-span-1 lg:block hidden'>
                <Link to={"/"}>
                    <img 
                        src="/assets/img/medoc.png"
                        alt="logo"
                        className='w-full h-12 object-contain'
                    />
                </Link>
            </div>
            <div className='col-span-6 font-medium text-[11px] hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
                <SearchBar/>
            </div>
        </div>
    </div>
  )
}

export default Navbar