import React, {Component} from 'react';
import './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'


class Person extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     returnstate;
    // }
    static contextType = AuthContext;

    constructor(props){
        super(props)
        this.inputElementRef = React.createRef()
    }

    componentDidMount(){
        //this.inputElement.focus();
        //this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                <p key = "x1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p key = "x2">{this.props.children}</p>
                <input key = "x3" type="text" 
                    onChange={this.props.changed}
                    value={this.props.name}
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                />
            </Aux>
        );
    }  
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.string,
    changed: PropTypes.func
}
export default withClass(Person);