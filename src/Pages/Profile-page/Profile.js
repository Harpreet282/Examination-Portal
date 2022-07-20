import React from 'react'
import './Profile.css'
import profileImg from "../../Assets/styles/Profile/profile-image.png"

const Profile = () => {

    const data =[
        {
            id:1,
            title:"Attendance",
            percentage:85
        },
        {
            id:2,
            title:"Performance",
            percentage:65
        },
        {
            id:3,
            title:"Other Actitvities",
            percentage:75
        },
        {
            id:4,
            title:"Culture & Sports",
            percentage:90
        }
    ]
    return (
        <section className='profile-page'>
            <div className='row'>
                <div className="col-md-3">
                    <p>Navbar come heree </p>
                </div>
                <div className='col-md-7 mt-5'>
                    <div className='profile-page-header'>
                        <div className='col-md-6'>
                            <h1 className='mt-4 '>Hi, Alyssa</h1>
                            <p>Ready to start your day with some pitch decks.</p>
                        </div>
                        <div className='col-md-6'>
                            <img src={profileImg} alt="/" /> 
                        </div>
                    </div>  
                    <h5 className='mt-5 ml-1'>Overview</h5>

                    <div className='reviews'>
                        {data.map((content,i)=>(
                            <div key={content.id}>
                                <div className='row' >
                                    <div className='col-12'>

                                        <ul className='mt-2' style={{paddingLeft:"0px"}}>
                                            <div className='profile-page-content'>
                                                <li className='reviews-title' style={{backgroundColor:`${i===0 ? "#FFEFD5" : i===1 ? "#E6E6FA"
                                                : i===2 ? "#F5DEB3" : i===3 ? "#DCDCDC" : "#fff"}`}}>
                                                <span style={{marginTop:"5px"}}>{content.percentage}%</span><br/>
                                                    {content.title}</li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>
                <div className='col-md-2'>
 
                </div>
            </div>
        </section>
    )
}

export default Profile