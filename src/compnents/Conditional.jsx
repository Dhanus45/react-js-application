import { useState } from "react"
export default function Condtionbal (){
    const [Display,SetDisplay]=useState(false)
    let output;
    if (Display)
    {
        output=<h1>This is conditional compoenent</h1>

    }
    else
    {
        output=<h1>This is 2nd conditional compoenent</h1>
    }
    
    return (<div>{output}</div>)

    return Display ? (<h1>This is conditional compoenent</h1>):(<h1>This is 2nd conditional compoenent</h1>)
   
   
}