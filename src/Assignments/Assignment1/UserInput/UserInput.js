import React from 'react';

const userInput = (props) => {
    const style = {
        padding:"5px", 
        border:"2px solid #ccc",
    }
    return (
        <input style = {style} type="text" 
        onChange = {props.changed}
        value = {props.val}
        />
    );
}

export default userInput;