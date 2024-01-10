import React from 'react'

function Button(props) {
  return (
    <>
        <button onClick={props.clickFunc}>{props.text}</button>
    </>
  )
}

export default Button