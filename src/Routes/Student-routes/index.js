import React from 'react'
import { Routes, Route } from "react-router-dom";
import Exam from '../../Pages/Student-panel/studentView/Exams/Exams'
import Results from '../../Pages/Student-panel/studentView/Results'
import Transaction from '../../Pages/Student-panel/studentView/Transaction'

const Index = () => {
  return (
    <>
<Routes>
    <Route path='/' element={<Exam />} />
    <Route path="/results" element={<Results />} />
    <Route path="/transaction" element={<Transaction />} />
  </Routes>
    </>
  )
}

export default Index