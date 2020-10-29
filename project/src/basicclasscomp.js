import React from 'react'

class basic extends React.Component{
    render(){
        // rendering a variable in JSX
        let a="I am a Variable \n I am an Exception"
        let fn='Anum'
        let ln='Jawaid'
        let arr=[1,2,3,4,5] //print in the form of pritn
        return(
        <div>
            <h1>From Basic Class Components<br></br>{a}</h1>
        <h3>{`${fn} ${ln}`}</h3>
        <h2>{arr}</h2>
        </div>
        )
    }
}
export default basic