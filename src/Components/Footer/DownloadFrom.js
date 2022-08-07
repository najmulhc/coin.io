import React from 'react'

const DownloadFrom = ({children, from, platform}) => {
  return (
      <div className='bg-base-100 p-2 sm:p-3 md:p-4 rounded-lg flex items-center gap-4 text-white md:min-w-[175px]' >
        <h1 className='text-md sm:text-xl md:text-2xl '>  {children}</h1>
          <div className='hidden md:block'>
              <h4 className='font-light text-xs '>{from}</h4>
              <h2 className='font-semibold text-sm'>{platform}</h2>
          </div>
    </div>
  )
}

export default DownloadFrom