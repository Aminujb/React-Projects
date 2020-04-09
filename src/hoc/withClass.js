import React from 'react'
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

const withClass = (WrappedComponent, className) => {
    return props => (
        <StyledDiv>
            <WrappedComponent {...props}/>
        </StyledDiv>
    );
}

export default withClass;