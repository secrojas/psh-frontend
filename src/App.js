import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import clienteAxios from './config/axios';

//Componentes
import Stats from './components/Stats';
import NuevoStat from './components/NuevoStat';

function App() {

  //State de la app
  const [stats, guardarStat] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  useEffect( () => {
    if(consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/stats')
        .then(respuesta => {
  
          // console.log(respuesta.data)
  
          //colocar en el state el resultado
          guardarStat(respuesta.data);

          //deshabililitar la consulta
          guardarConsultar(false);
        })
        .catch(error => {
          console.log(error)
        })
      }
      consultarAPI();
    }
  },[consultar]);

  return (
    <Router>
        <Switch>
          <Route 
            exact
            path="/"
            component={() => <Stats stats={stats} />}
          />

          <Route 
            exact
            path="/nuevo"
            component={ () => <NuevoStat guardarConsultar={guardarConsultar} />}
          />    
        </Switch>
    </Router>
  );
}

export default App;
