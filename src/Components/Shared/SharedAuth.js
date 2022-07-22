import React from 'react'

import { FcGoogle } from 'react-icons/fc'
import {FaApple, FaFacebookF} from 'react-icons/fa'
const SharedAuth = () => {
  return (
      <>
          <div className='flex items-center  gap-2'>
              <hr className='border border-white w-1/3' />
              <p className='inline-block   '>or continue with</p>
              <hr className='border border-white w-1/3' />
          </div>
          <div className='w-full flex justify-center items-center my-4 gap-4'>
              <button className='bg-base-100 inline-block p-2 text-3xl rounded-md'><FcGoogle/></button>
              <button className='bg-base-100 inline-block p-2 text-3xl rounded-md'><FaApple/></button>
              <button className='bg-base-100 inline-block p-2 text-3xl rounded-md'><FaFacebookF className='text-[#3D6AD7]'/></button>
        </div>
      </>
  )
}

export default SharedAuth