import React from 'react';

const component = (props) => {
    const style = {
        padding:"16px", 
        display: "inline-block",
        textalign: "center",
        margin: "16px",
        border:"1px solid black",
    }
    return (
        <div style={style}>
            <p onClick= {props.click}>char: {props.char}</p>
        </div>
    );
}

export default component;