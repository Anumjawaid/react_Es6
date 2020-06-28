import React ,{Component} from 'react'

class hooks extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome from class Hooks"
        }
    }
    changemsg(){
        this.setState({
            message:"OOHH You Done A Marvellous job \n Keep Going And For Heaven Sake Keep Up The Good Work"
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changemsg()}>Submit</button>
            </>
        )
    }


}
export default hooks