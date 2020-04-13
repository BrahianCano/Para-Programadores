import React from 'react'

//Importar componentes de la pantalla principal
import HeaderSlider from '../components/SliderComponent.jsx';
import CursosComponent from '../components/CursosComponent.jsx'

const InicioPage = () => {
    return ( 
        <React.Fragment>
            <HeaderSlider/>
            <CursosComponent/>
        </React.Fragment>
     );
}
 
export default InicioPage;