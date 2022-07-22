import React from 'react'

const BasicBlock = ({children}) => {
  return (
      <div className='bg-neutral p-8 rounded-xl inline-block'>{children}</div>
  )
}

export default BasicBlock