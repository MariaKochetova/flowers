import React from 'react'

export const HeaderComponent = (props) => {
  return (
    <div style={{
        height: "100%",
        paddingRight: "16px",
        paddingLeft: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <p>{props.text}</p>
    </div>
  )
}
