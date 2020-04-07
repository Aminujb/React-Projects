import React from 'react';

const stringLength = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed}/>
            <p>Input: {props.word} | Length of input: {props.inputLength}</p>
        </div>
    );
}

export default stringLength;