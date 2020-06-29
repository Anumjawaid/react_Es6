import React ,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={
            Count:0
        }
    }
    increment(){
        this.setState({
            Count: this.state.Count+1
        })
    }
    
    render(){
        return(
            <>
              <h1>Counter:{this.state.Count}</h1>
              <button onClick={()=>this.increment()}>Increment</button>
            </>
        )
    }
}
export default Counter;