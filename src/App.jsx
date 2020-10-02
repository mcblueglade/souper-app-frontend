import React, { useState } from 'react';
import ItemViewPage from './components/Items/ItemViewPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TestData from 'assets/data/TestData.json';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import LandingPage from './views/LandingPage/LandingPage';
import ItemListings from 'components/Items/ItemListings';
import Layout from 'components/Layout/Layout';
import Profile from "./components/Profile/Profile";
import Forgotten from "./components/Login/Forgotten";
import ResetPassword from "./components/Login/ResetPassword";

function App() {
  const [data, setData] = useState(TestData);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register">
          <RegisterPage registerInputs={data['registerInputs']} />
        </Route>
        <Route path="/forgotten" component={Forgotten} />
        <Route path="/reset" component={ResetPassword} />
        <Layout>
          <Route
            path="/itemview"
            render={() => (
              <ItemViewPage item={data['userItems'][0]} />
            )}
          />
          <Route
            path="/mylistings"
            render={() => (
              <ItemViewPage userProfile={data['userProfile']} userItems={data['userItems']} />
            )}
          />
          <Route path="/profile" component={Profile} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/dashboard" component={ItemListings} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
