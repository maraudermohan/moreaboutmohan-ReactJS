const initializeArea = (area, top, left, speed) => ({
  type: 'INITIALIZE_AREA',
  area,
  top,
  left,
  speed,
});

const movePlayer = (area, top, left, direction) => ({
  type: 'MOVE_PLAYER',
  area,
  top,
  left,
  direction,
});

const createVirus = (id, payload, isGameReady) => ({
  type: 'CREATE_VIRUS',
  id,
  payload,
  isGameReady,
});

const moveVirus = (id, payload, isGameReady) => ({
  type: 'MOVE_VIRUS',
  id,
  payload,
  isGameReady,
});

const deleteVirus = (id) => ({
  type: 'DELETE_VIRUS',
  id,
});

const readyGame = (bool) => ({
  type: 'READY_GAME',
  bool,
});

export default {
  initializeArea,
  movePlayer,
  createVirus,
  moveVirus,
  deleteVirus,
  readyGame,
};
