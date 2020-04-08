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

const createVirus = (id, payload) => ({
  type: 'CREATE_VIRUS',
  id,
  payload,
});

const moveVirus = (id, payload) => ({
  type: 'MOVE_VIRUS',
  id,
  payload,
});

const deleteVirus = (id) => ({
  type: 'DELETE_VIRUS',
  id,
});

export default {
  initializeArea,
  movePlayer,
  createVirus,
  moveVirus,
  deleteVirus,
};
