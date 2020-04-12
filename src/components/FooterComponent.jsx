import React, { Component, Fragment } from 'react'

import '../assets/styles/footer.css'

export default class FooterComponent extends Component {
    render() {
        return (
            <Fragment>

                <footer className="page-footer font-small stylish-color-dark pt-4">
                    <div className="container text-center text-md-left">

                        <div className="row">
                            <div className="col-md-7 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Acerca de nosotros</h5>
                                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit.
                                </p>
                            </div>

                            <hr className="clearfix w-100 d-md-none" />

                            <div className="col-md-5 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Enlaces</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Inicio</a>
                                    </li>
                                    <li>
                                        <a href="#!">Cursos</a>
                                    </li>
                                    <li>
                                        <a href="#!">Sobre nosostros</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <hr />

                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn btn-primary mx-1">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                       
                  
                        <li className="list-inline-item">
                            <a className="btn btn-danger mx-1">
                                <i className="fab fa-instagram"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-dark mx-1">
                                <i className="fab fa-github"> </i>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#"> Para Programadores</a>
                    </div>
                </footer>


            </Fragment>
        )
    }
}
