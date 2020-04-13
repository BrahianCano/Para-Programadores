import React, { Component, Fragment } from 'react'

//Importar estilos
import '../assets/styles/slider.css';
import '../assets/styles/aboutus.css';

//importar imagenes
import imagen_1 from '../assets/images/logotipo_para_programadores.png'
import Brahian from '../assets/images/BrahianCano.png'
import Yeisson from '../assets/images/Yeisson.png'
import aliado1 from '../assets/images/aliado1.png'


export default class AboutusComponent extends Component {
    render() {
        return (
            <Fragment>

                <section className="slider d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12 text-center col-rigth d-flex justify-content-center align-items-center">
                                <div className="container">
                                    <h1 className="slider__h1" >Sobre nosotros</h1>
                                    <h5 className="slider__p" ><cite>"Todo el mundo debería saber programar."<br /><br /><small className="text-muted" >-Steve Jobs.</small></cite></h5>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                                <img className="img_about img-fluid shadow-sm" src={imagen_1} alt="Imagen Logo Para Programadores" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container aboutus text-center">
                    <h1>Comunidad para programadores</h1>
                    <p>ParaProgramadores es una comunidad de aprendizaje en línea que está dirigida a jóvenes y adultos.
                        Utilizamos contenido previamente creado a la disposición de la comunidad.</p>

                    <hr className="featurette-divider" />

                    <h1>Fundadores</h1>
                    <div className="row featurette">
                        <div className="col-md-7 text-left">
                            <h2 className="featurette-heading">Brahian Acevedo Cano <span className="text-muted text-warning"> Desarrollador FrontEnd</span></h2>
                            <p>Técnico en desarrollo de software del politécnico Jaime Isaza Cadavid de la ciudad de Medellín.<br />
                                Diplomado en desarrollo Web con énfasis en frontend. <br />
                                Participe de la I Feria Juvenil Latinoamericana de ciencia y tecnología en Panamá y acreditado como Proyecto Ganador en X Feria Central de la ciencia y tecnología de RutaN.</p>
                            <ul className="list-unstyled list-inline text-left text-white">
                                <li className="list-inline-item">
                                    <a className="btn btn-primary mx-1" href="https://www.linkedin.com/in/brahian-acevedo-medellin/" target="_blank">
                                        <i className="fab fa-linkedin"> </i>  linkedin </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-secondary mx-1" href="https://github.com/BrahianCano" target="_blank">
                                        <i className="fab fa-github"> </i>  Github  </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <img className="Responsive image img-fluid mx-auto" src={Brahian} alt="Imagen Brahian Cano" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2 text-right">
                            <h2 className="featurette-heading">Yeisson Osorno Paternina<span className="text-muted text-warning"> Desarrollador BackEnd</span></h2>
                            <p>Soy un joven dedicado, apasionado y entusiasta, en mis tiempos libres me encanta enseñar y aprender sobre temas de desarrollo web , aveces acompañado de una rica pizza! , me gusta Python y JavaScript como lenguajes y considero mis habilidades suficientes para ser un programador junior.</p>
                            <ul className="list-unstyled list-inline text-right text-white">
                                <li className="list-inline-item">
                                    <a className="btn btn-primary mx-1" href="https://www.linkedin.com/in/yeisson-o-82b49b132/" target="_blank">
                                        <i className="fab fa-linkedin"> </i>  linkedin </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-secondary mx-1" target="_blank" href="https://github.com/YeissonOsorno">
                                        <i className="fab fa-github"> </i>  Github  </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img className="Responsive image img-fluid mx-auto" src={Yeisson} alt="Imagen Yeisson Osorno" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <h1>Nuestros aliados</h1>
                    <div className="row text-center justify-content-center">
                        <div className="col-md-3">
                            <a href="https://www.instagram.com/cursos_de_programacion/" className="text-decoration-none" target="_blank">
                                <div className=" aliado">
                                    <img src={aliado1} alt="Imagen Aliado" />
                                    <h5>Cursos de programacion</h5>
                                    <span>Siguelo en instagram</span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://api.whatsapp.com/send?phone=573122507466&text=&source=&data=&app_absent=" className="text-decoration-none" target="_blank">
                                <div className=" aliado">
                                    <img src={imagen_1} alt="Imagen Aliado" />
                                    <span>¿Te gustaria ser parte de nuestros aliados?</span>
                                    <h5>Escribenos</h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://api.whatsapp.com/send?phone=573122507466&text=&source=&data=&app_absent=" className="text-decoration-none" target="_blank">
                                <div className=" aliado">
                                    <img src={imagen_1} alt="Imagen Aliado" />
                                    <span>¿Te gustaria ser parte de nuestros aliados?</span>
                                    <h5>Escribenos</h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

            </Fragment>
        )
    }
}
