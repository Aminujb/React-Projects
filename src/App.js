
import './App.css';
import Person from './Person/Person'
import UserInput from './Assignment1/UserInput/UserInput'
import UserOutput from './Assignment1/UserOutput/UserOutput'

//Classed based component
import React, { Component } from 'react';
class App extends Component {
  state = {
    persons:  [
      {name:"jb", age:"24"},
      {name:"jibola", age:"24"},
      {name:"justin", age:"24"},
    ],
    useroutput:  [
      {username:"AminujB"},
      {username:"jB"},
      {username:"jaybee"},
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
  
  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name:"Deji", age:"24"},
        {name:event.target.value, age:"30"},
        {name:"Zaynab", age:"79"},
      ]
    });
  }


  switchUsernameHandler = (event) =>{
    this.setState({
      useroutput:  [
        {username:event.target.value},
        {username:"jB"},
        {username:"jaybee"},
      ]
    });
    
  }


  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    const Greeting = () => <h1>Hello World today!</h1>;
    // const UserInput = () => <input type="text" onChange = {this.props.changed}/>;
    // const UserOutput = (props) => <div><p>Username: {props.username}<br/> I am learning React</p> <p>I want to be a badass at it real soon!</p></div>;
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button 
        style = {style}
        onClick = { () => this.switchNameHandler('Abdul')}>Switch Name</button>
        
        <Greeting/>
        <UserInput changed = {this.switchUsernameHandler} val = {this.state.useroutput[0].username}/>
        <UserOutput username={this.state.useroutput[0].username}/>
        <UserOutput username={this.state.useroutput[1].username}/>
        <UserOutput username={this.state.useroutput[2].username}/>

        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this,'Muhammad')}
        changed= {this.nameChangedHandler}> 
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
