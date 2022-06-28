import React from 'react'
import './newRequests.css'

const NewRequests = () => {
  return (
    <section className='new-requests-page my-3'>
        <div className="content-box p-2">
           <div className="row">
            <div className="col-md-6 requests-left-content">
            <div className="email">priya@gmial.com</div>
            </div>
            <div className="col-md-6 d-flex requests-right-content">
                <div ><button className='btn'>Approve</button></div>
                <div ><button className='btn'>Decline</button></div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default NewRequests