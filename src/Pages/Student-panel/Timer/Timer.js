import React, { useEffect, useState } from 'react'
import "./Timer.css"

import getDaysToGo from 'get-days-to-go'
import { useNavigate } from 'react-router-dom'


const Timer = (props) => {

  const navigate = useNavigate()

    const [time,setTime] = useState(getDaysToGo(props.date))
   
      setInterval(() => {
        setTime(getDaysToGo(props.date))
      },1000)

  return (
    <>
    { time.days === 0 && time.hrs === 0 && time.mins === 10 ? 
      <>
         apply now
      </>
      :
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
    }
</>

  )
}
export default Timer