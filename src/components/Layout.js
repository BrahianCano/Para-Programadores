import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const Layout = (props) =>{
    return(
        <React.Fragment>
            <HeaderComponent />
            {props.children}
            <FooterComponent/>
        </React.Fragment>
    )

}
export default Layout;