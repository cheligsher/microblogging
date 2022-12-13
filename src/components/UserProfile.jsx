import React, { useState } from 'react'
import '../styles/index.css'
import '../styles/profile.css'

function UserProfile({ userName, userChange}) {
  const saveUser = () => {
    userChange(user);
    showIsSaved(true)
  }

  const [user, setUser] = useState(userName);
  const [isSaved, showIsSaved] = useState(false)
  const isSavedMessage = <div className='text-light'>
    <p>Your user name has been saved!</p>
    <p>Go back to the <a href="/" className='text-decoration-none'>home</a> page?</p>
    </div>

  return (
    <div className='mx-auto mt-5 text-center user-profile-div d-flex flex-column'>
        <div className='d-flex flex-row justify-content-between'>
        <h2 className='text-light mb-3 text-start pt-4'>Profile</h2>
        <img src={require("../images/greenbird.png")} alt="" />
        </div>
        <div className='text-light text-start'>User Name</div>
        <input type="text" className='p-2 text-light w-100' value={user} onChange={e => setUser(e.target.value)}/>
        
        <div class="input-group mt-4">
  <input type="file" className="form-control" id="inputGroupFile02"/>
</div>
        <div className='text-start mt-3 d-flex justify-content-end'>
                <button onClick={saveUser}>Save</button>
        </div>
          {isSaved ? isSavedMessage : ""}
    </div>
  )
}

export default UserProfile