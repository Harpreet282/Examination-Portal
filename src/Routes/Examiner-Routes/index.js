import React from 'react'
import { Routes, Route } from "react-router-dom";
import CreateCourse from '../../Pages/Examiner-Panel/Create-Course/CreateCourse'
import CreateStudents from '../../Pages/Examiner-Panel/Create-Students/CreateStudents';
import ViewCourses from '../../Pages/Examiner-Panel/ViewCourses/ViewCourses';
import ViewStudent from '../../Pages/Examiner-Panel/ViewStudent/ViewStudent';
import AddSubject from '../../Pages/Examiner-Panel/AddSubject/AddSubject';
import ViewSubject from '../../Pages/Examiner-Panel/ViewSubject/ViewSubject';
import CreateSubject from '../../Pages/Examiner-Panel/Create-Subject/CreateSubject';
import CreateExam from '../../Pages/Examiner-Panel/CreateExam/CreateExam';
// import ExamDetails from '../../Pages/Examiner-Panel/ExamDetails/ExamDetails';
const Index = () => {
  return (
    <>
<Routes>
    <Route path="/AddStudent" element={<CreateStudents />} />
    <Route path="/" element={<CreateCourse />} />
    <Route path="/viewCourse" element={<ViewCourses />} />
    <Route path="/viewStudents" element={<ViewStudent />} />
    <Route path="/AddSubject" element={<AddSubject />} />
    <Route path="/viewAllSubject" element={<ViewSubject />} />
    <Route path="/CreateSubject" element={<CreateSubject />} />
    <Route path="/CreateExam" element={<CreateExam/>} />
    {/* <Route path="/examDetails" element={<ExamDetails/>}/> */}

    </Routes>
    </>
  )
}

export default Index