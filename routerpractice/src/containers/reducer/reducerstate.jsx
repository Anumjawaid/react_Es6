import React,{useReducer,useState} from 'react'
import { useSelector } from 'react-redux';


function Reducer (){
// var [state,setState]=useState(0)
var initialstate={count:0}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increm':

            return{
                count:state.count+1
            }
        case "decrem":
        return{
            count:state.count-1
        }
    }

}
var [state,dispatch]=useReducer(reducer,initialstate)
return(
    <>
<h5>Reducer</h5>
{/* <div>
    <p>Count : {state}</p>
    <button onClick={()=>setState(state+1)}>INCREMENT</button>
    <button onClick={()=>setState(state-1)}>DECREMENT</button>
</div> */}
<div>
    <p>Count : {state.count}</p>
    <button onClick={()=>dispatch({type:'increm'})}>INCREMENT</button>
    <button onClick={()=>dispatch({type:'decrem'})}>DECREMENT</button>
</div>

    </>
)

}
export default Reducer;