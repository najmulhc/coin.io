import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase.init' 
import { createImageFromInitials } from '../../Utils/ProfileImg';
const ProfileNavTop = () => {
    const [user] = useAuthState(auth);  
    console.log(user)
  return (
      <div className='flex flex-col items-center mb-12'>
          <img src={createImageFromInitials(100, user.email)} className="rounded-full mb-4 p-4"  alt="Profile pic" />
          <h3 className='text-xl '>{ user?.displayName || "User Name"}</h3>
          <p className='text-md opacity-50'>{user?.email}</p>
      </div>
  )
}

export default ProfileNavTop