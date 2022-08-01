import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2"

const ReactCountdown = (props) => { 
  const [remaining, setRemaining] = useState(props.remaining);
  useMemo(()=>{},[remaining]);
  const navigate = useNavigate();
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
           Swal.fire({
            icon: 'error',
            title: "Times out!!",
            text: 'Something went wrong!',

            confirmButtonText:"Ok",
          }).then(
            ()=>{
              navigate("/dashboard")
          })
        } 
        else {
          // Render a countdow
          setRemaining(hours * 3600000 + minutes * 60000 + seconds * 1000);
          return <span>{hours}:{minutes}:{seconds}</span>;
        }
      };

  return (
    <div>
        <Countdown
    date={Date.now() + remaining}
    renderer={renderer}
  />
    </div>
  )
}

export default ReactCountdown