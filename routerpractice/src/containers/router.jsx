import React from "react";
import {
  BrowserRouter as Router,Link,
  Route} from "react-router-dom";
import Home from './Home';
import About from './about';
import ContHome from '../containers/context/conthome'
import Consumer  from "./context/consum";
import refex from './USEREF/refex'
import Reducer from "./reducer/reducerstate";
import Counter from './reducer/lazyinit'
class AppRouter extends React.Component{
    render(){
        return(
            
                <Router>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/conthome' component={ContHome} />
                    <Route path='/consumer' component={Consumer} />
                    <Route path='/ref' component={refex} />
                    <Route path='/reducer' component={Reducer} />
                    <Route path='/reducercounter' component={Counter} />

                </Router>
            
        )
    }
}
export default AppRouter;