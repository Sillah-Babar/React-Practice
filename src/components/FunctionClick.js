import React from 'react'

export default function FunctionClick() {
   function clickHandler()
   {
    console.log("click handler")
   }
    return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

