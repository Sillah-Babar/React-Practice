import React from 'react'

function MemoComponent({name}) {
    console.log("Rendering the memo componenet")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComponent)
