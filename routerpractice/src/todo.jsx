import React from 'react';

class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            todos:['Namaz','Drink','Excercise'],
            value:''
        }
    }
    Add = () => {
        // use this one OR
        // this.state.todos.push(this.state.value)
        // this.setState({
        //      todos:this.state.todos,
        //      value:' '
        //  })
        // use this spade one
        this.setState({
            todos:[...this.state.todos,this.state.value]
            ,value:''
        })
    }
    deltodo = (ind) => {
        // console.log(ind)
        this.state.todos.splice(ind,1)
        this.setState({
            todos:this.state.todos
        })
    }
    editodo = (ind) =>{
        // console.log(ind)
    //    var up=prompt("Enter Updated Valye")
        this.state.todos[ind]=up
        this.setState({
            todos:this.state.todos
        })

    }
    render(){
        let{todos,value}=this.state;
        return(
            <div>
                <h1>Todo Application</h1>
                <input type='text' value={value} onChange={(e)=>this.setState({value:e.target.value})} placeholder='Enter Your Tasks Here' />
                <button onClick={this.Add}>Add Item</button>
                <ul>
                    {todos.map((v,i)=>{
                        return <li key={i}>{v}
                <button onClick={()=>this.deltodo(i)}>Delete</button>
                <button onClick={()=>this.editodo(i)}>Edit</button>
                        
                        </li>
                    })}
                </ul>

            </div>
        )
    }

}
export default Todo;