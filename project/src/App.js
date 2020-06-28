import React from 'react';
import My from './Functional'
import Start1 from './class';
import MSG from './hooksmessage'
import HOOKS from './classhookmessage'
function App() {
  


  return (
    <div className="box">
      <My name=" functional class"/>
      <Start1 name=" Start class"/>
      <MSG/>
      <HOOKS/>

     
    </div>
  );
}

export default App;
