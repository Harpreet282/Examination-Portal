import React from 'react'
import './loader.css';
import FadeLoader from 'react-spinners/FadeLoader';

function Loader() {
  return (
    <div className="loader">
      <FadeLoader
        // size={20}
        color="#4A171E"
      />
  </div>
  )
}

export default Loader;
