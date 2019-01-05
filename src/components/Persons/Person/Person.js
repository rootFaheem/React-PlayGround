import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor (props) {
        super(props);
        console.log('[Person.js] Inside Constructor');
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()')
    }

    
    render () {
        return (
            <div className={classes.Person}>     
                <p onClick={this.props.click}>I'm a {this.props.name}. I am {this.props.age} year old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange = {this.props.changed} value = {this.props.name}></input>
            </div>
            );
    }
}

export default Person;