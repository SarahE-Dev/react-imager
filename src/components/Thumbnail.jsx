import React from 'react'

function Thumbnail(props) {
  return (
    <>
        <img key={props.path} onClick={()=>props.clickFunc(props.path, props.imageNum)} style={{width: 150, padding: 20}} src={props.path} />
    </>
  )
}

export default Thumbnail
