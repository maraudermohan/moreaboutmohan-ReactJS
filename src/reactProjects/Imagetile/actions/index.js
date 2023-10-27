export const selectImage = (payload) => ({
  type: 'SELECT_IMAGE',
  payload,
});

export const logOut = () => ({
  type: 'LOG_OUT',
});

export const createTileLists = (tileCssList, tileOrderList) => ({
  type: 'CREATE_TILE_LISTS',
  tileCssList,
  tileOrderList,
});

export const toggleGameReady = () => ({
  type: 'TOGGLE_GAME_READY',
});

export const moveTile = (key, top, left, indexEmptyTile) => ({
  type: 'MOVE_TILE',
  key,
  top,
  left,
  indexEmptyTile,
});
