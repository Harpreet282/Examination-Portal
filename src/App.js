import SignUp from "./Pages/Signup-Page/SignUp";
import Login from "./Pages/Login-Page/Login";
import {Routes,Route} from 'react-router-dom';
import ExaminerDashboard from './Pages/Examiner-Page/Examiner-Dashboard/ExaminerDashboard';
import Home from "./Pages/Home-Page/Home";
function App() {
  return (
    <>
    
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<ExaminerDashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
