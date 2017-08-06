import React, {Component} from 'react';
const numAlpha = ["a", "b", "c", "d", "e", "f"];

/*

Author: Ade Purkar
*/


class ShowAll extends Component{
    
    constructor(props){
        super(props);
        this.state = {questions : [], short: false};
        
    }
    
    componentDidMount(){
        let that = this;
        fetch('/allQs').then(response => response.json()).then(function(data){that.setState({questions:data.questions});
        });
    }
    
    checkHandler() {
        var prevQue = this.state.questions;
        if (this.state.short == false)
          this.setState({questions : prevQue, short: true});
        else if(this.state.short == true)
            this.setState({questions : prevQue, short: false});
        else console.log ("Something is wrong");
     }
     
    render(){ 
            
        let questionSet = this.state.questions;
        let displayQues;
        
        let checkBoxArea = <div>
        <input type="checkbox" onClick={() => this.checkHandler()}/>Short Form
        </div>;
    
        if(this.state.short){
            displayQues = questionSet.map(function(mcq,i){ return <p key = {i}>{mcq.question}</p>;});
            checkBoxArea = <div>
            <input type="checkbox" onClick={() => this.checkHandler()} checked/>Short Form
            </div>;
        }
        else {
            displayQues = questionSet.map (function (mcq, i){
                let choices = mcq.choices;
          //                let choicePs = choices.map(function(c,i){ return <p key={i}>{numAlpha[i]}. {c} </p>
//                });
                  let choiceli = choices.map(function(c,i){ return <li key={i}> {c} </li>
                });
                let finChoices = <ol type = 'a'> {choiceli} </ol>;
                return <div>
                    <p key ={i}>{mcq.question}</p>
                {finChoices}
                    </div>;
        })
        }
        
        return <div>
        <h2>Current Collection of Questions</h2>
        {checkBoxArea}
        {displayQues}
        </div>    
}
}
/*

Author: Ade Purkar

*/

export {ShowAll}

