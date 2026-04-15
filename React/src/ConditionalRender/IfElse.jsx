import React from 'react'
const IfElse = () => {
    const age = 20;
    let msg;

    if(age>20){
        msg = "You can watch Project Hail Mary"
    }
    else{
        msg = "Watch disney"
    }
    return (
        <>
        <div>IfElse</div>
        <h2>{msg}</h2>
        </>
    )
}

export default IfElse