import React, { Component } from 'react';

import Schedule from './Schedule';

import sampleEpics from '../data/epics';
import samplePeople from '../data/people';
import sampleSprints from '../data/sprints';
import sampleTeams from '../data/teams';
import themeColors from '../data/colors';

import '../css/App.css';


class App extends Component {
  constructor() {
    super();

    // add function bindings here
    this.loadSampleData = this.loadSampleData.bind(this);

    // initial state
    this.state = {
      sprints: {},
      epics: {},
      teams: {},
      people: {},
      colors:{}
    };
  }
  loadSampleData() {
    this.setState({
      sprints: sampleSprints,
      epics: sampleEpics,
      teams: sampleTeams,
      people: samplePeople,
      colors:themeColors
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">Roadmap Planner</div>
        </div>
        <div className="App-body">
          <Schedule
            sprints = {this.state.sprints}
            epics = {this.state.epics}
            people = {this.state.people}
            loadSampleData = {this.loadSampleData}
          />
        </div>
      </div>
    );
  }
}

export default App;
