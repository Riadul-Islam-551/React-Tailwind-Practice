import React from 'react'

const Links = ({links}) => {
  return (
    <div>
      
        <li className='mx-3 '><a href={links.path}>{links.name}</a></li>
      
    </div>
  )
}

export default Links
