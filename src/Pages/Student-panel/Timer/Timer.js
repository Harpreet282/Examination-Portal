import moment from "moment";
import React, { useEffect, useState } from "react";
import "./Timer.css";
import { useNavigate } from "react-router-dom";
import getDaysToGo from "get-days-to-go";

function Timer({ date, starttime, end , data}) {
  let eventStartStamp = Date.parse(`${date.split("T")[0]} ${starttime}`);
  let eventEndStamp = Date.parse(`${date.split("T")[0]} ${end}`);
  let currentStamp = new Date().getTime();
  let startTimeRemaining = eventStartStamp - currentStamp;
  const [duration, setDuration] = useState(moment.duration(startTimeRemaining));

  const [time, setTime] = useState(getDaysToGo(date));

  useEffect(() => {
    // console.log(
    //   eventStartStamp,
    //   "...",
    //   eventEndStamp,
    //   "....",
    //   currentStamp,
    //   "....",
    //   startTimeRemaining,
    //   "...",
    //   duration
    // );

    const interval = setInterval(() => {
      startTimeRemaining = startTimeRemaining - 1000;
      setDuration(moment.duration(startTimeRemaining));
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  const navigate = useNavigate();

  const openModal = () => {

    navigate("/keymodal",{state : { studentID : data.studentID,examID : data.examID}});
  };

  return (
    <div className="timer-page">
      {eventStartStamp <= currentStamp && eventEndStamp >= currentStamp ? (
        <div className="timer-btn-apply" style={{ backgroundColor: "blue" }}>
          <button
            data-toggle="modal"
            data-target="#staticBackdrop"
            onClick={() => {
              openModal()
            }}
          >
            Apply Now!!
          </button>
        </div>
      ) : eventEndStamp < currentStamp ? (
        <div className="timer-btn-time-up">
          <div>Time's Up!!</div>
        </div>
      ) : (
        ""
      )}

      {eventStartStamp > currentStamp && (
        <section className="timer-content">
          <div
            className="timer-content-para"
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <div className="timer-span">
              <span>{duration._data.days}</span>
              <br />
              <span>{duration._data.days > 1 ? "DAYS" : "DAY"} </span>
            </div>
            <a>:</a>
            <div className="timer-span">
              <span>{duration._data.hours}</span>
              <br />
              <span>HRS</span>
              {/* {time.hrs === time ? "Apply for exam" : ""} */}
            </div>
            <a>:</a>
            <div className="timer-span">
              <span>{duration._data.minutes}</span>
              <br />
              <span>MINS</span>
            </div>
            <a>:</a>
            <div className="timer-span">
              <span>{duration._data.seconds}</span>
              <br />
              <span>SEC</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
export default Timer;
