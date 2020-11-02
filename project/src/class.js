import React ,{Component} from 'react'
import {Main,Image,States} from './multiplecomponents'
class Start1 extends Component {
    get_data (props) {
        console.log(props)
      }
      
    render(){
    return(
        <div>
     <h1>I am  from class{this.props.name}</h1>
    <Main send={this.get_data}></Main>
    </div>
    )
    }
    

}
export default Start1