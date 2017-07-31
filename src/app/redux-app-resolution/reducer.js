import ActionTypes from './actions';

const initialState = {
  isOpen: false,
  minWidth: 1,
  resolution: null,
  width: 0,
  height: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INIT: {
      const { minWidth, resolution, width, height } = action.payload;
      const isOpen = (Number(width) < Number(minWidth));

      return Object.assign({}, state, {
        isOpen,
        minWidth: Number(minWidth),
        resolution,
        width: Number(width),
        height: Number(height)
      });
    }
    case ActionTypes.UPDATE_RESOLUTION: {
      const { resolution, width, height } = action.payload;
      const isOpen = (Number(width) < state.minWidth);

      return Object.assign({}, state, {
        isOpen,
        resolution,
        width: Number(width), 
        height: Number(height)
      });
    }

    default: { return state; }
  }
}