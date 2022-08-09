import React from 'react'
import {Stepper,StepLabel,Step} from '@mui/material'
import { multiStepContext } from './StepContext';
import CreateExam from '../../CreateExam/CreateExam';
import CreateQuestion from '../../Create-question/CreateQuestion';
import { useContext } from 'react';
const Stepper1 = () => {
  const {currentStep,finalData}=useContext(multiStepContext);
  function showStep(ststep){
    switch(ststep){
      case 1:
        return <CreateExam/>
      case 2:
         return <CreateQuestion/> 
      default:return null
    }
  }
  return (
    <div>
       <div  className="stepper">
      <Stepper style={{width:"18%"}} activeStep={currentStep-1 } orientation="horizontal">
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        </Stepper>
       
        {showStep(currentStep)}<br/><br/>
       {finalData.length>0?<CreateExam/>:null } 
        </div>
    </div>
  )
}

export default Stepper1;
