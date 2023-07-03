import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppDispatch } from '../../store/Store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginAdmin, seterrornull } from '../../toolkit/authAction';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { CirclesWithBar } from  'react-loader-spinner'

const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  }).required();
  type FormData = yup.InferType<typeof schema>;

export default function Login() {
    const error = useSelector((state:any)=>state.auth.error)
    const loading = useSelector((state:any)=>state.auth.loading)
    const dispatch  = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    console.log(loading);
    
    const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm<FormData>({
       resolver: yupResolver(schema),
     });
    
     const onSubmit = async (data: FormData) => {
        try {
           await dispatch(LoginAdmin(data)).then((res)=>{
            navigate('/admin/dashboard')
           })
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full relative'>
        <img className='absolute w-48 top-1 right-1' src="/assets/img/medoc.png" alt="logo"/>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src="https://img.freepik.com/photos-gratuite/vue-rapprochee-main-pharmacien-prenant-boite-medicaments-etagere-pharmacie_342744-320.jpg?w=740&t=st=1686584707~exp=1686585307~hmac=120c00949a008859a05ad1b816e4a4acc7a6e60f3a296ad08d22cd75c778b066" alt="" />
        </div>
        <div className='bg-dry flex flex-col justify-center relative'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-subMain p-8 px-8' onSubmit={handleSubmit(onSubmit)}>
                {loading&&(
                    <div className='absolute top-72 left-72'>
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
                <h2 className='text-4xl dark:text-white font-bold text-center'>SE CONNECTER</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input {...register("email")} className='w-full  text-sm  mt-2 p-5 border border-border rounded text-gray-700 bg-white' type="text" />
                    <p className="text-red-500 text-left font-bold">{errors.email?.message}</p>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Mot de passe</label>
                    <input {...register("password")} className='w-full  text-sm  mt-2 p-5 border border-border rounded text-gray-700 bg-white' type="password" />
                    <p className="text-red-500 text-left font-bold">{errors.password?.message}</p>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center text-[12px]'><input className='mr-2' type="checkbox" /> Se souvenir de moi</p>
                    <p className='text-[12px]'>Oublier mon mot de passe</p>
                </div>
                    <button type='submit' className='mt-4 bg-purple transitions hover:bg-teal-800 flex-rows gap-4 text-white p-4 rounded-lg w-full cursor-pointer font-bold'>CONNECTER</button>
            </form>
        </div>
    </div>
    {error&&(
        <div
        className="absolute left-1 bottom-1 rounded-lg bg-[#E90064] px-6 py-5 text-base text-danger-700 gap-4 flex justify-between items-center"
        role="alert">
        <div className="text-[12px] flex gap-8 items-center">
            <p className="text-gray-100">
            Une erreur a été survenu lors de votre connexion,verifiez vos données
            </p>
        </div>
        <div className="text-white cursor-pointer">
          <IoIosCloseCircleOutline onClick={()=>dispatch(seterrornull())}/>
        </div>
        </div>
      )}
    </>
  )
}