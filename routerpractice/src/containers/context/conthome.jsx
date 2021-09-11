import React,{useContext} from 'react'
import Consumer from'./consum'



import context from './main';

function ContHome(){
    console.log(context,'what')
    var cont=useContext(context)
    console.log(cont,"getting object from context")
    return(
        <>
        <h1>Context</h1>
        {/* <h3>This Is {cont}</h3> */}
        




        </>
    )
}
export default ContHome;