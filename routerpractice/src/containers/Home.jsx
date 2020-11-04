import React from 'react'
import {Link } from "react-router-dom";

class Home extends React.Component{
    goto = () =>{
        this.props.history.push('/about')

    }
    render(){
       
        return(
            <div>
                <h1>Header from Home</h1>
                <h3>Why Not Working</h3>
                {/* <Link to="/about"> About</Link> */}
                <button onClick={this.goto}>About</button>
            </div>
        )
    }
}
export default Home;