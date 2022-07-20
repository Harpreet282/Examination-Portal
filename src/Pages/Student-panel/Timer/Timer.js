import React, { useEffect, useState } from 'react'
import "./Timer.css"

import getDaysToGo from 'get-days-to-go'
import { useNavigate } from 'react-router-dom'


const Timer = (props) => {

  const navigate = useNavigate()

    const [time,setTime] = useState({})

    //// y date  ko milliseconds mai convert krega 
    const dataSec = new Date(props.date).getTime();

    // y hrs ko milliseconds mai convert krega 
    const hrsSec = parseInt(props.starttime.split(":")[0]) * 3600000;

    // y mins ko milliseconds mai convert krega 
    const minSec = parseInt(props.starttime.split(":")[1]) * 60000;

      setInterval(() => {
        setTime(getDaysToGo(new Date(dataSec+hrsSec+minSec)))
      },1000)

      const openModal = () =>   {

        console.log()
        navigate("/keymodal")
    
      }
    
      


  return (
    <>
  
    {
      getDaysToGo(props.date) === 0 && Number(props.starttime.split(':')[0]) ===  new Date().getHours() && Number(props.starttime.split(':')[1]) ===  new Date().getMinutes() ? 
        <div className='timer-btn-apply' style={{backgroundColor:"blue"}}>
          <button data-toggle="modal" data-target="#staticBackdrop" onClick={()=>{openModal()}}>Apply Now!!</button>
        </div>
        
      :
      getDaysToGo(props.date) === new Date().getDate() && Number(props.end.split(':')[0]) <=  new Date().getHours() && Number(props.end.split(':')[1]) <=  new Date().getMinutes() ? 
      <div className='timer-btn-time-up'>
        <p>Time's Up!!</p>
      </div>
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