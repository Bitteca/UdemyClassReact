import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import { Container } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.getUserLatitude();
  }

  getUserLatitude() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err =>
        this.setState({
          errorMessage: `Something went wrong. Please Allow Geolocation. Error Message: ${err.message}`,
        })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.latitude && !this.state.errorMessage) {
      return <div> Latitude: {this.state.latitude} </div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
