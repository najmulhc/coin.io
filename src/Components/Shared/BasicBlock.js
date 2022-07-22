import React from 'react'

const BasicBlock = ({children, width}) => {
  return (
      <div className={`bg-neutral p-6 rounded-xl inline-block w-${width}`}>{children}</div>
  )
}

export default BasicBlock