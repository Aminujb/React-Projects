import React from 'react';
import './Person.css'
import styled from 'styled-components'

const StyledDiv = styled.div`
    {
    width: 60%;
    margin: 30px auto;
    border: 3px solid #eee;
    padding: 16px;
    text-align: center;
}

'@media (min-width: 500px)': {
     width : '450px'
}
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width : '450px'
    //     }
    // }
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </StyledDiv>
    );
}

export default person;