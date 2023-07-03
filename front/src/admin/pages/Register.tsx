import React,{useCallback,useState,ChangeEvent} from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CirclesWithBar } from  'react-loader-spinner'

import Sidebar from '../components/cards/Sidebar'
import { registerAdmin, setMessageNull, seterrornull } from '../../toolkit/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/Store';

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
  profile: yup.mixed().required("Le photo de profil est obligatoire")
  }).label('Votre photo');
type FormData = yup.InferType<typeof schema>;

function Register() {
  const dispatch = useDispatch<AppDispatch>()
  const loading = useSelector((state:any)=>state.auth.loading)
  const error = useSelector((state:any)=>state.auth.error)
  const message = useSelector((state:any)=>state.auth.message)
  const [link,setLink]= useState('')

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLink(URL.createObjectURL(e.target.files[0]))
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  }); 

  const RegisterAdmin = async(data: any)=>{
    const email = data.email
    const password = data.password
    const profile = data.profile[0]
    try {
      await dispatch(registerAdmin({email,password,profile}))
      if(message){
        navigate("/admin/dashboard")
      }
    } catch (error:any) {
      console.log(error);
    }
  }
  const navigate = useNavigate();
  return (
    <>
    <Sidebar>
        <div className='flex flex-col gap-6 relative mt-2 p-4 rounded-2xl bg-[#F2F2F2]'>
        <form className='w-full' onSubmit={handleSubmit(RegisterAdmin)}>
          {loading&&(
                  <div className='absolute top-32 lg:left-[500px] md:left-[200px] sm:left-[100px] z-50'>
                      <CirclesWithBar
                      height="100"
                      width="100"
                      color="#E90064"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      outerCircleColor=""
                      innerCircleColor=""
                      barColor=""
                      ariaLabel='circles-with-bar-loading'
                    />
                  </div>
            )}
            <h2 className='text-xl font-bold text-subMain'>Profile</h2>
            <div className="w-full">
                <label
                    className="flex justify-center w-full h-24 px-4 transition bg-main border border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    <span className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="font-medium text-subMain text-center">
                            Ajouter le photo de profile du nouveau admin {" "}
                            <span className="text-blue-600 underline">browse</span>
                        </span>
                    </span>
                    <input {...register('profile',{
                      onChange: handleFileChange})} type="file" name="profile" className="opacity-0"/>
                </label>
            </div>
            <div className='w-24 h-24 p-2 mt-2 bg-main border border-border rounded'>
                        <img
                        src={link}
                        alt=""
                        className='w-full h-full object-cover rounded'
                        />
                    </div>
            <div className="text-sm w-full mt-2">
              <label className="text-subMain font-semibold">Email</label>
              <input 
                {...register("email")}
                name="email"
                type="email"
                placeholder="Saisissez ici le mail"
                className="w-full  text-sm  mt-2 p-5 border border-gray-300 rounded text-text bg-main"/>
                <p className="text-red-500 text-left font-bold">{errors.email?.message}</p>
            </div>
            <div className="text-sm w-full">
              <label className="text-subMain font-semibold">Mot de passe</label>
              <input 
                {...register("password")}
                name="password"
                type="password"
                placeholder="Saisissez ici le mot de passe"
                className="w-full  text-sm  mt-2 p-5 border border-gray-300 rounded text-gray-900 bg-main"/>
                <p className="text-red-500 text-left font-bold">{errors.password?.message}</p>
            </div>
             <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'> 
                <input type='submit' className='cursor-pointer bg-subMain flex-rows gap-4 font-medium transitions hover:bg-purple border border-subMain hover:border-purple text-white py-2 px-4 rounded flex items-center' value="Ajouter l'admin"/>
             </div>
          </form>
        </div>
    </Sidebar>
    {error&&(
      <div
      className="absolute left-1 bottom-1 rounded-lg bg-[#E90064] px-6 py-5 text-base text-danger-700 gap-4 flex justify-between items-center"
      role="alert">
      <div className="text-[12px] flex gap-8 items-center">
          <p className="text-gray-100">
          Une erreur a été survenu lors de création de votre admin
          </p>
      </div>
      <div className="text-white cursor-pointer">
        <IoIosCloseCircleOutline onClick={()=>dispatch(seterrornull())}/>
      </div>
      </div>
    )}
    {message&&(
      <div
      className="absolute left-1 bottom-1 rounded-lg bg-green-700 px-6 py-5 text-base text-danger-700 gap-4 flex justify-between items-center"
      role="alert">
      <div className="text-[12px] flex gap-8 items-center">
          <p className="text-gray-100">
              Votre admin a été crée avec succèss
          </p>
      </div>
      <div className="text-white cursor-pointer">
        <IoIosCloseCircleOutline onClick={()=>dispatch((setMessageNull()))}/>
      </div>
      </div>
  )}
  </>
  )
}
 
export default Register