import React from 'react'

const Ternary = () => {

    const isLoggedIn = true;
1
    return(
        <>
        <div>Ternary</div>
        <h1>{isLoggedIn?"Welcome to the page":"Access Denied"}</h1>
        </>
    )
}

export default Ternary