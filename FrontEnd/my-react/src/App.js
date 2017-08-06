import React, { Component } from 'react';

import './App.css';
import {About} from './About';
import {AddQ} from './AddQ';
import {ShowAll} from './ShowAll';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {mode: "about"};
        
        
        
        
        
    }
    
    aboutHandler(){
        this.setState({mode:"about"});
    }
    
     showHandler(){
        this.setState({mode:"showAll"});
    }
    
     addQHandler(){
        this.setState({mode:"addQ"});
    }
    
    
    
  render() {
      
      let contents;
      
      switch (this.state.mode){
          case "about": contents = <About />;
              break;
            
          case "addQ": contents = <AddQ />;
              break;
              
          case "showAll": contents = <ShowAll />;
              break;
              
          default: contents = null;
              
                       };
      
      let buttonBar = <div> <button onClick = {this.aboutHandler.bind(this)}>About</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick = {this.showHandler.bind(this)}>Show</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick = {this.addQHandler.bind(this)}>Add Q</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
      
    return (
        <div>
            
            <h1>Quizzy 2000 React Plain</h1>
                {buttonBar}
            {contents}
        </div>
    );
  }
}

export default App;
