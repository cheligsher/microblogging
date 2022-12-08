import React, { useState } from 'react'
import '../styles/index.css'
import '../styles/profile.css'

function UserProfile({ userName, userChange}) {
  const saveUser = () => {
    userChange(user);
  }

  const [user, setUser] = useState(userName);

  return (
    <div className='mx-auto text-center user-profile-div d-flex flex-column'>
        <h2 className='text-light mb-3 text-start pt-4'>Profile</h2>
        <div className='text-light text-start'>User Name</div>
        <input type="text" className='p-2 text-light w-100' value={user} onChange={e => setUser(e.target.value)}/>
        <div className='text-start mt-3 d-flex justify-content-end'>
                <button onClick={saveUser}>Save</button>
        </div>
    </div>
  )
}

export default UserProfile