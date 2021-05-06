import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import clienteAxios from '../config/axios';

import { v4 as uuidv4 } from 'uuid';

const  NuevoStat= (props) => {

    //Generar state como objeto
    const [stat, guardarStat] = useState({
        id_player:uuidv4(),
        nickname:'',
        fecha:'',
        score:''
    });

    //Lee los datos del formulario
    const actualizarState = e => {
        // console.log(e.target.name);
        // console.log(e.target.value);

        guardarStat({
            ...stat,
            [e.target.name] : e.target.value
        })
    }

    //Enviar una petición a la API
    const crearNuevoStat = e => {
        e.preventDefault();

        clienteAxios.post('stats',stat)
            .then(respuesta => {
                // console.log(respuesta);

                props.guardarConsultar(true);

                //Redireccionar
                props.history.push('/')
            })
    }


    return ( 
        <Fragment>
            <h1 className="my-5">Crear nuevo stat</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Ver reporte</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <form 
                            onSubmit={crearNuevoStat}
                            className="bg-white p-5 bordered">

                            {/* <div className="form-group">
                                <label htmlFor="id_player">ID Player</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="id_player" 
                                    name="id_player" 
                                    placeholder="id_player"
                                    value={uuidv4()}
                                    disabled                                   
                                />
                            </div> */}

                            <div className="form-group">
                                <label htmlFor="nombre">Nickname</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="nombre" 
                                    name="nickname" 
                                    placeholder="nickname" 
                                    onChange={actualizarState}
                                />
                            </div>
                          
                            <div className="form-group">
                                <label htmlFor="fecha">Fecha Alta</label>
                                <input 
                                    type="datetime-local" 
                                    className="form-control form-control-lg" 
                                    id="fecha" 
                                    name="fecha"  
                                    onChange={actualizarState}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="score">Score</label>
                                <input 
                                    type="number" 
                                    min="1"
                                    max="100"
                                    className="form-control form-control-lg" 
                                    id="score" 
                                    name="score" 
                                    placeholder="score" 
                                    onChange={actualizarState}
                                />
                            </div>


                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Stat"  />
                        </form>
                    </div>

                </div>
            </div>
        </Fragment>
     );
}
 
export default withRouter(NuevoStat);