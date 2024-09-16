import React from 'react'
import "./title.scss"
const Title = ({children,className}) => {
  return (
    <h1 className={className} >{children}</h1>

  )
}

export default Title