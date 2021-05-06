import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const  Stats = ({stats}) => {

    // if(stats.length===0) return null;

    return ( 
        <Fragment>
           <h1 className="my-5">Administrador de Stats</h1>

           <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/nuevo'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Stat</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {stats.map(stat => (
                                <a key={stat._id} className="p-5 list-group-item list-group-item-action flex-colum align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3  className="mb-3">{stat.nickname}</h3>
                                        <small className="fecha-alta">
                                            {stat.fecha}
                                        </small>
                                    </div>
                                    <p className="mb-0 font-weight-bold">
                                        SCORE: {stat.score}
                                    </p>
                                </a>
                                
                            ))}
                        </div>
                    </div>

                </div>
           </div>
        </Fragment>
     );
}
 
export default Stats;