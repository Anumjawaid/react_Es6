import React from 'react';
import './App.css';
// import Todo from './todo'
import Home from './containers/Home'
import AppRouter from './containers/router'
import { connect } from 'react-redux'

class App extends React.Component {
  render(){
  console.log("redux props",this.props)
  return (
    <div className="App">
     {/* <Todo/> */}
     {/* <Home /> */}
     <AppRouter />
     {/* <button onClick={()=>this.props.set_data}>Set Data</button> */}
     
    </div>
    
  );
}}
const mik = (state) => ({
  name:state.name,
  age:state.Age
  
})
const mapDispatchToProps = (dispatch) => ({
  set_data : () => (console.log("Hello"))

})
export default connect(mik,mapDispatchToProps)(App);
