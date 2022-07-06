import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <section className='profile-page'>
            <div className='container all-containers my-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='content'>
                            <div className='profile-user-icon'>
                                <img src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' alt='user-icon' />
                            </div>
                            <div className='row profile-content'>
                                <div className='col-md-6 col-sm-12'>
                                    <div className='left-content'>
                                        <p>Name: <span>Aditi</span></p>
                                        <p>Role: <span>Examiner</span></p>
                                    </div>   
                                </div>
                                <div className='col-md-6 col-sm-12'>
                                    <div className='right-content'>
                                        <p>Email: <span>mehtaaditi0119@gmail.com</span></p>
                                        <p>Phone-Number: <span>8445570606</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile