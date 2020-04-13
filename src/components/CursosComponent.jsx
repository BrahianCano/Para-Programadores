import React, { Component, Fragment } from 'react'

//importar la configuracion de firestore
import db from '../assets/scripts/firebaseConfig.js'

//Importar estilos
import '../assets/styles/cursos.css';

export default class CursosComponent extends Component {
    state = {
        cursos: []
    }

    componentDidMount() {
        db.collection("cursos").get().then((querySnapshot) => {
            this.setState({
                cursos: querySnapshot.docs.map(curso => {
                    return {
                        id: curso.id,
                        data: curso.data(),
                    }
                })
            })
        });
    }

    render() {
        const { cursos } = this.state;
        //console.log(cursos) //Pendiente borrar en produccion
        return (
            <Fragment>
                
                <section className="cursos container-fluid">
                    <h2 className="text-center cursos__h2" >Cursos disponibles
                        <span className="badge badge-warning"> {cursos.length}</span>
                    </h2>

                    <p className="cursos__p">En cuarentena es momento de aprender cosas nuevas, cursos para jóvenes y adultos, avanzados o principiantes. Tu eliges</p>

                    <div className="row row-cols-xs-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 d-flex justify-content-center">
                        {
                            cursos.map((curso) => (

                                <div key={curso.id.toString()} className="card-deck">
                                    <div className="col mb-3">
                                        <div className="card cursos__card">
                                            <img src={curso.data.img} className="card-img-top" alt="..." />
                                            <div className="card-body cursos__card__body">

                                                <h4 className="card-title cursos__card_h4">{curso.data.titulo}</h4>

                                                <p className="text-muted">{curso.data.autor}</p>

                                                <div className="container-fluid badges">
                                                    <span className="badge badge-warning">{curso.data.certificado}</span>
                                                    <span className="badge badge-success">{curso.data.gratis}</span>
                                                </div>

                                                <p className="card-text">{curso.data.descripcion}</p>

                                                <a type="button" href={curso.data.enlace} className="btn btn_cursos">Ver mas</a>
                                            </div>

                                            <div className="card-footer">
                                                <small className="text-muted">Publicado el {curso.data.fecha}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

            </Fragment>
        )
    }
}
