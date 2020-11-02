import React, { Component } from 'react'
import Husky from './husky.JPG'

class Main extends Component {
    render() {
        console.log("props==",this.props.send)
        return (
            <div>
                <h1>I AM From Main Components</h1>
                <button onClick={()=>this.props.send('Abum')}>Send</button>
            </div>
        )
    }

}
class Image extends Component {
    render() {
        return (
            <div>
                <h1>I am from Image Section</h1>
                <img src={Husky} width='20' />
            </div>
        )
    }
}
class States extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Anum Jawaid',
            pw: '12346',
            value:''
        }
        
    }
    set_name =()=>{
        this.setState({
            name:this.state.value
        })


    }
    handleChange(e){
        // console.log(e.target.value)
        this.setState({
           [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>I Am from States</h1>
                <h2>My Name is {this.state.name}</h2>
                <h2>My Name is {this.state.pw}</h2>

                {/* <input type='text' onChange={(e)=>this.setState({name:e.target.value})} placeholder='Enter your Name' ></input> this name changes the on real time */}
                {/* <button  onClick={this.set_name} >Magic!!!!!!!!!</button> */}
                {/* <input type='text' onChange={(e)=>this.setState({value:e.target.value})} placeholder='Enter your Name' ></input>for saving the value do this */}
                <input name='name' onChange={(e)=>this.handleChange(e)} type='text' placeholder='Enter Your Name'></input>
                <input name='pw' onChange={(e)=>this.handleChange(e)} type='text' placeholder='Enter Your Email'></input>
                
                <button onClick={this.set_name}>Enter</button>
            </div>
        )
    }
}

export {
    Main,
    Image,
    States
  
}
