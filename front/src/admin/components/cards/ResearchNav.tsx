import React,{useState} from "react";
import Dropdown from "./DropDown";
import { FiAlignJustify } from "react-icons/fi";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import LanguageDropdown from "./LanguageDropdown";
import { useNavigate } from "react-router-dom";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { NavLink } from "react-router-dom";

const SearchBar = (props:any) => {
  const navigate = useNavigate()
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = useState(false);
  const logOut = ()=>{
    localStorage.clear();
    setTimeout(() => {
        navigate("/")
      }, 1000)
}
  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl p-2 backdrop-blur-xl">
      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-[#F2F2F2] px-2 py-2 shadow-xl shadow-shadow-500  dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-[#F2F2F2] text-subMain">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-subMain" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-[80px] rounded-full bg-[#F2F2F2] text-sm font-medium text-subMain outline-none placeholder:!text-gray-400 "
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5 text-subMain" />
        </span>
        <LanguageDropdown/>
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-subMain" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] p-4 shadow-xl shadow-shadow-500 bg-fond sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-subMain">
                  Notification
                </p>
                <p className="text-sm font-bold text-subMain">
                  Mark all read
                </p>
              </div>
              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-subMain">
                  <BsArrowBarUp className="text-subMain"/>
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-subMain">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-subMain">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>
              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-subMain">
                  <BsArrowBarUp className="text-subMain"/>
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-subMain">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-subMain">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />
        {/* start Horizon PRO */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-4 w-4 text-subMain" />
            </p>
          }
          children={
            <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-fond p-4 shadow-xl shadow-shadow-500">
              <div
                style={{
                  backgroundImage: `url(/assets/img/layout/Navbar.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="mb-2 aspect-video w-full rounded-lg"
              />
              <a
                target="blank"
                href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-subMain transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700"
              >
                Buy Horizon UI PRO
              </a>
              <a
                target="blank"
                href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-subMain transition duration-200 hover:bg-gray-200 hover:text-navy-700"
              >
                See Documentation
              </a>
              <a
                target="blank"
                href="https://horizon-ui.com/?ref=live-free-tailwind-react"
                className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-subMain transition duration-200 hover:text-navy-700"
              >
                Try Horizon Free
              </a>
            </div>
          }
          classNames={"py-2 top-6 -left-[250px] md:-left-[330px] w-max"}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        />
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-subMain" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-subMain" />
          )}
        </div>
        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              src={`/assets/img/avatars/avatar1.png`}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-fond bg-cover bg-no-repeat shadow-xl shadow-shadow-500">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-subMain">
                    👋 Salut, Hasina
                  </p>{" "}
                </div>
              </div>
              <div className="h-px w-full bg-gray-200" />

              <div className="flex flex-col p-4">
                <NavLink
                  to={`/admin/register`}
                  className="text-sm text-subMain hover:text-teal-600"
                >
                  Ajouter un admin
                </NavLink>
                <NavLink
                  to={`/admin/password`}
                  className="mt-3 text-sm text-subMain hover:text-teal-600"
                >
                  Mot de passe
                </NavLink>
                <button
                  onClick={logOut}
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 text-left"
                >
                  Deconnexion
                </button>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default SearchBar;
