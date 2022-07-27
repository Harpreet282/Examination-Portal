import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <div className='button-component'>
      <button type="submit" className={`${props.className} btn`}>{props.text}</button>
    </div>
  )
}

export default Button;

