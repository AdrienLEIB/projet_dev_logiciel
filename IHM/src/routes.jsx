import React, { Component } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Account from './pages/Account';
import { Redirect, Route, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import ClientUpdate from './pages/ClientUpdate.jsx';
import ClientPasswordUpdate from './pages/ClientPassWordUpdate';
import AdminPage from './pages/AdminPage';
import CreateMotherProduct from './pages/CreateMotherProduct'
import Panier from './pages/Panier'
import ProduitUpdate from './pages/ProduitUpdate';
import MotherProduitUpdate from './pages/MotherProductUpdate';
import CreateProduct from './pages/CreateProduct';
import MCDjson from './pages/MCDjson';
import My404Component from './pages/My404Component';
import My418Component from './pages/My418Component';
// import Manager from './pages/Manager';
// import CreateManager from './pages/CreateManager';
// import Golf from './pages/Golf';
// import CreateGolf from './pages/CreateGolf';
// import EditManager from './pages/EditManager';
// import EditGolf from './pages/EditGolf';

export class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/account" component={Account}/>
                    <Route exact path='/signup' component={SignUp}/>
                    <Route exact path='/product/:id' component={Product}/>
                    <Route exact path='/productDetail/:id' component={ProductDetail}/>
                    <Route exact path='/ClientUpdate/:id' component={ClientUpdate}/>
                    <Route exact path='/ClientPasswordUpdate/:id' component={ClientPasswordUpdate}/>
                    <Route exact path='/AdminPage' component={AdminPage}/>
                    <Route exact path='/createMotherProduit' component={CreateMotherProduct}/>
                    <Route exact path='/panier' component={Panier}/>
                    <Route exact path='/createProduit' component={CreateProduct}/>
                    <Route exact path='/produitUpdate/:id' component={ProduitUpdate}/>
                    <Route exact path='/motherProduitUpdate/:id' component={MotherProduitUpdate}/>

                    {/* CMD */}
                    <Route exact path='/model' component={MCDjson}/>

                    {/* 404 | 418*/}
                    <Route exact path='/faitMoiUnCafe' component={My418Component}/>
                    <Route exact={true} component={My404Component} />
                    <Redirect to="/404"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default withRouter(Routes);
