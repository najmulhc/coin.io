import React from 'react'
import { FacebookAuthProvider,   GoogleAuthProvider } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import {FaApple, FaFacebookF} from 'react-icons/fa'
import { auth } from '../../firebase.init'
import { signInWithPopup } from 'firebase/auth' 
import { useNavigate } from 'react-router-dom'
const SharedAuth = () => {
    const navigate = useNavigate();
    const Gprovider = new GoogleAuthProvider();
    const Fprovider = new FacebookAuthProvider();
    const facebook = e => {
        e.preventDefault();
        signInWithPopup(auth,Fprovider).then((result) => {
            console.log(result)
navigate("/")
    }).catch((error) => {
            console.log(error.error)
        })
    } 
    const google = e => {
        e.preventDefault();
        signInWithPopup(auth,Gprovider).then((result) => {
            console.log(result)
            navigate("/")
        }).catch((error) => {
                console.log(error.error)
            })
    }
     
  return (
      <>
        <div className="divider">or continue with</div>
          <div className='w-full flex justify-center items-center my-4 gap-4'>
              <button className='bg-base-100 inline-block p-2 text-3xl rounded-md' onClick={google}><FcGoogle/></button>
              <button className='bg-base-100 inline-block p-2 text-3xl rounded-md'><FaApple/></button>
              <button className='bg-base-100 inline-block p-2 text-3xl rounded-md' onClick={facebook}><FaFacebookF className='text-[#3D6AD7]'/></button>
        </div>
      </>
  )
}

export default SharedAuth