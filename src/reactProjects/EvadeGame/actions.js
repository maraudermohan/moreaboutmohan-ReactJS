const initializeArea = (area, top, left) => ({
  type: 'INITIALIZE_AREA',
  area,
  top,
  left,
});

const movePlayer = (top, left, direction) => ({
  type: 'MOVE_PLAYER',
  top,
  left,
  direction,
});

const createVirus = (id, payload) => ({
  type: 'CREATE_VIRUS',
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
  deleteVirus,
};
