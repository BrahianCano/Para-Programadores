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
        console.log(cursos) //Pendiente borrar en produccion
        return (
            <Fragment>
                <section className="cursos container-fluid">
                    <h2 className="text-center cursos__h2" >Cursos disponibles
                    <span class="badge badge-warning"> {cursos.length}</span>
                    </h2>
                    <p className="cursos__p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim cum atque beatae ipsum molestias cupiditate est, libero nemo facilis debitis ipsam consectetur sint eum illum maxime cumque blanditiis reiciendis accusantium?</p>
                    <div className="card-deck">
                        {
                            cursos.map((curso, key) => (
                                <div key={key} className="card cursos__card">
                                    <img src={curso.data.img} className="card-img-top" alt="..." />
                                    <div className="card-body cursos__card__body">
                                        <h4 className="card-title cursos__card_h4">{curso.data.titulo}</h4>
                                         <p className="text-muted">{curso.data.autor}</p>
                                         <div className="container-fluid badges">
                                            <span class="badge badge-warning">{curso.data.certificado}</span>
                                            <span class="badge badge-success">{curso.data.gratis}</span>
                                         </div>
                                         
                                         <p className="card-text">{curso.data.descripcion}</p>
                                        <button type="button" className="btn btn_cursos">Ver mas</button>
                                    </div>

                                    <div className="card-footer">
                                        <small className="text-muted">Publicado el {curso.data.fecha}</small>
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
