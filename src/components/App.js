/**
 * React and Redux
 */

import React, { Component } from 'react';
import AppSearchBar from '../containers/AppSearchBar';
import AppWeatherList from '../containers/AppWeatherList';

class App extends Component {
  render() {
    return (
      <div className="grid-container margin-top-1">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <AppSearchBar />
          </div>
          <div className="cell">
            <AppWeatherList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
