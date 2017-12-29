import React, { Component } from 'react';
import './App.css';

import xhr from 'xhr';

class App extends Component {
  state = {
    location: '',
    data: {}
  }

  fetchData = (event) => {
    event.preventDefault();
  
    var location = encodeURIComponent(this.state.location);

    var urlPrefix = "http://api.openweathermap.org/data/2.5/forecast?q=";
    var urlSuffix = "&APPID=c1f62f052159942bc0c53780caf947bd&units=metric";
    var url = urlPrefix + location + urlSuffix;
    
    var self = this;
    xhr({
      url: url
    }, function(err, data){
      // save data here
      self.setState({
        data: JSON.parse(data.body)
      })
    })
  }

  changeLocation = (event) => {
    console.log('changeLocation')
    this.setState({
      location: event.target.value
    })
  }

  render() {
    var currentTemp = 'not loaded yet';
    
    if (this.state.data.list){
      currentTemp = this.state.data.list[0].main.temp;
    }

    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input 
              type="text" 
              placeholder={"City, Country"}
              value={this.state.location}
              onChange={this.changeLocation}
            />
          </label>
        </form>
        <p>
          <span>{ currentTemp }</span>
          <span> °C</span>
        </p>
      </div>
    );
  }
}

export default App;
