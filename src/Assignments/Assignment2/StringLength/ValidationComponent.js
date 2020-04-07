import React from 'react'

const valcomponent = (props) => {
    const validation = () => {
        if (props.comment <= 5){ 
            return "Text too short";
         }
        else {
            return "Text long enough";
        }
    }
    
    return (
        <div>
            <p>Validation: {validation()}</p>
        </div>
    )
}

export default valcomponent;