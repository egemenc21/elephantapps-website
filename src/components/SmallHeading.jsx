import React from 'react'

const SmallHeading = ({name,className}) => {
  return (
    <span className={"text-[#ff5354] text-xs font-bold uppercase " + className}>{name}</span>
  )
}

export default SmallHeading