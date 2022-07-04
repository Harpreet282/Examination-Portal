import React from 'react'

const Results = () => {

  const data = [
    {
      id: 1,
      subject:"Discrete Mathematics",
      marksObtained: 39,
      totalMarks: 50,
      grade: "B"
    },
    {
      id: 2,
      subject:"Programming in C",
      marksObtained: 47,
      totalMarks: 50,
      grade: "A"
    },
    {
      id: 3,
      subject:"Discrete Mathematics",
      marksObtained: 45,
      totalMarks: 50,
      grade: "A"
    },
    {
      id: 4,
      subject:"human Values and Ethics",
      marksObtained: 40,
      totalMarks: 50,
      grade: "A"
    },
    {
      id: 5,
      subject:"English Communication",
      totalMarks: 50,
      marksObtained: 48,
      grade: "A"
    },
  ]
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <table className='table table-bordered'>
              <thead className='thead-light'>
                <tr>
                  <th scope='col'></th>
                  <th scope='col'>Subject</th>
                  <th scope='col'>Marks Obtained</th>
                  <th scope='col'> Total Marks</th>
                  <th scope='col'>Grade</th>
                </tr>
              </thead>
                  <tbody>
                  {data.map((content) => {
                    return(
                      <>

                        <tr key={content.id}>
                          <td scope='col'>{content.id}</td>
                          <td scope='row'>{content.subject}</td>
                          <td scope='row'>{content.marksObtained}</td>
                          <td scope='row'>{content.totalMarks}</td>
                          <td scope='row'>{content.grade}</td>
                        </tr>
                      </>
                    )
                   })}
                </tbody> 
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results