import React from 'react'

function NameList() {
    const names=['Sillah','Babar','rehman','rehman']
    const namesList=names.map((name,index)=><h2 key={index}>{name}</h2>)
  return (
    <div>
    {namesList}
    </div>
  )
}

export default NameList

