import React from 'react';
import My from './Functional'
import Start1 from './class';
import MSG from './hooksmessage'
import HOOKS from './classhookmessage'
import Counter from './counterclass'
import Count from './hookcounter'
import Basic from './basicclasscomp'
import {Main,Image } from './multiplecomponents'
function App() {
  


  return (
    <div className="box">
      <My name=" functional class"/>
      <h6>*************</h6>
     
      <Main />
      <h6>*************</h6>
      <Image />     
      <Start1 name=" Start class"/>
      <h6>*************</h6>
      <Basic>

      </Basic>
      <h6>*************</h6>
     
      <MSG/>
      <h6>*************</h6>

      <HOOKS/>
      <h6>*************</h6>

      <Counter/>
      <h6>*************</h6>
      <Count/>

     
    </div>
  );
}

export default App;
