import React from 'react'
import Count from './Count'

function Counter() {
    const [count, setCount] = React.useState(0)
    function subtract(){
       setCount(function(prevCount){
        return prevCount - 1
       })
    }
    function add(){
        setCount(function(prevCount){
            return prevCount + 1
           })
    }
  return (
    <div className="counter">
        <button className="counter--minus" onClick={subtract}>-</button>
        <Count number = {count}/>
        <button className="counter--plus" onClick={add}>+</button>
    </div>
  )
}

export default Counter