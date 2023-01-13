import React from 'react'

function child(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greent Parent</button>
    </div>
  )
}

export default child
