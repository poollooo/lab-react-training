import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className='flex flex-row'>
      <div>
        <img src={picture} alt="profile" />
      </div>
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Birth date:</strong> {birth}</p>
      </div>
    <div></div>
    </div> 

  )
}

export default IdCard