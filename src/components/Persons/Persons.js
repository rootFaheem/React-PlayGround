import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
         super(props);
         console.log('[Persons.js] Inside Constructor');
    }

    componentWillMount () {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount () {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    // COMPONENT LIFECYCLE-- UPDATE (triggered by External Changes)

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Person.js] Inside componentWillReceiveProps()', nextProps );
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside shouldComponentUpdate()', nextProps, nextState);
        // return nextProps.Persons !== this.props.Persons;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside componentWillUpdate()', nextProps, nextState );
    }

    componentDidUpdate () {
        console.log('[Update Person.js] Inside ComponentDidUpdate()');
    }

    render () {
        console.log('[Persons.js] Inside render()');
       return this.props.Persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        } );
    }
}

export default Persons;