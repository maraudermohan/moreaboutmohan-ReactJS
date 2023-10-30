import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  imageSelected: {},
  tileCssList: {},
  tileOrderList: {},
  gameState: {},
  shuffleCounter: 50,
  moveCounter: 0,
};

export const { reducer, actions } = createSlice({
  name: 'rootReducer',
  initialState: INITIAL_STATE,
  reducers: {
    CREATE_TILE_LISTS: (state, action) => {
      state.tileCssList = action.payload.tileCssList;
      state.tileOrderList = action.payload.tileOrderList;
      state.gameState = {
        ...state.gameState,
        areTilesCreated: true,
        isGameReady: false,
      };
    },
    MOVE_TILE: (state, action) => {
      const obj = { ...state.tileCssList };
      obj[action.payload.key] = {
        ...obj[action.payload.key],
        top: action.payload.top,
        left: action.payload.left,
      };
      state.tileCssList = obj;
      const temp = state.tileOrderList[action.payload.key];
      state.tileOrderList[action.payload.key] = state.tileOrderList[action.payload.indexEmptyTile];
      state.tileOrderList[action.payload.indexEmptyTile] = temp;
      state.shuffleCounter = state.shuffleCounter > 0
        ? state.shuffleCounter - 1
        : state.shuffleCounter;
      state.moveCounter = state.moveCounter > 0
        ? state.moveCounter - 1
        : state.moveCounter;
    },
    SELECT_IMAGE: (state, action) => {
      state.imageSelected = action.payload;
      state.gameState = { isImageSelected: true };
    },
    TOGGLE_GAME_READY: (state) => {
      state.gameState = { ...state.gameState, isGameReady: true };
      state.shuffleCounter = -1;
      state.moveCounter = 100;
    },
    LOG_OUT: () => INITIAL_STATE,
  },
});
