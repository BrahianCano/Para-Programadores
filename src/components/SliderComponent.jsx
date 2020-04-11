import React, { Component, Fragment } from 'react';

//Importar estilos
import '../assets/styles/slider.css';

//importar imagenes
import imagen_1 from '../assets/images/designer.svg'


export default class SliderComponent extends Component {

    render() {
        return (
            <Fragment>

                <section className="slider d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12 text-center col-rigth d-flex justify-content-center align-items-center">
                                <h1 className="slider__h1" >¡Cursos gratis!</h1>
                                <p className="slider__p" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit, voluptatibus soluta magnam architecto excepturi, et eos quia dolores cupiditate, ea dicta at porro aspernatur dignissimos. Fugiat magni ea dignissimos!</p>
                                <button type="button" className="btn btn-outline-light">Ver todos los cursos</button>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                                <img className="img-fluid slider__img" src={imagen_1} alt="Imagen de chica programadora" />
                            </div>
                        </div>
                    </div>
                </section>

            </Fragment>

        );
    }
}

