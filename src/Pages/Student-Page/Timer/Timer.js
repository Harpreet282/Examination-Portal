import React, { useEffect, useState } from 'react'
import "./Timer.css"

import getDaysToGo from 'get-days-to-go'


const Timer = (props) => {

  console.log(">>>>>props", props);

  const time = getDaysToGo(props.date)  
  console.log(time,'timers')    





  console.log(time.days);
  return (
   
    <section className='timer-content'>
      <p className='timer-content-para' style={{display:"flex", textAlign:"center",justifyContent:"center"}}>

        <div className='timer-span'>
          <span>{time.days}</span><br/>
          
          <span>{time.days === 1 ? "DAY" : "DAYS"} </span>
        </div>
        <a>:</a>
        <div className='timer-span'>
          <span>{time.hrs}</span><br/>
          <span>HRS</span>
        </div>
        <a>:</a>
        <div className='timer-span'>
          <span>{time.mins}</span><br/>
          <span>MINS</span>
        </div>
        <a>:</a>
        <div className='timer-span'>
          <span>{time.secs}</span><br/>
          <span>SEC</span>
        </div>
      
    </p>
    </section>
  )
}

export default Timer