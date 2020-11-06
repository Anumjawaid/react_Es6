import React from 'react';
import './App.css';
// import Todo from './todo'
import Home from './containers/Home'
import AppRouter from './containers/router'
import { connect } from 'react-redux'

class App extends React.Component {
  render(){
  console.log(this.props)
  return (
    <div className="App">
     {/* <Todo/> */}
     {/* <Home /> */}
     <AppRouter />
     
    </div>
    
  );
}}
const mapStateToProps = (state) => ({
  name:state.name,
  age:state.Age
  
})
export default connect(mapStateToProps,null)(App);
