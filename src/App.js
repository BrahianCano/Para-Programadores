import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

//Importar Layout de componentes
import Layout from './components/Layout.js'

// Importar componentes //
import HeaderSlider from './components/SliderComponent.jsx';
import CursosComponent from './components/CursosComponent.jsx';
import AboutUsComponent from './components/AboutusComponent.jsx';

// Importar paginas //
import InicioPage from './containers/InicioPage.jsx';

const App = () => {
    return (

        <BrowserRouter>
            <Layout>
                <Switch>
                     <Route exact path = "/" component={InicioPage} />
                     <Route exact path = "/sobre-nosotros" component={AboutUsComponent} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}


export default App;

