export const initialState = {
  areaLength: 10,
  playerPos: {
    direction: 'right',
  },
  virusData: {},
};

const areaLength = (state = initialState.areaLength, action) => {
  switch (action.type) {
    case 'INITIALIZE_AREA':
      return action.area;

    default:
      return state;
  }
};

const playerPos = (state = initialState.playerPos, action) => {
  switch (action.type) {
    case 'INITIALIZE_AREA':
      return {
        ...state,
        top: action.top,
        left: action.left,
      };

    case 'MOVE_PLAYER':
      return {
        ...state,
        top: action.top,
        left: action.left,
        direction: action.direction,
      };

    default:
      return state;
  }
};

const virusData = (state = initialState.virusData, action) => {
  switch (action.type) {
    case 'CREATE_VIRUS':
      return {
        ...state,
        [action.id]: action.payload,
      };

    case 'DELETE_VIRUS': {
      const obj = { ...state };
      delete obj[action.id];
      return obj;
    }

    default:
      return state;
  }
};

export default {
  areaLength,
  playerPos,
  virusData,
};
