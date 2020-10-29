import React from 'react'

class basic extends React.Component{
    render(){
        // rendering a variable in JSX
        let a="I am a Variable \n I am an Exception"
        let fn='Anum'
        let ln='Jawaid'
        return(
        <div>
            <h1>From Basic Class Components<br></br>{a}</h1>
        <h3>{`${fn} ${ln}`}</h3>
        </div>
        )
    }
}
export default basic