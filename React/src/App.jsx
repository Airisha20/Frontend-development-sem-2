import React from 'react'
import Parent from './porpsPassing/Parent'
import IfElse from './ConditionalRender/IfElse'
import Ternary from './ConditionalRender/Ternary'
import AndOperator from './ConditionalRender/AndOperator'
import MultipleJSX from './ConditionalRender/MultipleJSX'
import UseStateOne from './Hooks/UseStateOne'
import ShowHide from './Hooks/ShowHide'

const App = () => {
  return (
    <>
    <div>App</div>
    {/* <Parent/>
    <IfElse/>
    <Ternary/>
    <AndOperator/>
    <MultipleJSX/>
    <UseStateOne/> */}
    {/* <ShowHide/> */}
    <DarkLight/>
    </>
  )
}

export default App