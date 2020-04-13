import React, { Component, Fragment } from 'react';

//Importar Jquery
import $ from 'jquery'

//Firestore
import db from '../assets/scripts/firebaseConfig.js'

//Importar estilos
import '../assets/styles/slider.css';

//Importar alertas de alertifyjs
import alertify from 'alertifyjs';

//importar imagenes
import imagen_1 from '../assets/images/designer.svg'


export default class SliderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            correo: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleClick(e) {
        e.preventDefault();

        var user_name = this.state.usuario
        var correo = this.state.correo

        if (user_name.length > 2 && correo.length > 2 && correo.indexOf('@') > -1) {
            $.getJSON('https://api.ipify.org?format=json', function (data) {
                var address_ip = data.ip;

                db.collection("usuarios").doc(address_ip).set({
                    "usuario": user_name,
                    "correo": correo
                })
                    .then(function (docRef) {
                        alertify.success(`¡Listo! Gracias por ser parte de Para Programadores.`);
                        document.getElementById('exampleInputEmail').disabled = true;
                        document.getElementById('exampleInputName').disabled = true;
                    })
                    .catch(function (error) {
                        alertify.warning(`¡Ups! Hubo un error del servidor, revisa tu conexion e intenta de nuevo.`);
                    });
            });
        } else {
            alertify.error('Completa los todos campos y verifica que sean verdaderos.');
        }
    }

    componentDidMount() {
        var address_ip_validated = '';
        $.getJSON('https://api.ipify.org?format=json', function (data) {
            address_ip_validated = data.ip;
        });

        db.collection("usuarios").get().then((querySnapshot) => {
            querySnapshot.docs.map(usuario => {
                if (usuario.id === address_ip_validated) {

                   // console.log('Direccion ip local: ' + address_ip_validated + ' Direccion ip Firebase ' + usuario.id)

                    this.setState({
                        usuario: usuario.data().usuario,
                        correo: usuario.data().correo
                    });
                    document.getElementById('exampleInputEmail').disabled = true;
                    document.getElementById('exampleInputName').disabled = true;
                } else {
                    console.log('Aun no has registrado tus datos')
                }
            })
        });
    }

    render() {
        return (
            <Fragment>

                <section className="slider d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12 text-center col-rigth d-flex justify-content-center align-items-center">

                                <div className="container">
                                    <h1 className="slider__h1" >¡Suscribe te!</h1>
                                    <p className="slider__p" >Hola <b>{this.state.usuario},</b> recibe noticias sobre cursos y mucho mas.</p>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName" className="text-secondary">Ingrese su primer nombre</label>
                                            <input type="text"
                                                placeholder="Alguien"
                                                className="form-control"
                                                id="exampleInputName"
                                                name="usuario"
                                                value={this.state.usuario}
                                                onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail" className="text-secondary" >Ingrese su dirección de correo</label>
                                            <input type="email"
                                                placeholder="alguien@ejemplo.com"
                                                className="form-control"
                                                id="exampleInputEmail"
                                                aria-describedby="emailHelp"
                                                name="correo"
                                                value={this.state.correo}
                                                onChange={this.handleChange} />
                                            <small id="emailHelp" className="form-text text-muted">No compartiremos su correo electrónico con nadie más.</small>
                                        </div>
                                        <button type="submit"
                                            onClick={this.handleClick}
                                            className="btn btn-outline-light">Enviar datos</button>
                                    </form>
                                </div>
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

