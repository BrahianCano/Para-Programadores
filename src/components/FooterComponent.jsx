import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';


//Importar alertas de alertifyjs
import alertify from 'alertifyjs';

import '../assets/styles/footer.css'

export default class FooterComponent extends Component {
    render() {
        function alert(){
            alertify.warning('La seccion de "Cursos" se encuentra en desarrollo');
        }
        return (
            <Fragment>

                <footer className="page-footer font-small stylish-color-dark pt-4">
                    <div className="container text-center text-md-left">

                        <div className="row">
                            <div className="col-md-7 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Acerca de nosotros</h5>
                                <p>paraprogramadores es una comunidad de aprendizaje en línea que está dirigida a jóvenes y adultos.
                                  <br/>  Utilizamos contenido previamente creado a la disposición de la comunidad.
                                </p>
                            </div>

                            <hr className="clearfix w-100 d-md-none" />

                            <div className="col-md-5 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Enlaces</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/" className="text-decoration-none">Inicio</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={alert} className="text-decoration-none">Cursos</Link>
                                    </li>
                                    <li>
                                        <Link to="/sobre-nosotros" className="text-decoration-none">Sobre nosostros</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <hr />

                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn btn-primary mx-1" href="https://www.facebook.com/paraprogramadoresoficial/" target="_blank">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-danger mx-1" href="https://www.instagram.com/paraprogramadores/" target="_blank">
                                <i className="fab fa-instagram"> </i>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright text-center py-3">© 2020 Copyright
                    <Link to="/" className="text-decoration-none"> Para Programadores</Link>
                    </div>
                </footer>

            </Fragment>
        )
    }
}
