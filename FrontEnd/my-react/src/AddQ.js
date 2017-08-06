import React, { Component } from 'react';

const numAlpha = ["a", "b", "c", "d", "e", "f"];

/*

Author: Ade Purkar

*/
function ChoiceLine(props) {
    // TODO add text input and radio button below
    return <div >
                <label>{numAlpha[props.i]}. </label>
                <input type="text" onChange={props.choiceChange} 
                    value={props.choice[props.i]}/>
     <input type="radio" name="Answers" value={props.i} onChange={props.answerChange}/>
    
                <label>Is answer?</label><br/><br/>
            </div>;
}


 class AddQ extends Component {
     constructor(props) {
         super(props);
         /* Set up state here */
         this.state = {question: "", choices: ["", ""], answer: 0};
     }
     
     choiceChange(evt, i){
         
            let tempChoices = this.state.choices.slice();
          tempChoices[i] = evt.currentTarget.value;
        this.setState({choices: tempChoices});
     }
     
     
     addChoice() {
         console.log("addChoice");
        this.setState({choices: this.state.choices.concat([""])});}
     
     answerHandler(evt,i) {
         this.setState({question:evt.currentTarget.value});
    
     }
     
     questionHandler(evt) {
         // TODO: Update question state here
         // new value is in evt.currentTarget.value
         this.setState({question:evt.currentTarget.value});
     }
     
     choiceHandler(i, evt) {
         console.log("Called");
          let tempChoices = this.state.choices.slice();
          tempChoices[i] = evt.currentTarget.value;
        this.setState({choices: tempChoices});
     }
     
     submitQ() {
         console.log("submitQ");
         // TODO:  fetch post here
     }
     
     render() {
         let buttonBar = <div>
                 <button onClick={this.addChoice.bind(this)}>Add Choice</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button onClick={this.submitQ.bind(this)}>Submit Question</button></div>;
        
         let choiceElements = this.state.choices.map(function(choice, i){
             return <ChoiceLine choice={choice} i={i}/>;
         })
     
         return <div>
            <h2>Add New Question</h2>
            {buttonBar}
            <p>Question input field belongs here</p>
         Question : <input type="text" onChange={this.questionHandler.bind(this)} 
                    value={this.state.question}/><br/><br/>
            {choiceElements}
        </div>;
     }
}
/*

Author: Ade Purkar

*/

export {AddQ}