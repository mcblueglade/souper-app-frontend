import React, { useState } from 'react';
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
import UserProvider from "components/providers/UserProvider";
import Application from "components/Application";

// import { Router } from "@reach/router";
import './App.css';

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
