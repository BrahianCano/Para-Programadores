import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

//Importar Jquery
import $ from 'jquery'
//Firestore
import db from '../assets/scripts/firebaseConfig.js'

//Importar estilos
import '../assets/styles/header.css';

//importar scripts
import '../assets/scripts/header.js'

//Importar alertas de alertifyjs
import alertify from 'alertifyjs';

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

    /*componentDidMount() {
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
     }*/

    render() {
        function alert(){
            alertify.warning('La seccion de "Cursos" se encuentra en desarrollo');
        }
        return (
            <Fragment>


                <header id="header" className="header fixed-top">
                    <nav id="menu" className="container navbar navbar-expand-lg navbar-dark">
                        <Link className="navbar-brand" to="/">
                            <img className="header__logotipo" src={Logotipo} alt="Logotipo Para Programadores" />
                        Para Programadores</Link >
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Inicio</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={alert} >Cursos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sobre-nosotros">Sobre nosotros</Link >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/paraprogramadoresoficial/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.instagram.com/paraprogramadores/" target="_blank"><i className="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

            </Fragment>

        );
    }
}


