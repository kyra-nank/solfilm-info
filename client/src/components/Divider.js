import React from 'react';

export default () => {

  const hrStyle = {
    left: "50%",
    margin: "0 -50% 0 -50%",
    maxWidth: "100%",
    position: "absolute",
    right: "50%",
    width: "100%",
    zIndex: "100",
    height: "2px",
    border: "none",
    backgroundColor: "#FFF"
  }

  return (
    <hr style={hrStyle}/>
  )
}