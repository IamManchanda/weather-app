/**
 * React and Redux
 */

import React, { Component } from 'react';

class AppGoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(document.getElementById('map'), {
      zoom: 8, 
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

export default AppGoogleMap;