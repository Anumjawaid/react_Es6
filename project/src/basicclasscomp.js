import React from 'react'

class basic extends React.Component{
    render(){
        // rendering a variable in JSX
        let a="I am a Variable \n I am an Exception"
        let fn='Anum'
        let ln='Jawaid'
        let arr=[1,2,3,4,5] //print in the form of print
        let todo=[{'text':'namaz'},{'text':'parhai'}]
        return(
        <div>
            <h1>From Basic Class Components<br></br>{a}</h1>
        <h3>{`${fn} ${ln}`}</h3>
        <h2>{arr}</h2>
        <h4>Todos</h4>
        <ul>
            {/* {todo.map((item,index)=>{ */}
            {/* console.log(item) */}
        {/* })} */}
        {/* Another approach */}
        {todo.map((item,index)=>{
            return(<li key={index}>{item.text}</li>)
        })}
        </ul>
        </div>
        )
    }
}
export default basic