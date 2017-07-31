import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppResolution } from './redux-app-resolution/index';

class AppComponent extends Component {
  render() {
    const { appWidth } = this.props;

    return (
      <div className="app-component">
        <AppResolution />
        <div className="app-header">
          <h1>Redux App Resolution</h1>
          <h5>Adjust the screen resolution and check for changes.</h5>
        </div>
        <div className="container">
          {appWidth <= 768 && (
            <h1>Mobile Version</h1>
          )}
          {appWidth > 768 && (
            <h1>Desktop Version</h1>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appWidth: state.appResolution.width
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);