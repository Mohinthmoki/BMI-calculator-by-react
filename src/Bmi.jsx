import React, { useState } from 'react'

const Bmi = () => {
    const [height,setheight]=useState("")
    const [weight,setweight]=useState("")
    const [bmi,setbmi]=useState(null)
    const[status,setstatus]=useState("")
    const[error,seterror]=useState("")


    function click(){
        let h=/^\d+$/.test(height)
        let w=/^\d+$/.test(weight)
        if(h && w){
            let hm=height/100
            let b=weight/(hm*hm)
            setbmi(b.toFixed(2))
        
            if(b<18.5){
                setstatus("Underweight")
            }
            else if(b>=18.5&&b<=24.5){
                setstatus("Normal")
            }
            else if(b>=25&&b<=29.9){
                setstatus("Over Weight")
            }
            else{
                setstatus("Obese")
            }
            seterror("")
            }
            else{
                setbmi(null)
                setstatus("")
                seterror("please enter a valid numeric values for height and weight")
            }
    }


    

    return (
    <>
   <div className="container">
    <div className="box"></div>
    <div className="data">
        <h1>BMI Calculator</h1>
        {error &&(<p className="error">{error}</p>)}
        <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input type="text" id="height" value={height} onChange={(e) =>setheight(e.target.value)}/>
        </div>
        <div className="input-container">
            <label htmlFor="weight">weight (kg):</label>
            <input type="text" id="weight"  value={weight} onChange={(e) =>setweight(e.target.value)} />
        </div>
        <button onClick={click}>Calculate BMI</button>
        <button className="btn" onClick={() =>{
                setheight("")
                setweight("")
                setbmi(null)
                setstatus("")
        }}>Clear All</button>

       {bmi!==null &&(<div className="result">
            <p>Your BMI is:{bmi}</p>
            <p>Status: {status}</p>
        </div>
        )}
      
    </div>
   
   </div>
  
  </>
  )
}
export default Bmi