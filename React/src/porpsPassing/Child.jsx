import React from 'react'

const Child = ({name, alert}) => {
    return (
        <>
        <div>Child</div>
        <h1>Rendered in Child component:{name}</h1>
        <button onClick={alert}>Click me</button>
        </>
    )
}

export default Child