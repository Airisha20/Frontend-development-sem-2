import React from 'react'

const AndOperator = () => {

    const isAdmin = true;

  return (
    <>
    <div>Dashboard</div>
    {isAdmin && <h2>Welcome Admin</h2>}
    </>
  )
}

export default AndOperator