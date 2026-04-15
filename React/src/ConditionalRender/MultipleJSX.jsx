import React from 'react'

const MultipleJSX = () => {

    const isStudent = true;

  return (
    <>
        <div>MultipleJSX</div>  
        {isStudent? (
            <div>
                <h1>Student Dashboard</h1>
                <p>Welcome to the course</p>
            </div>
        ) : (
            <div> 
                <h1>Guest Dashboard</h1>
                <p>please enroll to the course</p>
            </div>    
        )
    }
    </>
  )
}

export default MultipleJSX