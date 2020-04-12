import React from 'react';

// Firebase Config
import './assets/scripts/firebaseConfig.js'

// Estilos globales //
import '../node_modules/alertifyjs/build/css/alertify.min.css';
import '../node_modules/alertifyjs/build/css/themes/semantic.min.css';
import '../node_modules/alertifyjs/build/css/themes/default.min.css';
import '../node_modules/alertifyjs/build/css/themes/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import './assets/styles/global.css';

// Importar componentes //
import HeaderComponent from './components/HeaderComponent.jsx';
import HeaderSlider from './components/SliderComponent.jsx';
import CursosComponent from './components/CursosComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'


const App = () => {
    return (
        <React.Fragment>
           <HeaderComponent/>
           <HeaderSlider/>
           <CursosComponent/>
           <FooterComponent/>
        </React.Fragment>
    );
}


export default App;

