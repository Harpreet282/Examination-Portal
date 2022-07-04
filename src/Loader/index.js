import React from 'react'
import './loader.css'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const Loader = () => {
  return (
    <div className="loader">
<ClimbingBoxLoader
size={30}
color={"#F4831F"}
/>
  </div>
  )
}

export default Loader