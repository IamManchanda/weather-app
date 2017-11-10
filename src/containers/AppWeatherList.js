/**
 * React and Redux
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppSparklineChart from '../components/AppSparklineChart';

import AppGoogleMap from '../components/AppGoogleMap';

class AppWeatherList extends Component {
  constructor(props) {
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }

  /**
   * Test with atleast metro cities: 
   * New Delhi, Mumbai, Kolkata, Bangalore, Pune, Hyderabad, Chennai, Surat, Visakhapatnam, Kanpur
   */

  renderWeather(cityData) {
    const name             = cityData.city.name;
    const { lat, lon }     = cityData.city.coord;
    const tempArray        = cityData.list.map(weather => weather.main.temp);
    const pressureArray    = cityData.list.map(weather => weather.main.pressure);
    const seaLevelArray    = cityData.list.map(weather => weather.main.sea_level);
    const groundLevelArray = cityData.list.map(weather => weather.main.grnd_level);
    const humidityArray    = cityData.list.map(weather => weather.main.humidity);
    const windSpeedArray   = cityData.list.map(weather => weather.wind.speed);

    return (
      <tr key={ name }>
        <td>
          <h6 className="text-center font-bold">{ name }</h6>
          <AppGoogleMap lat={ lat } lon={ lon } />
        </td>
        <td><AppSparklineChart color="#f1c40f" data={ tempArray } units="K" /></td>
        <td><AppSparklineChart color="#16a085" data={ pressureArray } units="hPa" /></td>
        <td><AppSparklineChart color="#e74c3c" data={ seaLevelArray } units="hPa" /></td>
        <td><AppSparklineChart color="#f39c12" data={ groundLevelArray } units="hPa" /></td>
        <td><AppSparklineChart color="#2c3e50" data={ humidityArray } units="%" /></td>
        <td><AppSparklineChart color="#9b59b6" data={ windSpeedArray } units="m/s" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="radius bordered hover shadow">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Sea Level (hPa)</th>
            <th>Ground Level (hPa)</th>
            <th>Humidity(%)</th>
            <th>Wind Speed (m/s)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather,
  }
}

export default connect(mapStateToProps)(AppWeatherList);
