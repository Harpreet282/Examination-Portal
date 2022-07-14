import React from 'react'
import './loader.css'
import PuffLoader from 'react-spinners/PuffLoader'

const Loader = () => {
  return (
    <div className="loader">
<PuffLoader
size={30}
color={"#F4831F"}
/>
  </div>
  )
}

export default Loader