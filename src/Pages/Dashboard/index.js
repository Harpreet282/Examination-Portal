import React from "react";
import * as myConstants from "../../Constants";
import AdminDashboard from "../Admin-panel/Admin-Dashboard";
import StudentDashboard from "../Student-panel/Student-Dashboard";
import ExaminerDashbord from "../Examiner-Panel/Dashboard/ExaminerDashbord";

function Dashboard() {
  return (
    <section className="dashboard-page margin-from-top">
      {JSON.parse(localStorage.getItem("data")).userType ===
      myConstants.ADMIN ? (
        <AdminDashboard />
      ) : JSON.parse(localStorage.getItem("data")).userType ===
        myConstants.STUDENT ? (
        <StudentDashboard />
      ) : (
        <ExaminerDashbord />
      )}
    </section>
  );
}

export default Dashboard;
