import React from 'react'
import './myStyle.css'
function StyleSheet(props) {
  let className = props.primary? 'primary':''
  return (
    <div>
      <h2 className={`${className} font-xl`}>this is a style sheet</h2>
    </div>
  )
}

export default StyleSheet
