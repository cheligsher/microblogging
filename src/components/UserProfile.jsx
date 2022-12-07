import React from 'react'
import '../styles/profile.css'

function userProfile({ userName }) {
  return (
    <div className='mx-auto text-center user-profile-div d-flex flex-column'>
        <h2 className='text-light mb-3 text-start pt-4'>Profile</h2>
        <div className='text-light text-start'>User Name</div>
        <input type="text" className='p-2 text-light w-100'>{userName}</input>
        <div className='text-start mt-3 d-flex justify-content-end'>
                <button className='btn btn-primary'>Save</button>
        </div>
    </div>
  )
}

export default userProfile