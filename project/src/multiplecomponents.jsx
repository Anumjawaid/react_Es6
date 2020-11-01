import React, { Component } from 'react'
import Husky from './husky.JPG'

class Main extends Component {
    render() {
        return (
            <div>
                <h1>I AM From Main Components</h1>
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
        // console.log("Runnnning")
        // console.log(this.state.name)
        this.setState({
            name:this.state.value
        })

    }
    render() {
        return (
            <div>
                <h1>I Am from States</h1>
                <h2>My Name is {this.state.name}</h2>
                {/* <input type='text' onChange={(e)=>this.setState({name:e.target.value})} placeholder='Enter your Name' ></input> this name changes the on real time */}
                {/* <button  onClick={this.set_name} >Magic!!!!!!!!!</button> */}
                <input type='text' onChange={(e)=>this.setState({value:e.target.value})} placeholder='Enter your Name' ></input>
                <button onClick={this.set_name}></button>
            </div>
        )
    }
}

export {
    Main,
    Image,
    States
  
}
