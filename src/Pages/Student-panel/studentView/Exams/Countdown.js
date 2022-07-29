import React from 'react'
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2"

const ReactCountdown = () => {

    const navigate = useNavigate()

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
          // Render a countdown
          return <span>{minutes}:{seconds}</span>;
        }
      };

  return (
    <div>
        <Countdown
    date={Date.now() + 3600000
    }
    renderer={renderer}
  />
    </div>
  )
}

export default ReactCountdown