import React from 'react';

// Firebase Config
import './assets/scripts/firebaseConfig.js'

// Estilos globales //
import './assets/styles/global.css';

// Importar componentes //
import HeaderComponent from './components/HeaderComponent.jsx';
import HeaderSlider from './components/SliderComponent.jsx';
import CursosComponent from './components/CursosComponent.jsx'

const App = () => {
    return (
        <React.Fragment>
           <HeaderComponent/>
           <HeaderSlider/>
           <CursosComponent/>
        </React.Fragment>
    );
}

export default App;

