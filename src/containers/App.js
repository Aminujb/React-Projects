import React, { Component } from 'react';
import './App.css';
// import UserInput from '../Assignments/Assignment1/UserInput/UserInput'
// import UserOutput from '../Assignments/Assignment1/UserOutput/UserOutput'
import StringLength from '../Assignments/Assignment2/StringLength/StringLength'
import ValidationComponent from '../Assignments/Assignment2/StringLength/ValidationComponent'
import CharComponent from '../Assignments/Assignment2/StringLength/CharComponent'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context'



//Classed based component
class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons:  [
      {id : "a", name:"jb", age:"25"},
      {id : "ab", name:"jibola", age:"24"},
      {id : "abc", name:"justin", age:"28"},
    ],
    useroutput:  [
      {username:"AminujB"},
      {username:"jB"},
      {username:"jaybee"},
    ],
    showPersons : false,
    changeCounter : 0,
    showCockpit : true,
    authenticated : false,
    stringLength : [
      {id : 'a1', sWord: "Test", slength : 0}
    ],
    charArray : [
      {id : 'c1', letters: []}
    ]
  }
  
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[Apps.js] componentDidUpdate')
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) =>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
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

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  changeLengthHandler = (event) => {
    const value = event.target.value
    this.setState({
      stringLength : [
        {id : 'a1', sWord : event.target.value, slength : event.target.value.length}
      ],
      charArray: [
        {letters: value.split('')}
      ]
    })
  }

  deleteCharHandler = (charIndex) =>{
      const letters = [...this.state.charArray[0].letters];
      letters.splice(charIndex, 1);
      this.setState({charArray: [
        {letters: letters}
      ]})
    
  }

  loginHandler = ()=> this.setState({authenticated : true})


  render() {
    console.log('[App.js] render');

    const Greeting = () =><h1>Hello World today!</h1>;
    
    let content = null;

    if (this.state.showPersons){
      content = (
        <div>
        <Greeting/>
        
        {this.state.stringLength.map((stringlength) => {
          return <StringLength
            changed = {this.changeLengthHandler}
            inputLength = {stringlength.slength}
            word = {stringlength.sWord}
            key = {stringlength.id}
          />
        })}
        
        <ValidationComponent comment= {this.state.stringLength[0].slength}/>

        {/* <CharComponent char = {this.state.charArray[0].letters[0]}/> */}
        {this.state.charArray[0].letters.map((letter, index) => {
          return <CharComponent
            click = {() => this.deleteCharHandler(index)}
            char = {letter}
            key = {Math.random()}
          />
        })}

        {/* <UserInput changed = {this.switchUsernameHandler} val = {this.state.useroutput[0].username}/>
        <UserOutput username={this.state.useroutput[0].username}/>
        <UserOutput username={this.state.useroutput[1].username}/>
        <UserOutput username={this.state.useroutput[2].username}/> */}

        <Persons 
        persons ={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
        </div>
      );
    }
    
    
    return (
      <div className="App">
      <button onClick={ () => {
        this.setState({showCockpit: false})
      }}>Remove Cockpit</button>
        
        <AuthContext.Provider
        value={{
          authenticated : this.state.authenticated,
          login  : this.loginHandler
        }}>
          {this.state.showCockpit ? <Cockpit
          title = {this.props.appTitle}
          persons ={this.state.persons}
          personsLength={this.state.persons.length}
          showPersons = {this.state.showPersons}
          click = {this.togglePersonsHandler}
        /> : null}
        
        { content }
        </AuthContext.Provider>
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
