import React from 'react';
import { Provider } from 'react-redux';
import store from 'reactProjects/Imagetile/store/configureStore';
import App from 'reactProjects/Imagetile/components/App';
import 'reactProjects/Imagetile/styles/tile_core.css';
import 'reactProjects/bootstrap.min.css';

function Imagetile() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Imagetile;
