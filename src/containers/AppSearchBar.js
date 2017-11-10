/**
 * React and Redux
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class AppSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: '',
    });
  }

  render() {
    return (
      <div>
        <h3 className="text-center">The Great Indian Weather App</h3>
        <form onSubmit={ this.onFormSubmit }>
          <div className="input-group shadow">
            <input className="input-group-field" 
                   type="text"
                   placeholder="Get a five day forecast of your favourite cities"
                   value={ this.state.term }
                   onChange={ this.onInputChange } />
            <div className="input-group-button">
              <input type="submit" className="button" value="Search" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(AppSearchBar);
