import React,{useContext} from 'react'

import context from './main'
import ContHome from './conthome'
function Consumer(){
// var cont=useContext(context)
var conte='ewjjsdndb'
    return(
        <>
        <context.Provider value={conte}>
        <ContHome/>
        
        </context.Provider>

        </>
    )
}
export default Consumer;