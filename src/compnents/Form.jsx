import { state,setState } from "react"
export default function Form(){
    state={firstnme:""}
    function handleChange(event){
        console.log(event.target.value)
        setState({firstnme:event.target.value})
    }
    return <div>
        <form onSubmit={handelSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button>Click</button>
        </form>
    </div>
}