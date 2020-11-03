import React from 'react'

class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            todos:['Namaz','Drink','Excercise'],
            value:''
        }
    }
    Add=()=>{
        this.state.todos.push(this.state.value)
        console.log(this.state.todos)
        // this.setState({
        //     todos:this.state.todos
        // })
    }
    render(){
        let{todos,value}=this.state
        return(
            <div>
                <h1>Todo Application</h1>
                <input type='text'  onChange={(e)=>this.setState({value:e.target.value})} placeholder='Enter Your Tasks Here' />
                <button onClick={this.Add()}>Add Item</button>
                <ul>
                    {todos.map((v,i)=>{
                        return <li key={i}>{v}</li>
                    })}
                </ul>

            </div>
        )
    }

}
export default Todo;