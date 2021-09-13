import React,{useContext} from 'react'



import context from './main';

function ContHome(){
    console.log(context,'what')
    var conte=useContext(context)
    console.log(conte,"getting object from context")
    return(
        <>
        {/* <context.Consumer>{(conte)=>{
            return <h1>Context Give Value {conte} </h1>
        }}</context.Consumer> */}
        <h1>Context Give Value {context["_currentValue2"] }{conte}</h1>
        
        {/* <h3>This Is {cont}</h3> */}
        




        </>
    )
}
export default ContHome;