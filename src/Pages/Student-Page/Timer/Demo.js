import React, { useState } from 'react'
import getDaysToGo from 'get-days-to-go'

const Demo = () => {


    let time = getDaysToGo('2022-06-02');
    





  return (
    <div>demo
      <p>{time.days} days</p> 
       <p>{time.hrs} hrs</p>
       <p> {time.mins} mins</p>
      <p>secs {time.secs}</p>
    </div>
  )
}

export default Demo