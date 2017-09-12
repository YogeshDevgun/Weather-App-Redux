import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  constructor(props){
    super(props);
  }

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;
    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="orange" units="deg C"/>
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Map</th>
            <th>City</th>
            <th>Temperature (deg C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}
//
// function mapStateToProps(state){
// const weather = state.weather;
//   return {weather: state.weather}
// }

function mapStateToProps({weather}){
  return {weather}; // == weather: weather
}

export default connect(mapStateToProps)(WeatherList);
