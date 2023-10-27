import { createSlice } from '@reduxjs/toolkit';

const imageSelectedSlice = createSlice({
  name: 'imageSelected',
  initialState: {},
  reducers: {
    SELECT_IMAGE: (state, action) => action.payload,
    LOG_OUT: () => {},
  },
});

const tileCssListSlice = createSlice({
  name: 'tileCssList',
  initialState: {},
  reducers: {
    CREATE_TILE_LISTS: (state, action) => action.tileCssList,
    MOVE_TILE: (state, action) => {
      const obj = { ...state };
      obj[action.key] = { ...obj[action.key], top: action.top, left: action.left };
      return obj;
    },
    LOG_OUT: () => {},
  },
});

const tileOrderListSlice = createSlice({
  name: 'tileOrderList',
  initialState: {},
  reducers: {
    CREATE_TILE_LISTS: (state, action) => action.tileOrderList,
    MOVE_TILE: (state, action) => {
      const obj = { ...state };
      const temp = obj[action.key];
      obj[action.key] = obj[action.indexEmptyTile];
      obj[action.indexEmptyTile] = temp;
      return obj;
    },
    LOG_OUT: () => {},
  },
});

const gameStateSlice = createSlice({
  name: 'gameState',
  initialState: {},
  reducers: {
    SELECT_IMAGE: () => ({ isImageSelected: true }),
    CREATE_TILE_LISTS: (state) => ({ ...state, areTilesCreated: true, isGameReady: false }),
    TOGGLE_GAME_READY: (state) => ({ ...state, isGameReady: true }),
    LOG_OUT: () => {},
  },
});

const shuffleCounterSlice = createSlice({
  name: 'shuffleCounter',
  initialState: 50,
  reducers: {
    TOGGLE_GAME_READY: () => -1,
    MOVE_TILE: (state) => (state > 0 ? state - 1 : state),
    LOG_OUT: () => 50,
  },
});

const moveCounterSlice = createSlice({
  name: 'moveCounter',
  initialState: 0,
  reducers: {
    TOGGLE_GAME_READY: () => 100,
    MOVE_TILE: (state) => (state > 0 ? state - 1 : state),
    LOG_OUT: () => 0,
  },
});

export default {
  imageSelected: imageSelectedSlice.reducer,
  gameState: gameStateSlice.reducer,
  tileCssList: tileCssListSlice.reducer,
  tileOrderList: tileOrderListSlice.reducer,
  shuffleCounter: shuffleCounterSlice.reducer,
  moveCounter: moveCounterSlice.reducer,
};
