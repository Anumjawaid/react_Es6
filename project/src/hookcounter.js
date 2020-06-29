import React,{useState} from 'react'

function Count (){
    const [count,setCount]=useState(0)

    return(
        <>
        <h1>From Function Hooks {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}
export default Count