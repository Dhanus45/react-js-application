import { useState } from "react"
export default function Functional(){
    const [Counter,setCounter]=useState(0);
    function incremeant(){
        setCounter(Counter+1)
    }
    function decrease(){
        setCounter(Counter-1)
    }

    return <div>
        <h1>Functional State</h1>
        <div>
            The value of counter is :{Counter}
            <button onClick={incremeant}>Click to increase</button>
           <div><button onClick={decrease}>click to decrease</button></div> 
        </div>
        </div>
       
}