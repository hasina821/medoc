import React from 'react'
import Sidebar from '../components/cards/Sidebar'
import { Input } from '../components/cards/UsedInput'

function Password() {
  return (
    <Sidebar>
        <div className='flex flex-col gap-6 mt-2 bg-[#F2F2F2] p-4 rounded-2xl'>
            <h2 className='text-xl text-subMain font-bold'>Change Password</h2>
            <Input
                label="Previous Password"
                placeholder="***********************"
                type="password"
                bg={true}
            />
            <Input
                label="New Password"
                placeholder="***********************"
                type="password"
                bg={true}
             />
             <Input
                label="Confirm Password"
                placeholder="***********************"
                type="password"
                bg={true}
             />
             <div className='flex justify-end items-center my-4'> 
                <button className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-purple border border-subMain hover:border-purple text-white py-2 px-4 rounded flex items-center'>
                    Change Password
                </button>
             </div>
        </div>  
    </Sidebar>
  )
}

export default Password