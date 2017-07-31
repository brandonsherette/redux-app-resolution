// allow main entry to be default import
import AppResolution from './app-resolution.container';
export default AppResolution;

export { default as AppResolution } from './app-resolution.container';
export { default as ActionTypes, init, updateResolution } from './actions';
export { default as reducer } from './reducer';