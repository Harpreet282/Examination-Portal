import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Exam from '../../Pages/Student-panel/studentView/Exams/Exams';
import Results from '../../Pages/Student-panel/studentView/Results';
import ExamGuildelines from '../../Pages/Student-panel/studentView/Exams/ExamGuildelines';
import Transaction from '../../Pages/Student-panel/studentView/Transaction';

function Index() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Exam />} />
      <Route path="/results" element={<Results />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/examguidelines" element={<ExamGuildelines />} />
    </Routes>
    </>
  )
    
}

export default Index;
