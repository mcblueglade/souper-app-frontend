import React, { useState, useContext } from 'react';
import { UserContext } from "components/providers/UserProvider";
import LoginPage from 'components/Login/LoginPage';
import RegisterPage from 'components/Login/RegisterPage';
import ResetPassword from 'components/Login/ResetPassword';
import ItemListings from 'components/Items/ItemListings.js';
import Header from 'components/Layout/Header.js';
import HeaderLinks from 'components/Layout/HeaderLinks.js';
import { Restaurant } from '@material-ui/icons';
import SouperFooter from 'components/Layout/SouperFooter';
import Parallax from 'components/MaterialKitComponents/Parallax/Parallax.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Application() {
    const user = useContext(UserContext);
    const [registerInputs] = useState([
        { id: 'displayName', label: 'Full Name', type: 'text', icon: 'face' },
        { id: 'userEmail', label: 'Email', type: 'email', icon: 'email' },
        { id: 'userPassword', label: 'Password', type: 'password', icon: 'lock' },
    ]);
    return (
        user ?
            <BrowserRouter>
                <Header
                    brand={<Restaurant />}
                    color='rose'
                    leftLinks={''}
                    rightLinks={<HeaderLinks />}
                    fixed
                />
            </BrowserRouter>
            :
            <BrowserRouter>
                <Switch>
                    <Route path='/login'>
                        <LoginPage />
                    </Route>
                    <Route path='/register'>
                        <RegisterPage registerInputs={registerInputs} />
                    </Route>
                    <Route path='/forgotten'>
                        <ResetPassword />
                    </Route>
                </Switch>
            </BrowserRouter>
        // <BrowserRouter>
        //     <Switch>
        //         <Route path='/login'>
        //             <LoginPage />
        //         </Route>
        //         <Route path='/register'>
        //             <RegisterPage registerInputs={registerInputs} />
        //         </Route>
        //         <Route path='/ForgottenPassword'>
        //             <ResetPassword />
        //         </Route>
        //         <Route path='/'>
        //             <Header
        //                 brand={<Restaurant />}
        //                 color='rose'
        //                 leftLinks={''}
        //                 rightLinks={<HeaderLinks />}
        //                 fixed
        //             />
        //             <Parallax
        //                 small
        //                 filter
        //                 image={require('assets/img/citrus-fruit.jpg')}
        //             />
        //             <ItemListings />
        //             <SouperFooter />
        //         </Route>
        //     </Switch>
        // </BrowserRouter>

    );
}
export default Application;