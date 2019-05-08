import React, { Component } from 'react';
import './App.css';
import {makeMainRoutes} from './componentes/routes';

const routes = makeMainRoutes();

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        {routes}
      </div>
    );
  }
}

export default App;
