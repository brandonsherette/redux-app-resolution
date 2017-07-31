const ACTION_PREFIX = 'APP_RESOLUTION-';

const ActionTypes = {
  INIT: ACTION_PREFIX + 'INIT',
  UPDATE_RESOLUTION: ACTION_PREFIX + 'UPDATE_RESOLUTION'
};

export default ActionTypes;

export const init = ({ minWidth, width, height }) => {
  const payload = {
    isOpen: (Number(width) < (Number(minWidth))),
    minWidth: Number(minWidth),
    resolution: width + ' x ' + height,
    width,
    height
  }

  return {
    type: ActionTypes.INIT,
    payload
  };
};

export const updateResolution = ({width, height}) => {
  // resolution window will be open if resolution width is below min value
  const payload = {
    resolution: width + ' x ' + height,
    width,
    height
  };

  return {
    type: ActionTypes.UPDATE_RESOLUTION,
    payload
  };
};