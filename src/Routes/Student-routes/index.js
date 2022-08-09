import React from "react";
import { Routes, Route } from "react-router-dom";
import Exam from "../../Pages/Student-panel/studentView/Exams/Exams";
import Results from "../../Pages/Student-panel/studentView/Results";
import Transaction from "../../Pages/Student-panel/studentView/Transaction";
// import Modal from "../../Pages/Student-panel/Timer/Modal";
import KeyModal from '../../Modals/KeyModal'
import ExamGuildelines from "../../Pages/Student-panel/studentView/Exams/ExamGuildelines"

import Error from "../../Pages/Error";

function Index() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Exam />} />
      <Route path="/results" element={<Results />} />
      <Route path="/transaction" element={<Transaction />} />
      {/* <Route path="/examguidelines" element={<ExamGuildelines />} /> */}
      
      {/* <Route path="/modal" element={<Modal />} /> */}
      <Route path='/keymodal' element={<KeyModal />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  )
    
}

export default Index;
