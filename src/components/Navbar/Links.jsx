import React from 'react'

const Links = ({links}) => {
  return (
    <div>
      
        <li className='m-3 md:m-0 md:mx-2 p-2 rounded-xl md:rounded text-center bg-gray-700 md:bg-gray-200 text-white md:text-black font-bold'><a href={links.path}>{links.name}</a></li>
      
    </div>
  )
}

export default Links
