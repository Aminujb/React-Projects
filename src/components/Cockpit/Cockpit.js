import React, {useEffect, useRef, useContext} from 'react'
import styled from 'styled-components'
import AuthContext from '../../context/auth-context'


const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'blue' : 'lightgreen'};
    color: black;
  }
`;

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleBtnRef.current.click();
        //Http request
       //const timer = setTimeout(() => {
        //    alert('Saved Data to cloud');
        //}, 1000);
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    });

    const classes = []
    if (props.personsLength <= 2){
      classes.push('red');
    }
    if (props.personsLength <= 1){
      classes.push('bold');
    }
    return (
        <div>
        <h4 className = {classes.join(' ')}>{props.title}</h4>
        <StyledButton 
        alt={props.showPersons}
        ref = {toggleBtnRef}
        onClick = {props.click}>Switch Name</StyledButton>
        <StyledButton onClick={authContext.authenticated}>Login</StyledButton>}
        </div>
    );
}

export default React.memo(cockpit);