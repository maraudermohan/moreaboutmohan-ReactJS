export const initialState = {
  areaLength: 10,
  playerPos: {
    direction: 'right',
  },
  virusData: {},
  virusStartEndPos: [],
  speed: 10,
  isGameReady: false,
};

const areaLength = (state = initialState.areaLength, action = {}) => {
  switch (action.type) {
    case 'INITIALIZE_AREA':
      return action.area;

    default:
      return state;
  }
};

const playerPos = (state = initialState.playerPos, action = {}) => {
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

const virusData = (state = initialState.virusData, action = {}) => {
  switch (action.type) {
    case 'CREATE_VIRUS':
      if (action.isGameReady) {
        return {
          ...state,
          [action.id]: action.payload,
        };
      }
      return {};

    case 'MOVE_VIRUS':
      if (action.isGameReady) {
        return {
          ...state,
          [action.id]: action.payload,
        };
      }
      return {};

    case 'DELETE_VIRUS': {
      const obj = { ...state };
      delete obj[action.id];
      return obj;
    }

    case 'READY_GAME':
      return action.bool ? state : {};

    default:
      return state;
  }
};

const virusStartEndPos = (state = initialState.virusStartEndPos, action = {}) => {
  const calculate = (newAreaLength, newPlayerTop, newPlayerLeft) => ([
    {
      current: [-50, newPlayerLeft],
      end: [newAreaLength + 50, newPlayerLeft],
      direction: 'down',
    },
    {
      current: [newPlayerTop, -50],
      end: [newPlayerTop, newAreaLength + 50],
      direction: 'right',
    },
    {
      current: [newAreaLength + 50, newPlayerLeft],
      end: [-50, newPlayerLeft],
      direction: 'up',
    },
    {
      current: [newPlayerTop, newAreaLength + 50],
      end: [newPlayerTop, -50],
      direction: 'left',
    },
  ]);

  switch (action.type) {
    case 'INITIALIZE_AREA':
      return calculate(action.area, action.top, action.left);

    case 'MOVE_PLAYER':
      return calculate(action.area, action.top, action.left);

    default:
      return state;
  }
};

const speed = (state = initialState.speed, action = {}) => {
  switch (action.type) {
    case 'INITIALIZE_AREA':
      return action.speed;

    default:
      return state;
  }
};

const isGameReady = (state = initialState.isGameReady, action = {}) => {
  switch (action.type) {
    case 'READY_GAME':
      return action.bool;

    default:
      return state;
  }
};

const gameScore = (state = null, action = {}) => {
  switch (action.type) {
    case 'READY_GAME':
      return action.bool ? 0 : state;

    case 'DELETE_VIRUS': {
      const newScore = state + 1;
      return newScore;
    }

    default:
      return state;
  }
};

export default {
  areaLength,
  playerPos,
  virusData,
  virusStartEndPos,
  speed,
  gameScore,
  isGameReady,
};
