import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// import { Container } from './styles';

class App extends Component {
  state = {
    latitude: null,
    errorMessage: '',
  };

  componentDidMount() {
    this.getUserLatitude();
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonDisplay userLatitude={this.state.latitude} />;
    }
    return <Loader message='Por favor, me deixe saber sua localicação' />;
  }

  getUserLatitude() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: `Error Message: ${err.message}` })
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
