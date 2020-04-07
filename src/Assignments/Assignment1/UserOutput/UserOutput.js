import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className = "UserOutput">
        <p>Username: {props.username}<br/> I am learning React</p> 
        <p>I want to be a badass at it real soon!</p></div>
    );
}

export default userOutput;