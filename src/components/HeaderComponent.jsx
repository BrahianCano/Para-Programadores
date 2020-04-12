import React, { Component, Fragment } from 'react';
//Importar Jquery
import $ from 'jquery'
//Firestore
import db from '../assets/scripts/firebaseConfig.js'

//Importar estilos
import '../assets/styles/header.css';

//importar scripts
import '../assets/scripts/header.js'

//importar imagenes
import Logotipo from '../assets/images/logotipo_para_programadores.png'


export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            correo: ''
        };
    }

    componentDidMount() {
        var address_ip_validated = '';
        $.getJSON('https://api.ipify.org?format=json', function (data) {
            address_ip_validated = data.ip;
        });

        db.collection("usuarios").get().then((querySnapshot) => {
            querySnapshot.docs.map(usuario => {
                if (usuario.id === address_ip_validated) {

                    console.log('Direccion ip local: ' + address_ip_validated + ' Direccion ip Firebase ' + usuario.id)

                    this.setState({
                        usuario: usuario.data().usuario,
                        correo: usuario.data().correo
                    });
                } else {
                    console.log('Aun no has registrado tus datos')
                }
            })
        });
    }
    render() {
        return (
            <Fragment>
                <header id="header" className="header fixed-top">
                    <nav id="menu" className="container navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="#">
                            <img className="header__logotipo" src={Logotipo} alt="Logotipo Para Programadores" />
                        Para Programadores</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-toggle="modal" data-target="#modal_user" data-whatever="@mdo">Cursos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sobre nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fab fa-facebook-square"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </Fragment>

        );
    }
}


