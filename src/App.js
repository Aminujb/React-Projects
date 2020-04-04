
import './App.css';
import Person from './Person/Person'

//Classed based component
import React, { Component } from 'react';
class App extends Component {
  state = {
    persons:  [
      {name:"jb", age:"24"},
      {name:"jibola", age:"24"},
      {name:"justin", age:"24"},
    ]
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        {name:newName, age:"24"},
        {name:"Toyin", age:"30"},
        {name:"Zaynab", age:"79"},
      ]
    });
  }
  

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick = { () => this.switchNameHandler('Abdul')}>Switch Name</button>
        
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this,'Muhammad')}> 
        My hobbies are coding and sleeping
        </Person>
        
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}>
        </Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}
export default App;


//Functional based componenet
/*import React, { useState } from 'react';
const app = props => {
  const [ personsState, setPersonState] = useState({
    persons:  [
      {name:"jb", age:"24"},
      {name:"jibola", age:"24"},
      {name:"justin", age:"24"},
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () =>{
    setPersonState({
      persons: [
        {name:"jb", age:"24"},
        {name:"Toyin", age:"30"},
        {name:"Zaynab", age:"79"},
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <button onClick = {switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My hobbies are coding and sleeping</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;*/
