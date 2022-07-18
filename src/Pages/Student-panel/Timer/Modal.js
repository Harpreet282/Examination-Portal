import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';
import ExamGuildelines from '../studentView/Exams/ExamGuildelines';

function Modal() {
  const navigate = useNavigate();
  // const submitHandler = () => {
  //     // e.preventDefault()
  //     navigate('/studentDashboard/examguidelines')

  // }

  return (
    <div>
      <div className="modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Student  Verification</h5>
              <button type="button" onClick={() => navigate('/studentDashboard/')} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="password"
                placeholder="Enter your exam key"
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => navigate('/studentDashboard/')}>Close</button>
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => navigate('/studentDashboard/examguidelines')}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
