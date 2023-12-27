import React from 'react'
import { heading } from '../strings'

const Heading = () => {
  return (
    <div>
       <h1 className="heading">
    {heading} <img src="./checklist.png" alt="icon" height="60px" style={{paddingBottom:"15px"}}/>
  </h1>
    </div>
  )
}

export default Heading
