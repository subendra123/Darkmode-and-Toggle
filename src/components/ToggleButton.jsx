import React from 'react'
import { useState } from 'react'

const ToggleButton = () => {
    const[myname, setMyName] = useState("Subendra");

    const changeName = () => {
        let val = myname;

        if(val === "Subendra") {
            setMyName("Anjan Mandal")
        }else {
            setMyName("Subendra");
        }
    }
  return (
  <>
  <div className="main_div">
  <div className="text_area">
  <h1>{myname}</h1>
  </div>
  <div className="button_area">
  <button onClick={() => changeName()}>Toggle </button>
  </div>
  </div>
  
 
  </>
  )
}

export default ToggleButton