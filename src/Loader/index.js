import React from 'react'
import './loader.css'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const Loader = () => {
  return (
    <div className="loader">
<ClimbingBoxLoader
size={30}
color={"#000"}
/>
  </div>
  )
}

export default Loader