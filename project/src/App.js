import React from 'react';
import My from './Functional'
import Start1 from './class';
import MSG from './hooksmessage'
import HOOKS from './classhookmessage'
import Counter from './counterclass'
function App() {
  


  return (
    <div className="box">
      <My name=" functional class"/>
      <Start1 name=" Start class"/>
      <MSG/>
      <HOOKS/>
      <Counter/>

     
    </div>
  );
}

export default App;
