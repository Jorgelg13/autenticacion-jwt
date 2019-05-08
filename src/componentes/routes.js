import React from 'react';
import { Route, Router } from 'react-router-dom';

//componentes de auth0
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

//componentes propios
import Productos from './Productos';
import Nosotros from './Nosotros';
import Header from './Header';
import SingleProducto from './SingleProducto';
import Navegacion from './Navegacion';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div className="contenedor">
          <Header/>
          <Navegacion/>
          <Route exact path="/" render={(props) => (
               <Productos
                // productos = {this.state.productos}
                 auth={auth} {...props}
                />
           )} />
          <Route exact path="/nosotros" component ={Nosotros} />
          <Route exact path="/productos" component render={ (props) => (
               <Productos
                  //productos ={this.state.productos}
                  auth={auth} {...props}
                 />
          )} />
          <Route exact path="/producto/:productoId" render={(props) => {
             let idProducto = props.location.pathname.replace('/producto/','');
                 return(
                   <SingleProducto
                      producto = {this.state.productos[idProducto]}
                      auth={auth} {...props}
                    />
                  )
            }} />
          
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
