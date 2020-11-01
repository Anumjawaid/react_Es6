import React,{Component} from 'react'
import Husky from './husky.JPG'

class Main extends Component{
    render(){
        return(
            <div>
            <h1>I AM From Main Components</h1>
            </div>
        )
    }

}
class Image extends Component{
    render(){
        return(
            <div>
            <h1>I am from Image Section</h1>
            <img src={Husky} width='20' />
            </div>
        )
    }
}
export{
    Main,
    Image
}
