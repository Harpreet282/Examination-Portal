import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify';

const ExamGuildelines = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = () => {
  

    navigate("/fullScreenModal")
  }
  console.log(location.state.detail,'guideline')

  const handleButton=()=>{

    
    const cb = document.getElementById("exam-checkbox")
    // console.log(cb.checked);

    cb.checked  === false ? toast.error('Please accept the terms and conditions') :  navigate("/fullScreenModal",{state : {data : location.state.detail}});
    
  }
  return (
    <div className='exam-guideline-section margin-from-top'> 
      <h1 className='text-center py-3'>Examination Instructions to students</h1>
      <div className='instruction-section my-5 mx-3'>
        <ol>
          <div className='instructions'>
          <li>Be in uniform(except pass out and PG students). If not, get HOD’s/class advisor’s letter of permission.</li>
          <li>Be Punctual. Late entry permitted only till the first 30 minutes. Students are expected to be seated in the examination hall by 09:30am/01:30pm. The exam hall will be closed between 09:30am/01:30pm and 09:50am/01:50pm to avoid inconvenience during question paper distribution. Late comers can enter the exam hall only by 09:50 am/01:50 pm.</li>
          <li>You may leave the hall after the first 30 minutes of the exam.</li>
          <li>Wear your identity card. If not in possession, get HOD’s/class advisor’s letter of permission.</li>
          <li>Please switch off your mobile phones and keep it in your bags/hand it over to the invigilator as soon as you enter the examination hall. If any electronic gadget is found to be possessed by the student, the same shall be confiscated and submitted with the Academic Cell along with the identity card/Admit Card.</li>
          <li>Please occupy your seat at the allotted place in the examination hall at the strike of the first bell, but not before. Answer booklets will be issued by the invigilators only. DO NOT FORGET to Fill all the appropriate columns and Sign on the facing sheet of the answer booklet.</li>
          <li>Keep your Admit Card on the table. Get permission from the HOD, if not in possession.</li>
          <li>You are not permitted to pass the question paper, much less the answer book, to other students. You are also not allowed to borrow calculators, or any other materials from other students</li>
          <li>Students are not permitted to leave the examination hall in the first half an hour.</li>
          <li>Students are advised to leave the examination premises as soon as the examination is over. Thronging in the verandah causes inconvenience.</li>
          <li>Students are not allowed to stand outside the examination hall after the first bell. Students are generally not permitted to enter the examination hall after the second bell. Genuine late comers will be allowed to enter the hall, but only in the first half an hour.</li>
          </div>
        </ol>
      </div>
      <div className='checkbox-section'>
        <input type="checkbox" className='ml-4' style={{height:"15px", width:"15px"}}  id="exam-checkbox"/>
        <label htmlFor="instruction" className='ml-3' style={{fontSize:"18px", fontWeight:"500"}}>
          <p>I have read all the conditions mentioned above and accept all the terms and conditions.</p>
        </label>
      </div>
      <div className='button-section'>
        <button type="button"
           onClick={handleButton} 
           className="btn my-2 mr-5 btn-success" 
           style={{ padding:"8px 25px 8px 25px", float:"right",fontWeight:"500"}}
           data-toggle="modal" 
           data-target="#exampleModalCenter"
           onSubmit={openModal}
        >
          Start Examination 
        </button>
      </div>
      <ToastContainer  autoClose={4000} />
    </div>
  )
}

export default ExamGuildelines;
