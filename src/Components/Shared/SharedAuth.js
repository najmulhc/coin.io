import React from 'react'
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import {FaApple, FaFacebookF} from 'react-icons/fa'
import { auth } from '../../firebase.init'
import { signInWithPopup } from 'firebase/auth'
const SharedAuth = () => {
    const Gprovider = new GoogleAuthProvider();
    const Fprovider = new FacebookAuthProvider();
    const facebook = e => {
        e.preventDefault();
        signInWithPopup(auth,Fprovider).then((result) => {
            console.log(result)
    }).catch((error) => {
            console.log(error.error)
        })
    }
    const google = e => {
        e.preventDefault();
        signInWithPopup(auth,Gprovider).then((result) => {
                console.log(result)
        }).catch((error) => {
                console.log(error.error)
            })
     }
  return (
      <>
          <div className='flex justify-between items-center'>
              <hr className='border border-white w-full' />
              <h3 className='text-center m-2 '>or continue with</h3>
              <hr className='border border-white w-full ' />
          </div>
          <div className='w-full flex justify-center items-center my-4 gap-4'>
              <button className='bg-base-100 inline-block p-2 text-3xl rounded-md' onClick={google}><FcGoogle/></button>
              <button className='bg-base-100 inline-block p-2 text-3xl rounded-md'><FaApple/></button>
              <button className='bg-base-100 inline-block p-2 text-3xl rounded-md' onClick={facebook}><FaFacebookF className='text-[#3D6AD7]'/></button>
        </div>
      </>
  )
}

export default SharedAuth