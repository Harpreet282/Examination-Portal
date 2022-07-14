import React, { useEffect, useState } from 'react'
import "./Timer.css"

import getDaysToGo from 'get-days-to-go'
import { useNavigate } from 'react-router-dom'


const Timer = (props) => {

  const navigate = useNavigate()

    const [time,setTime] = useState(getDaysToGo())

    //// y date  ko milliseconds mai convert krega 
    const dataSec = new Date(props.date).getTime();

    // y hrs ko milliseconds mai convert krega 
    const hrsSec = parseInt(props.time.split(":"[0])) * 3600000;
    // y mins ko milliseconds mai convert krega 
    const minSec = parseInt(props.time.split(":")[1]) * 60000;

      setInterval(() => {
        setTime(getDaysToGo(new Date(dataSec+hrsSec+minSec)))
      },1000)

  return (
    <>
    { time.days === 0 && time.hrs === 0 && time.mins <= 10 ? 
      <>
        <div className='timer-btn'>
          <button>Apply Now!!</button>
        </div>
        
      </>
      :
    <section className='timer-content'>
      <div className='timer-content-para' style={{display:"flex", textAlign:"center",justifyContent:"center"}}>
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
      </div>
    </section>
    }
</>

  )
}
export default Timer