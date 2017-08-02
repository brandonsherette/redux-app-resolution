import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { init, updateResolution } from './actions';

require('./app-resolution.scss');

class AppResolution extends Component {
  componentDidMount() {
    // need to setup resize listeners 
    window.addEventListener('resize', this.handleWindowResize.bind(this));
    // initialize resolution
    this.props.init({ minWidth: this.props.minWidth, width: window.outerWidth, height: window.outerHeight })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize.bind(this));
  }

  handleWindowResize() {
    this.props.updateResolution({ width: window.outerWidth, height: window.outerHeight });
  }

  render() {
    const { isOpen, returnHome } = this.props;

    if (!isOpen) { return null; }

    return null;
    /*return (
      <div className="app-resolution-wrapper">
        <div className="mask"></div>
        <div className="app-resolution">
          <h1 className="font-warning"><i className="fa fa-exclamation-triangle"></i>&nbsp;Resolution Not Currently Supported!</h1>
          <h2>Optimal resolution is 1920 x 1080.</h2>
          { !returnHome && (
            <p className="break-2x">Please resize your browser to a supported resolution.</p>
          )}
          { returnHome && (
            <div className="break-2x">
            <p>Either resize your browser to a supported resolution, or click the button below to return to the orthotic suite.</p>
            <div className="text-center"><button type="button" className="btn btn-lg btn-primary" onClick={returnHome}>Return to Orthotic Suite</button></div>
            </div>
          )}
        </div>
      </div>
    );*/
  }
}

AppResolution.propTypes = {
  minWidth: PropTypes.number,
  returnHome: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  updateResolution: PropTypes.func.isRequired
};

AppResolution.defaultProps = {
  minWidth: 1,
  returnHome: null
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.appResolution.isOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: (payload) => { dispatch(init(payload)) },
    updateResolution: (payload) => { dispatch(updateResolution(payload)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppResolution);