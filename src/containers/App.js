import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor');
    this.state = {
      persons: [
        { id: 'kjfkj', name: 'Faheem', age: 21 },
        { id: 'kfjwkjd', name: 'Elon', age: 47 },
        { id: 'kfkw', name: 'Jeff', age: 54 }
      ],
      otherState: 'some other value',
      showPersons: false
    }

  }

  state = {
    persons: [
      { id: 'kjfkj', name: 'Faheem', age: 21 },
      { id: 'kfjwkjd', name: 'Elon', age: 47 },
      { id: 'kfkw', name: 'Jeff', age: 54 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount() ');
  }

  componentDidMount() {
    console.log('[app.js] Inside componentDidMount()');
  }

  // COMPONENT LIFECYCLE-- UPDATE (triggered by Internal Changes)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update App.js] Inside ComponentDidUpdate()');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //            OR (MODERN WAY) 
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons })

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] Inside render()');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            Persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
