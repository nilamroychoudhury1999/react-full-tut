import React from 'react'

function FunctionClick() {
    function changeEvent(){
        console.log("hlw")
    }
  return (
    <div><button onClick={changeEvent}>click </button></div>
  )
}

export default FunctionClick