import React from 'react'
import {Link } from "react-router-dom";
import { connect } from 'react-redux'


class Home extends React.Component{
    goto = () =>{
        this.props.history.push('/about')

    }
    render(){
        console.log("redux props",this.props)
        return(
            <div>
                <h1>Header from Home</h1>
                <h3>Why Not Working</h3>
                {/* <Link to="/about"> About</Link> */}
                <button onClick={this.goto}>About</button>
     <button onClick={()=>this.props.set_data}>Set Data</button>
            
            </div>
        )
    }
}
const mik = (state) => ({
    name:state.name,
    age:state.Age
    
  })
  const mapDispatchToProps = (dispatch) => ({
    set_data : () => console.log("Hello")
  
  })
  export default connect(mik,mapDispatchToProps)(Home);
  