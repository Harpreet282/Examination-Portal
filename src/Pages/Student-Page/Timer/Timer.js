import React, { useState } from 'react'

const Timer = (props) => {


    let today = Date.now()
    let exam = Date.parse(new Date('2022-07-05'));
    
    let ms = exam - today;
    let days = Math.ceil(ms/86400000);
    
    console.log(days)
  return (
    <div>
        <h1>{days}<span>days to go</span></h1>

    </div>
  )
}

export default Timer