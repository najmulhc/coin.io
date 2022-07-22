import React from 'react'

const BasicBlock = ({children, width}) => {
  return (
      <div className={`bg-neutral p-2 md:p-4 rounded-xl inline-block w-${width}`}>{children}</div>
  )
}

export default BasicBlock