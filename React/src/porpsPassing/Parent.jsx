import React from 'react'
import Child from './Child'

const Parent = () => {
    const fullname = "John Doe"
    function Alert(){
        alert("Hosla Endhan badla")
    }
    return (
        <>
        <div>Parent</div>
        <h1>Rendered in Parent component:{fullname}</h1>
        <Child name={fullname} Alert={Alert}/>
        </>
    )
}

export default Parent